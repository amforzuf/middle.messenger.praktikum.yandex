import { API } from './api';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IndexedString = Record<string, any>;

export interface Chats {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  created_by: number;
  last_message?: {
    user: {
      first_name: string;
      second_name: string;
      avatar: string;
      email: string;
      login: string;
      phone: string;
    };
    time?: Date;
    content?: string;
  };
}

export interface CreateChat {
  title: string;
}

export interface DeleteChat {
  chatId: number;
}

export interface DeleteChatResponse {
  userId: number;
  result: {
    id: number;
    title: string;
    avatar: string;
    created_by: string;
  };
}

export interface UsersData {
  users: number[];
  chatId: number;
}

export type UserResponse = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  avatar: string;
  role: string;
};

export class ChatsAPI extends API {
  constructor() {
    super('/chats');
  }

  public getChats(data?: StringIndexed): Promise<Chats[]> {
    return this.http.get('', data);
  }

  create(data: CreateChat) {
    return this.http.post('', data);
  }

  deleteChat(data: DeleteChat): Promise<DeleteChatResponse> {
    return this.http.delete('', data);
  }

  getUsers(id: number): Promise<UserResponse[]> {
    return this.http.get(`/${id}/users`);
  }

  addUsers(id: Chats['id'], users: UserResponse['id'][]) {
    return this.http.put('/users', { users, chatId: id });
  }

  deleteUsers(id: Chats['id'], users: UserResponse['id'][]) {
    return this.http.delete('/users', { users, chatId: id });
  }

  changeAvatar(id: Chats['id'], avatarData: File) {
    return this.http.put('/avatar', { chatId: id, avatar: avatarData });
  }

  async getToken(id: number): Promise<string> {
    const response = await this.http.post<{ token: string }>(`/token/${id}`);
    return response.token;
  }

  read = undefined;

  update = undefined;

  delete = undefined;
}
