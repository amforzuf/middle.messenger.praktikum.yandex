import { ErrorPage } from '../../components/ErrorPage';
import Block from '../../core/Block';
import { tmpl } from './serverError.tmpl';

export class ServerError extends Block {
  init() {
    this.children.error = new ErrorPage({
      errorCodeText: '500',
      errorDescription: 'Мы уже фиксим',
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
