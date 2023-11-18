import { API } from './api';

export interface UsersProfileData {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface UsersProfilePassword {
  oldPassword: string;
  newPassword: string;
}

export interface UsersResponse {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  login: string;
  avatar: string;
  email: string;
}

export interface SearchData {
  login: string;
}

export interface AvatarResponse {
  avatar: string;
}

export class UsersAPI extends API {
  constructor() {
    super('/user');
  }

  profileInfoChange(data: UsersProfileData): Promise<void> {
    return this.http.put('/profile', data);
  }

  profilePasswordChange(data: UsersProfilePassword): Promise<void> {
    return this.http.put('/password', data);
  }

  avatarChange(data: FormData): Promise<AvatarResponse> {
    return this.http.put('/profile/avatar', data);
  }

  search(data: SearchData): Promise<UsersResponse[]> {
    return this.http.post('/search', data);
  }

  read = undefined;

  create = undefined;

  update = undefined;

  delete = undefined;
}
