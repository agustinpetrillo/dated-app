export interface CreateUser {
  email: string;
  password: string | number;
  username: string;
}

export interface UserLogin {
  email: string;
  password: string | number;
}

export interface UserData {
  email: string;
  name: string;
  last_name: string;
}

export interface GlobalContextType {
  userData: UserData;
  setUserData: (userData: userData) => void;
}
