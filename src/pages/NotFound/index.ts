import { ErrorPage } from '../../components/ErrorPage';
import Block from '../../core/Block';
import { tmpl } from './notFound.tmpl';

export class NotFound extends Block {
  init() {
    this.children.error = new ErrorPage({
      errorCodeText: '404',
      errorDescription: 'Страница не найдена',
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
