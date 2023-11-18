import { PropsWithRouter } from '../../../hocs/withRouter';

export interface HintProps extends PropsWithRouter {
  hintText?: string;
  hintLinkText: string;
  imgSrc?: unknown;
  to: string;
  events?: {
    click: (event: MouseEvent) => void;
  };
}
