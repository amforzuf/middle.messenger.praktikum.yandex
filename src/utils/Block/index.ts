/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Handlebars from 'handlebars';
import { nanoid } from 'nanoid';
import EventBus from '../EventBus';

type Meta = {
  tagName: string;
  props: object;
};

export class Block<P extends Record<string, unknown> = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  public id = `k${nanoid(6)}`;

  private _element: HTMLElement | null = null;

  private _meta: Meta;

  props: P;

  private eventBus: () => EventBus;

  public children: Record<string, Block>;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(propsWithChildren: P, tagName: string = 'div') {
    const eventBus = new EventBus();

    const { props, children } = this._getPropsAndChildren(propsWithChildren);
    this._meta = {
      tagName,
      props,
    };

    this.children = children;

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _getPropsAndChildren(propsWithChildren: P) {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block> = {};
    Object.entries(propsWithChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key as string] = value;
      } else {
        props[key] = value;
      }
    });
    return { props, children };
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  private _init() {
    this._createResources();

    this.init();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {}

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate() {
    const response = this.componentDidUpdate();
    if (!response) {
      return;
    }
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidUpdate() {
    return true;
  }

  _render() {
    const block = this.render();
    this._removeEvents();
    this._element!.innerHTML = '';
    this._element!.append(block);
    this._addEvents();
    this._addAttributes();
    this.addListeners();
  }

  protected addListeners() {}

  protected compile(template: string, propsData: any) {
    const propsAndStubs = { ...propsData };

    Object.entries(this.children).forEach(([name, component]) => {
      propsAndStubs[name] = `<div data-id=${component.id}></div>`;
    });

    const html = Handlebars.compile(template)(propsAndStubs);
    const temp = document.createElement('template');
    temp.innerHTML = html;

    Object.entries(this.children).forEach(([_, component]) => {
      const stub = temp.content.querySelector(`[data-id=${component.id}]`);
      if (!stub) {
        return;
      }
      stub.replaceWith(component.getContent()!);
    });
    return temp.content;
  }

  protected render() {
    return new DocumentFragment();
  }

  _addEvents() {
    let events: object;
    if (this.props.events) {
      events = this.props.events;
      Object.keys(events).forEach((event) => {
        this._element?.addEventListener(event, events[event as keyof typeof events]);
      });
    }
  }

  _removeEvents() {
    let events: object;
    if (this.props.events) {
      events = this.props.events;
      Object.keys(events).forEach((event) => {
        this._element?.removeEventListener(event, events[event as keyof typeof events]);
      });
    }
  }

  _addAttributes() {
    let attributes: object;
    if (this.props.attributes) {
      attributes = this.props.attributes;
      Object.keys(attributes).forEach((attribute) => {
        this._element?.setAttribute(attribute, attributes[attribute as keyof typeof attributes]);
      });
    }
  }

  getContent() {
    return this.element;
  }

  get element() {
    return this._element;
  }

  setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }

    this.props = {
      ...this.props,
      ...nextProps,
    };
    this.eventBus().emit(Block.EVENTS.FLOW_CDU, this.props);
  };

  _makePropsProxy(props: any) {
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldTarget = { ...target };
        target[prop] = value;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, [oldTarget, target]);
        return true;
      },
      deleteProperty() {
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
}
