import Block from '../../core/Block';
import { tmpl } from './errorPage.tmpl';
import { ErrorPageProps } from './types';
import './style.scss';

export class ErrorPage extends Block<ErrorPageProps> {
  render() {
    return this.compile(tmpl, this.props);
  }
}
