export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
}
export interface CartegoryLinkProp {
  slug: string;
  title: string;
  image: any;
}
