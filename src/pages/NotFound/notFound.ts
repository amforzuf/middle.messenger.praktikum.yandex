import { ErrorPage } from '../../components/ErrorPage';
import { Block } from '../../utils/Block';
import { ErrorParams } from './types';
import { tmpl } from './notFound.tmpl';

export default class NotFoundCompiler extends Block<ErrorParams> {
  constructor(props: ErrorParams) {
    super(props, 'div');
  }

  init() {
    this.children.error = new ErrorPage({
      errorCodeText: this.props.statusCode,
      errorDescription: this.props.comment,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}