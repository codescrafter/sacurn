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
  White = '綠碳,黃碳,藍碳',
  Green = '綠碳',
  Yellow = '黃碳',
  Blue = '藍碳'
}

export enum CompanyStatus {
  NoReview = 0, // 有註冊 尚未送審
  Reviewing = 1, // 送審中
  PassReview = 2, // 審核通過
  CompleteInfo = 3 // 資料填寫完成
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
  path: string;
};

export enum MembershipStepsPath {
  RENEWAL = '/v2/card-renewal',
  REISSUE = '/v2/card-reissue',
  REVOKED = '/v2/card-revoked'
}

export enum CardRenewalEnum {
  EXPIRY_DATE = 1,
  PAYMENT_METHOD = 2,
  COMPLETE_RENEWAL = 3
}

export enum CardMembershipEnum {
  APPLY = 1,
  APPLICATION = 2,
  COMPLETE = 3
}

export type CardMembershipTypes = {
  id: number;
  name: string;
  title: string;
  subTitle: string;
  info: string;
  responseTitle: string;
  responseDetail?: string;
  buttonText?: string;
  terms?: string;
  slug?: string;
};

export enum AccountStepsEnum {
  ACCOUNT_INFORMATION = '/v2/account-information',
  ENTERPRISE_ACCOUNT = '/v2/enterprise-account',
  ACCOUNT_CARBON_CREDIT = '/v2/account-carbon-credit',
  OPERATING_INSTRUCTION = '/v2/operating-instruction'
}

export enum CardRevokedEnum {
  ANNULMENT = 1,
  CANCELLATION_CONFIRMATION = 2,
  COMPLETE_ABOLITION = 3
}

export enum CardReIssueEnum {
  REPORT_LOSS = 1,
  PAYMENT_METHOD = 2,
  APPLICATION_STATUS = 3
}

export type PlatformAccordianTypes = {
  id: number;
  title: string;
  items: {
    name: string;
    description: string;
  }[];
};

export type AccountInformationTypes = {
  key: string;
  value: string;
};
export type AccountInputInfo = {
  key: string;
  value: string;
};

export type PermissionTableHeadingType = {
  img: string;
  title: string;
  subtitle: string;
  text: string;
};
export type PermissionTableBodyType = {
  heading: string;
  data: {
    text: string;
    administratorPermissions: boolean;
    advancedPermissions: boolean;
    basicPermisssions: boolean;
  }[];
};
export type AccountTableBodyItems = {
  created_at: string;
  status: string;
  tran_uuid: string;
  amount: number;
  point: number;
};
export type AccountTableHeadingItems = {
  id: number;
  heading: string;
};
export type SignatureConfirmationModalType = {
  title: string;
  content: {
    text: string;
    isListDisc: boolean;
  }[];
};
export type MembershipDataItems = {
  id: number;
  deleted: boolean;
  deleted_at: null;
  name: string;
  image: null;
  level: number;
  registration_fee: number;
  annual_Renewal_fee: number;
  duration: number;
  recommend: string;
  point: string;
  identity: string[];
  upgrade: UpgradeMembershipData;
  point_multiplier: number;
  buy_cost: number;
  sell_cost: number;
  trade_day_limit: number;
  trade_month_limit: number;
  user_access_limit: number;
  project_estimate: string;
  e_news: number;
  market_trade: number;
  upcoming_release: number;
  rebate_program: number;
};

export type UpgradeMembershipData = {
  orders: number | null;
  points: number | null;
  renewal: boolean;
};
