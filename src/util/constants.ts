import {
  CartItemTypes,
  NavbarItemTypes,
  NewsTypes,
  ProductDetailTypes,
  ProductItemTypes,
  SelectedCartItemTypes,
  WishlistTypes
} from '../type';

export const NAVBAR_ITEMS: NavbarItemTypes[] = [
  // {
  //   name: '首頁',
  //   path: '/'
  // },
  {
    name: 'Product List',
    path: '/'
  },
  {
    name: 'Wish List',
    path: '/wishlist'
  },
  {
    name: 'My Stock',
    path: '/sales'
  }
  // {
  //   name: '碳權庫存',
  //   path: '/historical-order'
  // }
];

export const PRODUCT_DETAILS: ProductDetailTypes[] = [
  {
    price: 500,
    memberCode: 'mo12345678',
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0
  },
  {
    price: 500,
    memberCode: 'mo12345678',
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0
  },
  {
    price: 500,
    memberCode: 'mo12345678',
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0
  },
  {
    price: 500,
    memberCode: 'mo12345678',
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0
  },
  {
    price: 500,
    memberCode: 'mo12345678',
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0
  },
  {
    price: 500,
    memberCode: 'mo12345678',
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0
  },
  {
    price: 500,
    memberCode: 'mo12345678',
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0
  },
  {
    price: 500,
    memberCode: 'mo12345678',
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0
  },
  {
    price: 500,
    memberCode: 'mo12345678',
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0
  },
  {
    price: 500,
    memberCode: 'mo12345678',
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0
  },
  {
    price: 500,
    memberCode: 'mo12345678',
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0
  },
  {
    price: 500,
    memberCode: 'mo12345678',
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0
  },
  {
    price: 500,
    memberCode: 'mo12345678',
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0
  },
  {
    price: 500,
    memberCode: 'mo12345678',
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0
  },
  {
    price: 500,
    memberCode: 'mo12345678',
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0
  },
  {
    price: 500,
    memberCode: 'mo12345678',
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0
  },
  {
    price: 500,
    memberCode: 'mo12345678',
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0
  },
  {
    price: 500,
    memberCode: 'mo12345678',
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0
  },
  {
    price: 500,
    memberCode: 'mo12345678',
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0
  },
  {
    price: 500,
    memberCode: 'mo12345678',
    availableQuantity: 100,
    minimumUnit: 10,
    orderQuantity: 0
  }
];

export const LATEST_NEWS: NewsTypes[] = [
  {
    id: '1',
    heading: '證交所董事會通過設碳權交易所示警買碳權相關股注意風險',
    description:
      '【時報-台北電】台股今天受到美股6月升息機率升高，加權指數拉回小跌43點，但盤面個股活蹦亂跳，仍有研揚（6579）、華城（1519）及三陽工業（2206）等29檔股價創歷史新高，另有緯創（3231）等5檔刷歷史新天量。股價攻頂創高有研揚、華城、三陽工業、致茂、研華、揚博、亞航、夏都、山富、弘塑、閎康、定穎投控、萬在、乙盛-KY、宜鼎、高技、德昌、台南-KY、擎邦、華孚、沛亨、旭隼、南俊國際、博晟生醫、台微醫、聯寶、汎銓、宇瞻、青鋼等29檔。另今天爆天量股有緯創、牧東、愛普*、研揚、勤誠等5檔。（新聞來源：工商即時 呂淑美）'
  },
  {
    id: '2',
    heading: '證交所董事會通過設碳權交易所 示警買碳權相關股注意風險',
    description:
      '證交所董事會今通過成立碳權交易所，但對於近期碳權概念股飆漲，證交所董事特別示警，呼籲投資人購買碳權相關股票宜注意投資風險，並不是種樹、買地、用綠電就可以獲得碳權！證交所董事會強調，森林、土壤不會自動產...'
  },
  {
    id: '3',
    heading: '證交所董事會通過設碳權交易所 示警買碳權相關股注意風險',
    description:
      '證交所董事會今通過成立碳權交易所，但對於近期碳權概念股飆漲，證交所董事特別示警，呼籲投資人購買碳權相關股票宜注意投資風險，並不是種樹、買地、用綠電就可以獲得碳權！證交所董事會強調，森林、土壤不會自動產...'
  },
  {
    id: '4',
    heading: '證交所董事會通過設碳權交易所 示警買碳權相關股注意風險',
    description:
      '證交所董事會今通過成立碳權交易所，但對於近期碳權概念股飆漲，證交所董事特別示警，呼籲投資人購買碳權相關股票宜注意投資風險，並不是種樹、買地、用綠電就可以獲得碳權！證交所董事會強調，森林、土壤不會自動產...'
  }
];

export const OPTIONS_LIST: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

export const CART_ITEMS: CartItemTypes[] = [
  {
    id: '1',
    img: '/images/cart/item1.png',
    memberCode: '會員代號：we12345678',
    heading: 'Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance',
    price: '$12,000/噸',
    left: '剩下 888 噸可購',
    total: '$120,000'
  },
  {
    id: '2',
    img: '/images/cart/item2.png',
    memberCode: '會員代號：we12345678',
    heading: 'CarbonCure Concrete Mineralization',
    price: '$12,000/噸',
    left: '剩下 888 噸可購',
    total: '$120,000'
  },
  {
    id: '3',
    img: '/images/cart/item3.png',
    memberCode: '會員代號：we12345678',
    heading: 'Andes Inorganic Soil Carbon',
    price: '$12,000/噸',
    left: '剩下 888 噸可購',
    total: '$120,000'
  },
  {
    id: '4',
    img: '/images/cart/item1.png',
    memberCode: '會員代號：we12345678',
    heading: 'Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance',
    price: '$12,000/噸',
    left: '剩下 888 噸可購',
    total: '$120,000'
  },
  {
    id: '5',
    img: '/images/cart/item2.png',
    memberCode: '會員代號：we12345678',
    heading: 'CarbonCure Concrete Mineralization',
    price: '$12,000/噸',
    left: '剩下 888 噸可購',
    total: '$120,000'
  },
  {
    id: '6',
    img: '/images/cart/item3.png',
    memberCode: '會員代號：we12345678',
    heading: 'Andes Inorganic Soil Carbon',
    price: '$12,000/噸',
    left: '剩下 888 噸可購',
    total: '$120,000'
  }
];

