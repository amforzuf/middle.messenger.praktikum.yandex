/* eslint-disable no-fallthrough */
import Block from '../../core/Block';
import Validation from './ValidationRules';
import { SubmitPageProps } from './types';

export abstract class SubmitPage extends Block {
  protected constructor(func: (formData: FormData) => void, options = '') {
    const props: SubmitPageProps = {
      options,
      events: {
        submit: (evt) => {
          evt.preventDefault();
          let isValid = true;
          // eslint-disable-next-line no-unsafe-optional-chaining
          for (const item of this.props?.checkInput) {
            switch (item.props.name) {
              case 'email':
                Validation.isEmail(item);
                break;

              case 'login':
                Validation.isValidLogin(item);
                break;

              case 'first_name':
                Validation.isValidName(item);
                break;

              case 'second_name':
                Validation.isValidName(item);
                break;

              case 'phone':
                Validation.isPhone(item);
                break;

              case 'old_password':
                Validation.isValidPassword(item);
                break;

              case 'password':
                Validation.isValidPassword(item);
                break;

              case 'password_confirm':
                Validation.arePasswordsEqual(
                  this.props.checkInput.find(
                    (item: { props: { name: string } }) => item.props.name === 'password'
                  ),
                  item
                );
                break;

              case 'display_name':
                Validation.isEmptyInput(item);
                break;

              default:
                break;
            }

            isValid = isValid && item!.isValid();
          }
          if (isValid) {
            func.call(this, new FormData(this.getContent()!.querySelector('form')!));
          }
          return false;
        },
      },
    };
    super(props);
  }
}

export default SubmitPage;
