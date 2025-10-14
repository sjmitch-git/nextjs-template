export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}
