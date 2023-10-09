type PageTypes =
  | 'login'
  | 'registration'
  | 'notFoundError'
  | 'serverError'
  | 'profile'
  | 'change_password'
  | 'chat';

export const urlChange = (event: MouseEvent, path: PageTypes): void => {
  event.preventDefault();
  window.location.href = `?page=${path}`;
};
