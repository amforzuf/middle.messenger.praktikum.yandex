/* eslint-disable prettier/prettier */
/* eslint-disable no-case-declarations */
import {
  validateFirstName,
  validateLastName,
  validateLogin,
  validateEmail,
  validatePassword,
  validatePhone,
  validateMessage,
} from './validation';

interface FormData {
  firstName?: string;
  lastName?: string;
  login?: string;
  email?: string;
  password?: string;
  phone?: string;
  message?: string;
  confirm_password?: string;
  new_password?: string;
  confirm_new_password?: string;
}

export const handleSubmit = (event: Event, fieldsToCheck: string[]) => {
  event.preventDefault();

  const formData: FormData = {};
  const invalidFields: string[] = [];

  fieldsToCheck.forEach((field) => {
    switch (field) {
      case 'first_name':
        const firstNameInput = document.getElementById('first_name') as HTMLInputElement;
        if (validateFirstName(firstNameInput.value)) {
          formData.firstName = firstNameInput.value;
        } else {
          invalidFields.push('First Name');
        }
        break;

      case 'second_name':
        const lastNameInput = document.getElementById('second_name') as HTMLInputElement;
        if (validateLastName(lastNameInput.value)) {
          formData.lastName = lastNameInput.value;
        } else {
          invalidFields.push('Last Name');
        }
        break;

      case 'login':
        const loginInput = document.getElementById('login') as HTMLInputElement;
        if (validateLogin(loginInput.value)) {
          formData.login = loginInput.value;
        } else {
          invalidFields.push('Login');
        }
        break;

      case 'email':
        const emailInput = document.getElementById('email') as HTMLInputElement;
        if (validateEmail(emailInput.value)) {
          formData.email = emailInput.value;
        } else {
          invalidFields.push('Email');
        }
        break;

      case 'password':
        const passwordInput = document.getElementById('password') as HTMLInputElement;
        if (validatePassword(passwordInput.value)) {
          formData.password = passwordInput.value;
        } else {
          invalidFields.push('Password');
        }
        break;

      case 'new_password':
        const newPasswordInput = document.getElementById('new_password') as HTMLInputElement;
        if (validatePassword(newPasswordInput.value)) {
          formData.new_password = newPasswordInput.value;
        } else {
          invalidFields.push('New Password');
        }
        break;

      case 'confirm_password':
        const confirmPasswordInput = document.getElementById(
          'confirm_password'
        ) as HTMLInputElement;
        const confirmPasswordValue = confirmPasswordInput.value;
        if (confirmPasswordValue === passwordInput!.value) {
          formData.confirm_password = confirmPasswordValue;
        } else {
          invalidFields.push('Confirm Password');
        }
        break;

        case 'confirm_new_password':
          const confirmNewPasswordInput = document.getElementById(
            'confirm_new_password'
          ) as HTMLInputElement;
          const confirmNewPasswordValue = confirmNewPasswordInput.value;
          if (confirmNewPasswordValue === newPasswordInput!.value) {
            formData.confirm_new_password = confirmNewPasswordValue;
          } else {
            invalidFields.push('Confirm new password');
          }
        break;

      case 'phone':
        const phoneInput = document.getElementById('phone') as HTMLInputElement;
        if (validatePhone(phoneInput.value)) {
          formData.phone = phoneInput.value;
        } else {
          invalidFields.push('Phone');
        }
        break;

      case 'message':
        const messageInput = document.getElementById('message') as HTMLInputElement;
        if (validateMessage(messageInput.value)) {
          formData.message = messageInput.value;
        } else {
          invalidFields.push('Message');
        }
        break;

      default:
        console.error('Invalid field specified for validation');
    }
  });

  if (invalidFields.length === 0) {
    console.log('Form data:', formData);
  } else {
    console.log('Invalid fields:', invalidFields);
  }
};
