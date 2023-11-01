/* eslint-disable no-console */
/* eslint-disable no-fallthrough */
import { AuthInput } from '../../components/Forms/AuthInput';
import Block from '../../core/Block';
import Validation from './Validation';

interface SubmitPageProps {
  checkInput?: Array<AuthInput>;
  events?: {
    submit: (event: FormDataEvent) => void;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any;
}

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

              case 'popupInput':
                Validation.isEmptyInput(item);
                break;

              case 'sendMessage':
                Validation.isEmptyInput(item);
                break;

              default:
                break;
            }

            isValid = isValid && item!.isValid();
          }
          console.log('valid:', isValid);
          if (isValid) {
            func.call(this, new FormData(this.getContent()!.querySelector('form')!));

            // if (options === 'profilePage') {
            //   this.children.loginInput.props.disabled = true;
            //   this.children.loginInput.props.hide = false;
            //   this.children.passwordInput.props.disabled = true;
            //   this.children.passwordInput.props.hide = true;

            //   this.children.saveButton.props.disabled = true;

            //   this.children.emailInput.props.disabled = true;
            //   this.children.firstNameInput.props.disabled = true;
            //   this.children.secondNameInput.props.disabled = true;
            //   this.children.displayNameInput.props.disabled = true;
            //   this.children.phoneInput.props.disabled = true;

            //   this.children.oldPasswordInput.props.disabled = true;
            //   this.children.passwordRepeatInput.props.disabled = true;

            //   this.children.emailInput.props.hide = false;
            //   this.children.firstNameInput.props.hide = false;
            //   this.children.secondNameInput.props.hide = false;
            //   this.children.displayNameInput.props.hide = false;
            //   this.children.phoneInput.props.hide = false;

            //   this.children.oldPasswordInput.props.hide = true;
            //   this.children.passwordRepeatInput.props.hide = true;
            // }
          }
          return false;
        },
      },
    };
    super(props);
  }
}

export default SubmitPage;
