export type ProductDetailTypes = {
  price: number;
  memberCode: string;
  availableQuantity: number;
  minimumUnit: number;
  orderQuantity: number;
};

export type NewsTypes = {
  id: string;
  heading: string;
  description: string;
};

export type CartItemTypes = {
  id: string;
  img: string;
  memberCode: string;
  heading: string;
  price: string;
  left: string;
  total: string;
};

export type SelectedCartItemTypes = {
  id: string;
  name: string;
  quantity: string;
};
