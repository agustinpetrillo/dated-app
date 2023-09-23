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
  image?: string;
  age?: number;
  description?: string;
  gender?: string;
  sex_preference?: string;
}

export interface GlobalContextType {
  userData: UserData;
  setUserData: (userData: userData) => void;
  loggingProvider: boolean;
  setLoggingProvider: (loggingProvider: boolean) => void;
}
