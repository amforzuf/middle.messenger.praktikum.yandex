import Block from '../../../core/Block';
import { tmpl } from './hint.tmpl';
import './style.scss';
import { HintProps } from './types';
import { withRouter } from '../../../hocs/withRouter';

class BaseHint extends Block<HintProps> {
  constructor(props: HintProps) {
    super({
      ...props,
      events: {
        click: (event) => {
          event.preventDefault();
          this.navigate();
        },
      },
    });
  }

  navigate() {
    this.props.router.go(this.props.to);
  }

  render() {
    return this.compile(tmpl, { ...this.props });
  }
}

export const Hint = withRouter(BaseHint);
