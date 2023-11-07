export interface User extends StringIndexed {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  login: string;
  avatar: string | null;
  email: string;
}

export interface Message {
  chat_id: number;
  time: Date;
  type: string;
  id: string;
  user_id: number;
  content: string;
  is_read: boolean;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
}

export interface RequestOptions {
  method?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  headers?: { [key: string]: string };
  timeout?: number;
  retries?: number;
}
