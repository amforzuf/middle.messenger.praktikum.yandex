/* eslint-disable @typescript-eslint/no-explicit-any */
import Block from '../Block';
import { isEqual } from '../../utils/commonUtils';
import store, { State, StorageEvent } from './index';

export function withStore<SP extends Record<string, any>>(mapStateToProps: (state: State) => SP) {
  return function wrap<P extends Record<string, any>>(Component: typeof Block<P & SP>) {
    return class WithStore extends Component {
      constructor(props: Omit<P, keyof SP>) {
        let previousState = mapStateToProps(store.getState());

        super({ ...(props as P), ...previousState });

        store.on(StorageEvent.UpdatedState, () => {
          const stateProps = mapStateToProps(store.getState());

          if (isEqual(previousState, stateProps)) {
            return;
          }

          previousState = stateProps;

          this.setProps({ ...this.props, ...stateProps });
        });
      }
    };
  };
}

export const withUser = withStore((state) => ({ ...state.user }));

export const withChats = withStore((state) => ({ chats: state.chats }));

export const withMessages = withStore((state) => ({ messages: state.messages }));

export const withSelectedChat = withStore((state) => ({ selectedChat: state.selectedChat }));

export const withWrittenMessage = withStore((state) => ({ writtenMessage: state.writtenMessage }));
