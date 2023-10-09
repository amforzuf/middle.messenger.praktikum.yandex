import { Block } from '../../utils/Block';

export class Tooltip extends Block {
  constructor(errorMessage: string) {
    super({}, 'p');
    if (this.element) {
      this.element.classList.add('tooltip');
      this.element.textContent = errorMessage;
    }
  }
}
