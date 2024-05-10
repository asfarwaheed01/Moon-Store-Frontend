export interface User {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  cart: CartItem[];
}

export interface AuthContextType {
  state: AuthState;
  dispatch: React.Dispatch<any>;
}