export const SELECTED_CART_ITEMS: SelectedCartItemTypes[] = [
  {
    id: '1',
    name: 'Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance',
    quantity: '100'
  },
  { id: '2', name: 'Andes Inorganic Soil Carbon', quantity: '15' },
  { id: '3', name: 'KOKO Networks Clean Ethanol Cooking Fuel', quantity: '5' }
];

export const PRODUCT_ITEMS: ProductItemTypes[] = [
  {
    id: '1',
    name: 'CarbonCure Concrete Mineralization',
    projectby: 'Project developed by CarbonCure Technologies',
    type: 'carbon removal',
    location: 'Indonisia',
    description:
      'Soil carbon sequestration is the process of increasing organic and inorganic soil carbon through capturing and storing of carbon from plants.',
    imagePath: '/images/products-page/product1.png'
  },
  {
    id: '2',
    name: 'Andes Inorganic Soil Carbon',
    projectby: 'Project developed by CarbonCure Technologies',
    type: 'carbon avoidance',
    location: 'Indonisia',
    description:
      'Soil carbon sequestration is the process of increasing organic and inorganic soil carbon through capturing and storing of carbon from plants.',
    imagePath: '/images/products-page/product2.png'
  },
  {
    id: '3',
    name: 'Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance',
    projectby: 'Project developed by CarbonCure Technologies',
    type: 'carbon removal',
    location: 'Indonisia',
    description:
      'Soil carbon sequestration is the process of increasing organic and inorganic soil carbon through capturing and storing of carbon from plants.',
    imagePath: '/images/products-page/product3.png'
  },
  {
    id: '4',
    name: 'Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance',
    projectby: 'Project developed by CarbonCure Technologies',
    type: 'carbon removal',
    location: 'Indonisia',
    description:
      'Soil carbon sequestration is the process of increasing organic and inorganic soil carbon through capturing and storing of carbon from plants.',
    imagePath: '/images/products-page/product3.png'
  }
];

export const WISHLIST_DATA: WishlistTypes[] = [
  {
    id: 1,
    name: '(VCS-985)Cordillera Azul REDD+ Product',
    imagePath: 'product1'
  },
  {
    id: 2,
    name: '(VCS-985)Cordillera Azul REDD+ Product',
    imagePath: 'product2'
  },

  {
    id: 3,
    name: '(VCS-985)Cordillera Azul REDD+ Product',
    imagePath: 'product3'
  },
  {
    id: 4,
    name: '(VCS-985)Cordillera Azul REDD+ Product Cordillera Azul REDD+ Product',
    imagePath: 'product1'
  },
  {
    id: 5,
    name: '(VCS-985)Cordillera Azul REDD+ Product Cordillera Azul REDD+ Product',
    imagePath: 'product2'
  },
  {
    id: 6,
    name: '(VCS-985)Cordillera Azul REDD+ Product Cordillera Azul REDD+ Product',
    imagePath: 'product3'
  },
  {
    id: 7,
    name: '(VCS-985)Cordillera Azul REDD+ Product',
    imagePath: 'product1'
  },
  {
    id: 8,
    name: '(VCS-985)Cordillera Azul REDD+ Product',
    imagePath: 'product2'
  }
];
export const ProgressBarItems: string[] = [
  '填寫企業資料',
  '填寫企業代表人資料',
  '填寫寫金融機構帳戶資料',
  '服務條款確認',
  '註冊完成'
];

export enum CompanyRegistrationSteps {
  COMPANY_INFO_FORM = 1,
  REPRESENTATIVE_INFO_FORM,
  FINANCIAL_INFO_FORM,
  TERMS_CONFIRMATION,
  REGISTRATION_COMPLETED
}

export const Policy: string = `非常歡迎您光臨「○○網站」（以下簡稱本網站），為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：
一、隱私權保護政策的適用範圍
隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。
二、個人資料的蒐集、處理及利用方式
當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。
本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。
於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的 IP 位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。
為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。
您可以隨時向我們提出請求，以更正或刪除您的帳戶或本網站所蒐集的個人資料等隱私資訊。聯繫方式請見最下方聯繫管道。
三、資料之保護
本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。
如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。
四、網站對外的相關連結
本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。
五、與第三人共用個人資料之政策
本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。
前項但書之情形包括不限於：
經由您書面同意。
法律明文規定。
為免除您生命、身體、自由或財產上之危險。
與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集者依其揭露方式無從識別特定之當事人。
當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。
有利於您的權益。
本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。
六、Cookie 之使用
為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的 Cookie，若您不願接受 Cookie 的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕 Cookie 的寫入，但可能會導致網站某些功能無法正常執行 。
七、隱私權保護政策之修正
本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。
八、聯繫管道
對於本站之隱私權政策有任何疑問，或者想提出變更、移除個人資料之請求，請前往本站「聯絡我們」頁面提交表單。`;
