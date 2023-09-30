export type NavbarItemTypes = {
  name: string;
  path: string;
};

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

export type ProductItemTypes = {
  id: string;
  name: string;
  projectby: string;
  type: string;
  location: string;
  description: string;
  imagePath: string;
};

export type WishlistTypes = {
  id: number;
  name: string;
  imagePath: string;
};

export enum CardType {
  GovernmentCard = '2',
  MemberCard = '4'
}

export enum InputSize {
  MEDIUM = 'medium',
  SMALL = 'small'
}

export enum ItemColor {
  CYAN = 'cyan',
  WHITE = 'white'
}

export enum CarbonTag {
  White = '所有碳權',
  Green = '綠碳',
  Yellow = '黃碳',
  Blue = '藍碳'
}

export enum CompanyStatus {
  NoReview = 0, // 有註冊 尚未送審
  Reviewing = 1, // 送審中
  PassReview = 2 // 審核通過
}

export enum OrderStatus {
  OnSale = 0, // 商品上架中
  OffShelve = 1 // 商品已下架
}

export enum MembershipStep {
  RENEWAL = 'RENEWAL',
  REISSUE = 'REISSUE',
  REVOKED = 'REVOKED'
}

export type MembershipTypes = {
  id: number;
  title: string;
  icon: string;
  slug: MembershipStep;
};

export enum CardRenewalEnum {
  EXPIRY_DATE = 1,
  PAYMENT_METHOD = 2,
  COMPLETE_RENEWAL = 3
}
