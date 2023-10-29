import { Block } from '../core/Block';
import router from '../core/Router';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withRouter(Component: typeof Block<any>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type Props = typeof Component extends typeof Block<infer P extends Record<string, any>> ? P : any;

  return class extends Component {
    // eslint-disable-next-line no-use-before-define
    constructor(props: Props & PropsWithRouter) {
      super({ ...props, router });
    }
  };
}

export interface PropsWithRouter {
  router: typeof router;
}
