import { v4 as makeUUID } from 'uuid';
import EventBus from '../EventBus';
import { BlockChildren, BlockEvent, BlockProps } from './types';

class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  public id: string = makeUUID();

  private _meta: { tagName: string; props: BlockProps };

  private _element: HTMLElement | null = null;

  protected eventBus: () => EventBus;

  // eslint-disable-next-line no-use-before-define
  protected refs: Record<string, Block> = {};

  protected props: BlockProps;

  protected children: BlockChildren;

  constructor(propsWithChildren: BlockProps = {}, tagName = 'div') {
    const eventBus = new EventBus();
    const { props, children } = this._getChildrenAndProps(propsWithChildren);

    this._meta = { tagName, props };
    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  _getChildrenAndProps(propsWithChildren: BlockProps) {
    const props: BlockProps = {};
    const children: BlockChildren = {};

    Object.entries(propsWithChildren).forEach(([key, value]) => {
      if (Array.isArray(value) && value.every((val) => val instanceof Block)) {
        children[key] = value;
      } else if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props, children };
  }

  private _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  private _init() {
    this.init();
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    this.dispatchComponentDidMount();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected init() {}

  private _componentDidMount() {
    this.componentDidMount();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  componentDidMount(_oldProps?: BlockProps) {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach((item) => {
      if (Array.isArray(item)) {
        item.forEach((childenInArray) => {
          childenInArray.dispatchComponentDidMount();
        });
      } else {
        item.dispatchComponentDidMount();
      }
    });
  }

  private _componentDidUpdate(oldProps: BlockProps, newProps: BlockProps) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(_oldProps: BlockProps, _newProps: BlockProps): boolean {
    return true;
  }

  setProps = (nextProps: BlockProps) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  protected get element() {
    return this._element;
  }

  private _render() {
    const fragment = this.render();
    this._removeEvents();
    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._element.replaceWith(newElement);
    }

    this._element = newElement;

    this._addEvents();
  }

  // Может переопределять пользователь, необязательно трогать
  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected compile(template: (context: any) => string, context: any) {
    const contextAndStubs = { ...context, __refs: this.refs };
    const stub = (id: string | number) => `<div data-id="${id}"></div>`;

    Object.entries(this.children).forEach(([key, item]) => {
      contextAndStubs[key] = Array.isArray(item)
        ? item.reduce((acc, cur) => (acc += stub(cur.id)), '')
        : stub(item.id);
    });

    const html = template(contextAndStubs);
    const temp = document.createElement('template');

    temp.innerHTML = html;

    Object.values(this.children).forEach((item) => {
      if (Array.isArray(item)) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define, no-use-before-define
        item.forEach((a) => replaceWithStub(a));
      } else {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define, no-use-before-define
        replaceWithStub(item);
      }
    });

    function replaceWithStub(item: Block) {
      const stub = temp.content.querySelector(`[data-id="${item.id}"]`);

      if (stub) {
        stub.replaceWith(item.getContent() as Node);
      }
    }

    return temp.content;
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: BlockProps) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;

    return new Proxy(props, {
      get: (target, prop: string) => {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },

      set: (target, prop: string, value) => {
        const oldTarget = { ...target };
        target[prop] = value;
        const newTarget = { ...oldTarget, ...target };
        const { children } = self._getChildrenAndProps(newTarget);
        self.children = { ...self.children, ...children };
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },

      deleteProperty: () => {
        throw new Error('Нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  show() {
    this.getContent()!.style.display = 'block';
  }

  hide() {
    this.getContent()!.style.display = 'none';
  }

  private _addEvents() {
    const { events = {} } = this.props as { events: BlockEvent };
    Object.keys(events).forEach((eventName) => {
      if (this.props.eventElement) {
        this?._element
          ?.querySelector(this.props.eventElement as string)
          ?.addEventListener(eventName, events[eventName]);
      } else {
        this._element?.addEventListener(eventName, events[eventName]);
      }
    });
  }

  private _removeEvents() {
    const { events = {} } = this.props as { events: BlockEvent };

    Object.keys(events).forEach((eventName) => {
      if (this._element) {
        this._element.removeEventListener(eventName, events[eventName]);
      }
    });
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(
      Block.EVENTS.FLOW_CDU,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this._componentDidUpdate.bind(this) as any
    );
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }
}

export default Block;
