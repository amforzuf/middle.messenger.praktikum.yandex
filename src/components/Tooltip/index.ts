import { Block } from '../../core/Block';

export class Tooltip extends Block {
  constructor(errorMessage: string) {
    super({});
    if (this.element) {
      this.element.classList.add('tooltip');
      this.element.textContent = errorMessage;
    }
  }
}
