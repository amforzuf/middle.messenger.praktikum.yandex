import { tmpl } from './changeAvatar.tmpl';
import { Button } from '../../components/Forms/Button';
import Block from '../../core/Block';
import { Link } from '../../components/Link';
import { FileInput } from '../../components/Forms/FileInput';
import UsersController from '../../controllers/UsersController';

export class ChangeAvatar extends Block {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);

    this.props.file = null;
  }

  init() {
    this.children.inputFile = new FileInput({
      accept: 'image/*',
      events: {
        change: (e: Event) => {
          const fileInput = e.target as HTMLInputElement;
          const file = fileInput.files?.[0];
          this.props.file = file;
        },
      },
    });

    this.children.cancelBatton = new Link({
      linkText: 'Назад',
      class: 'back-link',
      to: '/settings',
    });

    this.children.saveButton = new Button({
      buttonTitle: 'Изменить',
      type: '',
      class: 'profile-save-button',
      events: {
        click: (event: Event) => {
          event.preventDefault();
          const formData = new FormData();
          formData.append('avatar', this.props.file);
          UsersController.avatarChange(formData);
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
