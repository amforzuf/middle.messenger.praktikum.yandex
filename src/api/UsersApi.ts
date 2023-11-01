import { API } from './api';

export interface IUsersProfileData {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface IUsersProfilePassword {
  oldPassword: string;
  newPassword: string;
}

export class UsersAPI extends API {
  constructor() {
    super('/user');
  }

  profileInfoChange(data: IUsersProfileData): Promise<void> {
    return this.http.put('/profile', data);
  }

  profilePasswordChange(data: IUsersProfilePassword): Promise<void> {
    return this.http.put('/password', data);
  }

  avatarChange(data: FormData): Promise<void> {
    return this.http.put('/profile/avatar', data);
  }
}
