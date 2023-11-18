/* eslint-disable no-unused-expressions */
import { describe, it } from 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import Block from '.';

const defaultPropValue = 1;

describe('Block', async () => {
  class MockBlock extends Block<{ test?: number; events?: { click: unknown } }> {
    public render() {
      const temp = document.createElement('template');
      temp.innerHTML = '<div><div>';

      return temp.content;
    }
  }

  it('should be an instance of Block', () => {
    const component = new MockBlock({});
    expect(component).to.be.an.instanceOf(Block);
  });

  it('should have a unique ID', () => {
    const component1 = new MockBlock({});
    const component2 = new MockBlock({});
    expect(component1.id).to.not.equal(component2.id);
  });

  it('should have default props when initialized without props', () => {
    const component = new MockBlock({});
    expect(component.props).to.deep.equal({});
  });

  it('should return be rendered after init', () => {
    const component = new MockBlock({});
    expect(component.getContent()).to.be.instanceOf(window.HTMLDivElement);
  });

  it('should update props after init', () => {
    const component = new MockBlock({ test: defaultPropValue });
    expect(component.props.test).to.eq(defaultPropValue);
  });

  it('should update props', () => {
    const component = new MockBlock({ test: defaultPropValue });

    const newTestValue = 2;
    component.setProps({ test: newTestValue });
    expect(component.props.test).to.eq(newTestValue);
  });

  it('should add and remove event listeners correctly', () => {
    const clickHandler = sinon.spy();
    const component = new MockBlock({ events: { click: clickHandler } });
    const element = document.createElement('div');
    component._element = element; // For testing purposes, accessing private property
    component._addEvents();
    element.click();
    expect(clickHandler.calledOnce).to.be.true;

    const removeEventListenerSpy = sinon.spy(element, 'removeEventListener');
    component.removeEvents();
    expect(removeEventListenerSpy.calledOnce).to.be.true;
  });
});
