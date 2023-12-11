/* eslint-disable import/extensions */

import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';

import Block from '../Block/index.ts';
import { router } from './Router.ts';

describe('Router', () => {
  global.window.history.back = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
    }
  };

  global.window.history.forward = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
    }
  };

  const dispatchComponentDidMountFake = sinon.fake.returns(undefined);
  const removeEventsFake = sinon.fake.returns(undefined);
  const getContentFake = sinon.fake.returns(document.createElement('div'));

  class CustomFakeBlock {
    protected dispatchComponentDidMount = dispatchComponentDidMountFake;

    protected removeEvents = removeEventsFake;

    protected getContent = getContentFake;
  }

  class CustomRealBlock extends Block {}

  const blocks = {
    CustomFakeBlock,
    CustomRealBlock,
  };

  sinon.stub(blocks, 'CustomRealBlock').returns(new CustomFakeBlock());

  beforeEach(() => {
    router.reset();
    getContentFake.resetHistory();
    dispatchComponentDidMountFake.resetHistory();
    removeEventsFake.resetHistory();
  });

  describe('forward() method', () => {
    it('should render a page upon history forward action', () => {
      router.use('/', blocks.CustomRealBlock).start();
      router.forward();
      expect(getContentFake.callCount).to.eq(2);
    });

    it('should remove events of the current block on forward action', () => {
      router.use('/', blocks.CustomRealBlock).start();
      router.forward();
      expect(getContentFake.called).to.eq(true);
    });
  });

  describe('back() method', () => {
    it('should render a page upon history back action', () => {
      router.use('/', blocks.CustomRealBlock).start();
      router.back();
      expect(getContentFake.callCount).to.eq(2);
    });

    it('should remove events of the current block on back action', () => {
      router.use('/', blocks.CustomRealBlock).start();
      router.back();
      expect(getContentFake.called).to.eq(true);
    });
  });

  it('should return Router instance when using use() method', () => {
    const result = router.use('/', blocks.CustomRealBlock);
    expect(result).to.eq(router);
  });

  it('should render a page upon start', () => {
    router.use('/', blocks.CustomRealBlock).start();
    expect(dispatchComponentDidMountFake.callCount).to.eq(1);
  });
});
