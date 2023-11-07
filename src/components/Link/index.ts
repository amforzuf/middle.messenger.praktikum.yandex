import Block from '../../core/Block';
import { tmpl } from './link.tmpl';
import './style.scss';
import { LinkProps } from './types';
import { withRouter } from '../../hocs/withRouter';

class BaseLink extends Block<LinkProps> {
  constructor(props: LinkProps) {
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

export const Link = withRouter(BaseLink);
