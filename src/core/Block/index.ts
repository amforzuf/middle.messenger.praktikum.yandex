/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Handlebars from 'handlebars';
import { nanoid } from 'nanoid';
import EventBus from '../EventBus';

class Block<P extends Record<string, any> = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
    DELETE_EVENT: 'delete_event',
  } as const;

  public id = nanoid(6);

  props: P;

  public children: Record<string, Block<any> | Block<any>[]>;

  private eventBus: () => EventBus;

  public _element: HTMLElement | null = null;

  public constructor(propsWithChildren: P) {
    const eventBus = new EventBus();

    const { props, children } = this._getChildrenAndProps(propsWithChildren);
    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */

  _getChildrenAndProps(childrenAndProps: P): {
    props: P;
    children: Record<string, Block<P> | Block<P>[]>;
  } {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block<P> | Block<P>[]> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length > 0 && value.every((v) => v instanceof Block)) {
        children[key] = value;
      } else if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });
    return { props: props as P, children };
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.DELETE_EVENT, this._removeEvents.bind(this));
  }

  _addEvents() {
    const { events = {} } = this.props as P & { events: Record<string, () => void> };

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  private _removeEvents() {
    if (this.props.events !== null && this.props.events !== undefined) {
      Object.keys(this.props.events).forEach((eventName) => {
        this._element?.removeEventListener(eventName, this.props.events[eventName]);
      });
    }
  }

  public removeEvents(): void {
    this._removeEvents();
    Object.keys(this.children).forEach((child) => {
      if (Array.isArray(this.children[child])) {
        (this.children[child] as Block<P>[]).forEach((ch) => ch.removeEvents());
      } else {
        (this.children[child] as Block<P>).removeEvents();
      }
    });
  }

  private _init() {
    this.init();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {}

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((ch) => ch.dispatchComponentDidMount());
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(_oldProps: P, _newProps: P): boolean {
    return true;
  }

  public setProps = (nextProps: P): void => {
    if (nextProps == null) {
      return;
    }
    Object.assign(this.props, nextProps);
    this._componentDidUpdate(this.props, nextProps);
  };

  getProps() {
    return this.props;
  }

  public get element(): HTMLElement | null {
    return this._element;
  }

  private _render(): void {
    const fragment = this.render();
    this._removeEvents();
    const newElement = fragment.firstElementChild as HTMLElement;
    if (this._element && newElement) {
      this._element.replaceWith(newElement);
    }
    this._element = newElement;
    this._addEvents();
  }

  public compile(template: string, context: any) {
    const contextAndStubs = { ...context };
    Object.entries(this.children).forEach(([name, component]) => {
      if (Array.isArray(component)) {
        contextAndStubs[name] = component.map((child) => `<div data-id="${child.id}"></div>`);
      } else {
        contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
      }
    });
    const html = Handlebars.compile(template)(contextAndStubs);
    const temp = document.createElement('template');
    temp.innerHTML = html;
    const replaceStub = (component: Block) => {
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`);
      if (!stub) {
        return;
      }
      component.getContent()?.append(...Array.from(stub.childNodes));
      stub.replaceWith(component.getContent()!);
    };

    Object.entries(this.children).forEach(([_, component]) => {
      if (Array.isArray(component)) {
        component.forEach(replaceStub);
      } else {
        replaceStub(component);
      }
    });

    return temp.content;
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: P) {
    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, prop: string, value) => {
        const oldTarget = { ...target };
        target[prop as keyof P] = value;

        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty: (target, prop) => {
        if (prop === 'events') {
          this.eventBus().emit(
            Block.EVENTS.DELETE_EVENT,
            Object.getOwnPropertyNames(target[prop])[0],
            target[prop]
          );
          return true;
        }
        throw new Error('Нет доступа');
      },
    });
  }

  show() {}

  hide() {
    this._element!.innerHTML = '';
  }
}

export default Block;
