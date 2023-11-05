import Block from '../../../core/Block';
import { tmpl } from './searchInput.tmpl';
import { SearchInputProps } from './types';

export class SearchInput extends Block<SearchInputProps> {
  protected render(): DocumentFragment {
    return this.compile(tmpl, this.props);
  }
}
