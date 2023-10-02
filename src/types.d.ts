interface CreateUser {
  email: string;
  password: string | number;
  username: string;
}

interface UserLogin {
  email: string;
  password: string | number;
}

interface UserData {
  _id: string;
  email: string;
  name: string;
  last_name: string;
  avatar?: string;
  age?: number;
  description?: string;
  gender?: string;
  sex_preference?: string;
}

interface PopUps {
  email: boolean;
  password: boolean;
}

interface GlobalContextType {
  userData: UserData;
  setUserData: (userData: userData) => void;
  loggingProvider: boolean;
  setLoggingProvider: (loggingProvider: boolean) => void;
  openPopUp: PopUps;
  setOpenPopUp: (openPopUp: object) => void;
  openChat: boolean;
  setOpenChat: (openChat: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}
