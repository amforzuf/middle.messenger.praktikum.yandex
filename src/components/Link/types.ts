import { PropsWithRouter } from '../../hocs/withRouter';

export interface LinkProps extends PropsWithRouter {
  to: string;
  linkText: string;
  class?: string;
  events?: {
    click: (event: MouseEvent) => void;
  };
}
