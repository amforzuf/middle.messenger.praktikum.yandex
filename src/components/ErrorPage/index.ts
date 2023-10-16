import { Block } from '../../utils/Block';
import { tmpl } from './errorPage.tmpl';
import { ErrorPageProps } from './types';
import './style.scss';

export class ErrorPage extends Block {
  constructor(props: ErrorPageProps) {
    super({
      ...props,
      events: {},
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
