import Block from '../../../core/Block';
import { tmpl } from './fileInput.tmpl';
import { inputFileProps } from './types';
import './style.scss';

export class FileInput extends Block<inputFileProps> {
  render() {
    return this.compile(tmpl, this.props);
  }
}
