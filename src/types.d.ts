export interface CreateUser {
  email: string;
  password: string | number;
  username: string;
}

export interface UserLogin {
  email: string;
  password: string | number;
}
