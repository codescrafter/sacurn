import {
  CartItemTypes,
  NavbarItemTypes,
  NewsTypes,
  ProductDetailTypes,
  ProductItemTypes,
  SelectedCartItemTypes,
  WishlistTypes
} from '../type';

export const REGISTRATION_COMPLETED_STATUS = 3;
export const REGISTRATION_PENDING_STATUS = 1;

export const NAVBAR_ITEMS: NavbarItemTypes[] = [
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

export const MIN_CART_QTY = 1;

export const COUNTY_LIST = [
  {
    value: '基隆市',
    slug: 'keelung-city'
  },
  {
    value: '台北市',
    slug: 'taipei-city'
  },
  {
    value: '新北市',
    slug: 'new-taipei-city'
  },
  {
    value: '桃園市',
    slug: 'taoyuan-city'
  },
  {
    value: '新竹市',
    slug: 'hsinchu-city'
  },
  {
    value: '新竹縣',
    slug: 'hsinchu-county'
  },
  {
    value: '苗栗縣',
    slug: 'miaoli-county'
  },
  {
    value: '台中市',
    slug: 'taichung'
  },
  {
    value: '彰化縣',
    slug: 'changhua-county'
  },
  {
    value: '南投縣',
    slug: 'nantou-county'
  },
  {
    value: '雲林縣',
    slug: 'yunlin-county'
  },
  {
    value: '嘉義市',
    slug: 'chiayi-city'
  },
  {
    value: '嘉義縣',
    slug: 'chiayi-county'
  },
  {
    value: '台南市',
    slug: 'tainan-city'
  },
  {
    value: '高雄市',
    slug: 'kaohsiung-city'
  },
  {
    value: '屏東縣',
    slug: 'pingtung-county'
  },
  {
    value: '台東縣',
    slug: 'taitung-county'
  },
  {
    value: '花蓮縣',
    slug: 'hualien-county'
  },
  {
    value: '宜蘭縣',
    slug: 'yilan-county'
  },
  {
    value: '澎湖縣',
    slug: 'penghu-county'
  },
  {
    value: '金門縣',
    slug: 'kinmen-county'
  },
  {
    value: '連江縣',
    slug: 'lienchiang-county'
  }
];

export const URBAN_AREA_LIST = [
  {
    value: ['仁愛區', '信義區', '中正區', '中山區', '安樂區', '暖暖區', '七堵區'],
    slug: '基隆市'
  },
  {
    value: [
      '中正區',
      '大同區',
      '中山區',
      '松山區',
      '大安區',
      '萬華區',
      '信義區',
      '士林區',
      '北投區',
      '內湖區',
      '南港區',
      '文山區'
    ],
    slug: '台北市'
  },
  {
    value: [
      '萬里區',
      '金山區',
      '板橋區',
      '汐止區',
      '深坑區',
      '石碇區',
      '瑞芳',
      '平溪',
      '雙溪',
      '貢寮',
      '新店',
      '坪林',
      '烏來',
      '永和',
      '中和',
      '土城',
      '三峽',
      '樹林',
      '鶯歌',
      '三重',
      '新莊',
      '泰山',
      '林口',
      '蘆洲',
      '五股',
      '八里',
      '淡水',
      '三芝',
      '石門'
    ],
    slug: '新北市'
  },
  {
    value: [
      '中壢區',
      '平鎮區',
      '龍潭區',
      '楊梅區',
      '新屋區',
      '觀音區',
      '桃園區',
      '龜山區',
      '八德區',
      '大溪區',
      '復興區',
      '大園區',
      '蘆竹區'
    ],
    slug: '桃園市'
  },
  {
    value: ['東區', '北區', '香山區'],
    slug: '新竹市'
  },
  {
    value: [
      '竹北市',
      '湖口鄉',
      '新豐鄉',
      '新埔鎮',
      '關西鎮',
      '芎林鄉',
      '寶山鄉',
      '竹東鎮',
      '五峰鄉',
      '橫山鄉',
      '尖石鄉',
      '北埔鄉',
      '峨眉鄉'
    ],
    slug: '新竹縣'
  },
  {
    value: [
      '竹南鎮',
      '頭份市',
      '三灣鄉',
      '南庄鄉',
      '獅潭鄉',
      '後龍鎮',
      '通霄鎮',
      '苑裡鎮',
      '苗栗市',
      '造橋鄉',
      '頭屋鄉',
      '公館鄉',
      '大湖鄉',
      '泰安鄉',
      '銅鑼鄉',
      '三義鄉',
      '西湖鄉',
      '卓蘭鎮'
    ],
    slug: '苗栗縣'
  },
  {
    value: [
      '中區',
      '東區',
      '南區',
      '西區',
      '北區',
      '北屯區',
      '西屯區',
      '南屯區',
      '太平區',
      '大里區',
      '霧峰區',
      '烏日區',
      '豐原區',
      '后里區',
      '石岡區',
      '東勢區',
      '和平區',
      '新社區',
      '潭子區',
      '大雅區',
      '神岡區',
      '大肚區',
      '沙鹿區',
      '龍井區',
      '梧棲區',
      '清水區',
      '大甲區',
      '外埔區',
      '大安區'
    ],
    slug: '台中市'
  },
  {
    value: [
      '彰化市',
      '芬園鄉',
      '花壇鄉',
      '秀水鄉',
      '鹿港鎮',
      '福興鄉',
      '線西鄉',
      '和美鎮',
      '伸港鄉',
      '員林市',
      '社頭鄉',
      '永靖鄉',
      '埔心鄉',
      '溪湖鎮',
      '大村鄉',
      '埔鹽鄉',
      '田中鎮',
      '北斗鎮',
      '田尾鄉',
      '埤頭香',
      '溪州鄉',
      '竹塘鄉',
      '二林鎮',
      '大城鄉',
      '芳苑鄉',
      '二水鄉'
    ],
    slug: '彰化縣'
  },
  {
    value: [
      '南投市',
      '中寮鄉',
      '草屯鎮',
      '國姓鄉',
      '埔里鎮',
      '仁愛鄉',
      '名間鄉',
      '集集鎮',
      '水里鄉',
      '魚池鄉',
      '信義鄉',
      '竹山鎮',
      '鹿谷鄉'
    ],
    slug: '南投縣'
  },
  {
    value: [
      '斗南鎮',
      '大埤鄉',
      '虎尾鎮',
      '土庫鎮',
      '褒忠鄉',
      '東勢鄉',
      '臺西鄉',
      '崙背鄉',
      '麥寮鄉',
      '斗六市',
      '林內鄉',
      '古坑鄉',
      '莿桐鄉',
      '西螺鎮',
      '二崙鄉',
      '北港鎮',
      '水林鄉',
      '口湖鄉',
      '四湖鄉',
      '元長鄉'
    ],
    slug: '雲林縣'
  },
  {
    value: ['東區', '西區'],
    slug: '嘉義市'
  },
  {
    value: [
      '番路鄉',
      '梅山鄉',
      '竹崎鄉',
      '阿里山鄉',
      '中埔鄉',
      '大埔鄉',
      '水上鄉',
      '鹿草鄉',
      '太保市',
      '朴子市',
      '東石鄉',
      '六腳鄉',
      '新港鄉',
      '民雄鄉',
      '大林鄉',
      '溪口鄉',
      '義竹鄉',
      '布袋鎮'
    ],
    slug: '嘉義縣'
  },
  {
    value: [
      '中西區',
      '東區',
      '南區',
      '北區',
      '安平區',
      '安南區',
      '永康區',
      '歸仁區',
      '新化區',
      '左鎮區',
      '玉井區',
      '楠西區',
      '南化區',
      '仁德區',
      '關廟區',
      '龍崎區',
      '官田區',
      '麻豆區',
      '佳里區',
      '西港區',
      '七股區',
      '將軍區',
      '學甲區',
      '北門區',
      '新營區',
      '後壁區',
      '白河區',
      '東山區',
      '六甲區',
      '下營區',
      '柳營區',
      '鹽水區',
      '善化區',
      '大內區',
      '山上區',
      '新市區',
      '安定區'
    ],
    slug: '台南市'
  },
  {
    value: [
      '新興區',
      '前金區',
      '苓雅區',
      '鹽埕區',
      '鼓山區',
      '旗津區',
      '前鎮區',
      '三民區',
      '楠梓區',
      '小港區',
      '左營區',
      '仁武區',
      '大社區',
      '岡山區',
      '路竹區',
      '阿蓮區',
      '田寮區',
      '燕巢區',
      '橋頭區',
      '梓官區',
      '彌陀區',
      '永安區',
      '湖內區',
      '鳳山區',
      '大寮區',
      '林園區',
      '鳥松區',
      '大樹區',
      '旗山區',
      '美濃區',
      '六龜區',
      '內門區',
      '杉林區',
      '甲仙區',
      '桃源區',
      '那瑪夏區',
      '茂林區',
      '茄萣區'
    ],
    slug: '高雄市'
  },
  {
    value: [
      '屏東市',
      '三地門鄉',
      '霧臺鄉',
      '瑪家鄉',
      '九如鄉',
      '里港鄉',
      '高樹鄉',
      '鹽埔鄉',
      '長治鄉',
      '麟洛鄉',
      '竹田鄉',
      '內埔鄉',
      '萬丹鄉',
      '潮州鎮',
      '泰武鄉',
      '來義鄉',
      '萬巒鄉',
      '崁頂鄉',
      '新埤鄉',
      '南州鄉',
      '林邊鄉',
      '東港鎮',
      '琉球鄉',
      '佳冬鄉',
      '新園鄉',
      '枋寮鄉',
      '枋山鄉',
      '春日鄉',
      '獅子鄉',
      '車城鄉',
      '牡丹鄉',
      '恆春鎮',
      '滿州鄉'
    ],
    slug: '屏東縣'
  },
  {
    value: [
      '台東市',
      '綠島鄉',
      '蘭嶼鄉',
      '延平鄉',
      '卑南鄉',
      '鹿野鄉',
      '關山鎮',
      '海端鄉',
      '池上鄉',
      '東河鄉',
      '成功鎮',
      '長濱鄉',
      '太麻里鄉',
      '金峰鄉',
      '大武鄉',
      '達仁鄉'
    ],
    slug: '台東縣'
  },
  {
    value: [
      '花蓮市',
      '新城鄉',
      '秀林鄉',
      '吉安鄉',
      '壽豐鄉',
      '鳳林鎮',
      '光復鄉',
      '豐濱鄉',
      '瑞穗鄉',
      '萬榮鄉',
      '玉里鎮',
      '卓溪鄉',
      '富里鄉'
    ],
    slug: '花蓮縣'
  },
  {
    value: [
      '宜蘭市',
      '頭城鎮',
      '礁溪鄉',
      '壯圍鄉',
      '員山鄉',
      '羅東鎮',
      '三星鄉',
      '大同鄉',
      '五結鄉',
      '冬山鄉',
      '蘇澳鎮',
      '南澳鄉',
      '釣魚臺'
    ],
    slug: '宜蘭縣'
  },
  {
    value: ['馬公市', '西嶼鄉', '望安鄉', '七美鄉', '白沙鄉', '湖西鄉'],
    slug: '澎湖縣'
  },
  {
    value: ['金沙鎮', '金湖鎮', '金寧鄉', '金城鎮', '烈嶼鄉', '烏坵鄉'],
    slug: '金門縣'
  },
  {
    value: ['南竿鄉', '北竿鄉', '莒光鄉', '東引鄉'],
    slug: '連江縣'
  }
];
export const FINANCIAL_INSTUITION_LIST = [
  {
    value: [
      '臺灣銀行',
      '臺灣土地銀行',
      '合作金庫商業銀行',
      '第一商業銀行',
      '華南商業銀行',
      '彰化商業銀行',
      '上海商業儲蓄銀行股份有限公司',
      '台北富邦商業銀行',
      '國泰世華商業銀行',
      '中國輸出入銀行',
      '高雄銀行股份有限公司',
      '兆豐國際商業銀行',
      '王道商業銀行股份有限公司',
      '臺灣中小企業銀行',
      '渣打國際商業銀行股份有限公司',
      '台中商業銀行',
      '京城商業銀行',
      '滙豐(台灣)商業銀行',
      '瑞興商業銀行股份有限公司',
      '華泰商業銀行',
      '臺灣新光商業銀行股份有限公司',
      '陽信商業銀行',
      '板信商業銀行',
      '三信商業銀行',
      '聯邦商業銀行',
      '遠東國際商業銀行',
      '元大商業銀行',
      '永豐商業銀行',
      '玉山商業銀行',
      '凱基商業銀行股份有限公司',
      '星展(台灣)商業銀行',
      '台新國際商業銀行',
      '安泰商業銀行股份有限公司',
      '中國信託商業銀行股份有限公司',
      '將來商業銀行股份有限公司',
      '連線商業銀行股份有限公司',
      '樂天國際商業銀行股份有限公司'
    ],
    slug: '本國銀行'
  },
  {
    value: ['中華郵政'],
    slug: '郵局'
  },
  {
    value: [
      '台北市第五信用合作社',
      '基隆第一信用合作社',
      '基隆市第二信用合作社',
      '淡水第一信用合作社',
      '淡水信用合作社',
      '宜蘭信用合作社',
      '桃園信用合作社',
      '新竹第一信用合作社',
      '新竹第三信用合作社',
      '台中市第二信用合作社',
      '彰化第一信用合作社',
      '彰化第五信用合作社',
      '彰化第六信用合作社',
      '彰化第十信用合作社',
      '彰化縣鹿港信用合作社',
      '嘉義市第三信用合作社',
      '臺南第三信用合作社',
      '高雄市第三信用合作社',
      '花蓮第一信用合作社',
      '花蓮第二信用合作社',
      '澎湖縣第一信用合作社',
      '澎湖第二信用合作社',
      '金門縣信用合作社'
    ],
    slug: '信用合作社'
  },
  {
    value: [
      '高樹鄉農會信用部',
      '屏東縣萬巒地區農會信用部',
      '桃園市觀音區農會信用部',
      '新北市樹林區農會信用部',
      '臺中市石岡區農會信用部',
      '南投縣中寮鄉農會信用部',
      '全國農業金庫',
      '花蓮縣玉溪地區農會信用部',
      '苗栗縣後龍鎮農會信用部'
    ],
    slug: '農會信用部'
  },
  {
    value: ['屏東縣東港區漁會信用部'],
    slug: '漁會信用部'
  }
];

export const FINANCIAL_CATEGORY = [
  {
    value: '本國銀行',
    slug: 'Domestic bank'
  },
  {
    value: '郵局',
    slug: 'post office'
  },
  {
    value: '信用合作社',
    slug: 'credit store'
  },
  {
    value: '農會信用部',
    slug: 'argiculture store'
  },
  {
    value: '漁會信用部',
    slug: 'fishery store'
  }
];
export const REGION_AREA_LIST = [
  { value: '200', slug: '仁愛區' },
  { value: '201', slug: '信義區' },
  { value: '202', slug: '中正區' },
  { value: '203', slug: '中山區' },
  { value: '204', slug: '安樂區' },
  { value: '205', slug: '暖暖區' },
  { value: '206', slug: '七堵區' },
  { value: '100', slug: '中正區' },
  { value: '103', slug: '大同區' },
  { value: '104', slug: '中山區' },
  { value: '105', slug: '松山區' },
  { value: '106', slug: '大安區' },
  { value: '108', slug: '萬華區' },
  { value: '110', slug: '信義區' },
  { value: '111', slug: '士林區' },
  { value: '112', slug: '北投區' },
  { value: '114', slug: '內湖區' },
  { value: '115', slug: '南港區' },
  { value: '116', slug: '文山區' },
  { value: '207', slug: '萬里區' },
  { value: '208', slug: '金山區' },
  { value: '220', slug: '板橋區' },
  { value: '221', slug: '汐止區' },
  { value: '222', slug: '深坑區' },
  { value: '223', slug: '石碇區' },
  { value: '224', slug: '瑞芳區' },
  { value: '226', slug: '平溪區' },
  { value: '227', slug: '雙溪區' },
  { value: '228', slug: '貢寮區' },
  { value: '231', slug: '新店區' },
  { value: '232', slug: '坪林區' },
  { value: '233', slug: '烏來區' },
  { value: '234', slug: '永和區' },
  { value: '235', slug: '中和區' },
  { value: '236', slug: '土城區' },
  { value: '237', slug: '三峽區' },
  { value: '238', slug: '樹林區' },
  { value: '239', slug: '鶯歌區' },
  { value: '241', slug: '三重區' },
  { value: '242', slug: '新莊區' },
  { value: '243', slug: '泰山區' },
  { value: '244', slug: '林口區' },
  { value: '247', slug: '蘆洲區' },
  { value: '248', slug: '五股區' },
  { value: '249', slug: '八里區' },
  { value: '251', slug: '淡水區' },
  { value: '252', slug: '三芝區' },
  { value: '253', slug: '石門區' },
  { value: '320', slug: '中壢區' },
  { value: '324', slug: '平鎮區' },
  { value: '325', slug: '龍潭區' },
  { value: '326', slug: '楊梅區' },
  { value: '327', slug: '新屋區' },
  { value: '328', slug: '觀音區' },
  { value: '330', slug: '桃園區' },
  { value: '333', slug: '龜山區' },
  { value: '334', slug: '八德區' },
  { value: '335', slug: '大溪區' },
  { value: '336', slug: '復興區' },
  { value: '337', slug: '大園區' },
  { value: '338', slug: '蘆竹區' },
  { value: '300', slug: '東區' },
  { value: '300', slug: '北區' },
  { value: '300', slug: '香山區' },
  { value: '302', slug: '竹北市' },
  { value: '303', slug: '湖口鄉' },
  { value: '304', slug: '新豐鄉' },
  { value: '305', slug: '新埔鎮' },
  { value: '306', slug: '關西鎮' },
  { value: '307', slug: '芎林鄉' },
  { value: '308', slug: '寶山鄉' },
  { value: '310', slug: '竹東鎮' },
  { value: '311', slug: '五峰鄉' },
  { value: '312', slug: '橫山鄉' },
  { value: '313', slug: '尖石鄉' },
  { value: '314', slug: '北埔鄉' },
  { value: '315', slug: '峨眉鄉' },
  { value: '350', slug: '竹南鎮' },
  { value: '351', slug: '頭份鎮' },
  { value: '352', slug: '三灣鄉' },
  { value: '353', slug: '南庄鄉' },
  { value: '354', slug: '獅潭鄉' },
  { value: '356', slug: '後龍鎮' },
  { value: '357', slug: '通霄鎮' },
  { value: '358', slug: '苑裡鎮' },
  { value: '360', slug: '苗栗市' },
  { value: '361', slug: '造橋鄉' },
  { value: '362', slug: '頭屋鄉' },
  { value: '363', slug: '公館鄉' },
  { value: '364', slug: '大湖鄉' },
  { value: '365', slug: '泰安鄉' },
  { value: '366', slug: '銅鑼鄉' },
  { value: '367', slug: '三義鄉' },
  { value: '368', slug: '西湖鄉' },
  { value: '369', slug: '卓蘭鎮' },
  { value: '400', slug: '中區' },
  { value: '401', slug: '東區' },
  { value: '402', slug: '南區' },
  { value: '403', slug: '西區' },
  { value: '404', slug: '北區' },
  { value: '406', slug: '北屯區' },
  { value: '407', slug: '西屯區' },
  { value: '408', slug: '南屯區' },
  { value: '411', slug: '太平區' },
  { value: '412', slug: '大里區' },
  { value: '413', slug: '霧峰區' },
  { value: '414', slug: '烏日區' },
  { value: '420', slug: '豐原區' },
  { value: '421', slug: '后里區' },
  { value: '422', slug: '石岡區' },
  { value: '423', slug: '東勢區' },
  { value: '424', slug: '和平區' },
  { value: '426', slug: '新社區' },
  { value: '427', slug: '潭子區' },
  { value: '428', slug: '大雅區' },
  { value: '429', slug: '神岡區' },
  { value: '432', slug: '大肚區' },
  { value: '433', slug: '沙鹿區' },
  { value: '434', slug: '龍井區' },
  { value: '435', slug: '梧棲區' },
  { value: '436', slug: '清水區' },
  { value: '437', slug: '大甲區' },
  { value: '438', slug: '外埔區' },
  { value: '439', slug: '大安區' },
  { value: '500', slug: '彰化市' },
  { value: '502', slug: '芬園鄉' },
  { value: '503', slug: '花壇鄉' },
  { value: '504', slug: '秀水鄉' },
  { value: '505', slug: '鹿港鎮' },
  { value: '506', slug: '福興鄉' },
  { value: '507', slug: '線西鄉' },
  { value: '508', slug: '和美鎮' },
  { value: '509', slug: '伸港鄉' },
  { value: '510', slug: '員林市' },
  { value: '511', slug: '社頭鄉' },
  { value: '512', slug: '永靖鄉' },
  { value: '513', slug: '埔心鄉' },
  { value: '514', slug: '溪湖鎮' },
  { value: '515', slug: '大村鄉' },
  { value: '516', slug: '埔鹽鄉' },
  { value: '520', slug: '田中鎮' },
  { value: '521', slug: '北斗鎮' },
  { value: '522', slug: '田尾鄉' },
  { value: '523', slug: '埤頭鄉' },
  { value: '524', slug: '溪州鄉' },
  { value: '525', slug: '竹塘鄉' },
  { value: '526', slug: '二林鎮' },
  { value: '527', slug: '大城鄉' },
  { value: '528', slug: '芳苑鄉' },
  { value: '530', slug: '二水鄉' },
  { value: '540', slug: '南投市' },
  { value: '541', slug: '中寮鄉' },
  { value: '542', slug: '草屯鎮' },
  { value: '544', slug: '國姓鄉' },
  { value: '545', slug: '埔里鎮' },
  { value: '546', slug: '仁愛鄉' },
  { value: '551', slug: '名間鄉' },
  { value: '552', slug: '集集鎮' },
  { value: '553', slug: '水里鄉' },
  { value: '555', slug: '魚池鄉' },
  { value: '556', slug: '信義鄉' },
  { value: '557', slug: '竹山鎮' },
  { value: '558', slug: '鹿谷鄉' },
  { value: '630', slug: '斗南鎮' },
  { value: '631', slug: '大埤鄉' },
  { value: '632', slug: '虎尾鎮' },
  { value: '633', slug: '土庫鎮' },
  { value: '634', slug: '褒忠鄉' },
  { value: '635', slug: '東勢鄉' },
  { value: '636', slug: '臺西鄉' },
  { value: '637', slug: '崙背鄉' },
  { value: '638', slug: '麥寮鄉' },
  { value: '640', slug: '斗六市' },
  { value: '643', slug: '林內鄉' },
  { value: '646', slug: '古坑鄉' },
  { value: '647', slug: '莿桐鄉' },
  { value: '648', slug: '西螺鎮' },
  { value: '649', slug: '二崙鄉' },
  { value: '651', slug: '北港鎮' },
  { value: '652', slug: '水林鄉' },
  { value: '653', slug: '口湖鄉' },
  { value: '654', slug: '四湖鄉' },
  { value: '655', slug: '元長鄉' },
  { value: '600', slug: '東區' },
  { value: '600', slug: '西區' },
  { value: '602', slug: '番路鄉' },
  { value: '603', slug: '梅山鄉' },
  { value: '604', slug: '竹崎鄉' },
  { value: '605', slug: '阿里山鄉' },
  { value: '606', slug: '中埔鄉' },
  { value: '607', slug: '大埔鄉' },
  { value: '608', slug: '水上鄉' },
  { value: '611', slug: '鹿草鄉' },
  { value: '612', slug: '太保市' },
  { value: '613', slug: '朴子市' },
  { value: '614', slug: '東石鄉' },
  { value: '615', slug: '六腳鄉' },
  { value: '616', slug: '新港鄉' },
  { value: '621', slug: '民雄鄉' },
  { value: '622', slug: '大林鎮' },
  { value: '623', slug: '溪口鄉' },
  { value: '624', slug: '義竹鄉' },
  { value: '625', slug: '布袋鎮' },
  { value: '700', slug: '中西區' },
  { value: '701', slug: '東區' },
  { value: '702', slug: '南區' },
  { value: '704', slug: '北區' },
  { value: '708', slug: '安平區' },
  { value: '709', slug: '安南區' },
  { value: '710', slug: '永康區' },
  { value: '711', slug: '歸仁區' },
  { value: '712', slug: '新化區' },
  { value: '713', slug: '左鎮區' },
  { value: '714', slug: '玉井區' },
  { value: '715', slug: '楠西區' },
  { value: '716', slug: '南化區' },
  { value: '717', slug: '仁德區' },
  { value: '718', slug: '關廟區' },
  { value: '719', slug: '龍崎區' },
  { value: '720', slug: '官田區' },
  { value: '721', slug: '麻豆區' },
  { value: '722', slug: '佳里區' },
  { value: '723', slug: '西港區' },
  { value: '724', slug: '七股區' },
  { value: '725', slug: '將軍區' },
  { value: '726', slug: '學甲區' },
  { value: '727', slug: '北門區' },
  { value: '730', slug: '新營區' },
  { value: '731', slug: '後壁區' },
  { value: '732', slug: '白河區' },
  { value: '733', slug: '東山區' },
  { value: '734', slug: '六甲區' },
  { value: '735', slug: '下營區' },
  { value: '736', slug: '柳營區' },
  { value: '737', slug: '鹽水區' },
  { value: '741', slug: '善化區' },
  { value: '742', slug: '大內區' },
  { value: '743', slug: '山上區' },
  { value: '744', slug: '新市區' },
  { value: '745', slug: '安定區' },
  { value: '800', slug: '新興區' },
  { value: '801', slug: '前金區' },
  { value: '802', slug: '苓雅區' },
  { value: '803', slug: '鹽埕區' },
  { value: '804', slug: '鼓山區' },
  { value: '805', slug: '旗津區' },
  { value: '806', slug: '前鎮區' },
  { value: '807', slug: '三民區' },
  { value: '811', slug: '楠梓區' },
  { value: '812', slug: '小港區' },
  { value: '813', slug: '左營區' },
  { value: '814', slug: '仁武區' },
  { value: '815', slug: '大社區' },
  { value: '817', slug: '東沙群島' },
  { value: '819', slug: '南沙群島' },
  { value: '820', slug: '岡山區' },
  { value: '821', slug: '路竹區' },
  { value: '822', slug: '阿蓮區' },
  { value: '823', slug: '田寮區' },
  { value: '824', slug: '燕巢區' },
  { value: '825', slug: '橋頭區' },
  { value: '826', slug: '梓官區' },
  { value: '827', slug: '彌陀區' },
  { value: '828', slug: '永安區' },
  { value: '829', slug: '湖內區' },
  { value: '830', slug: '鳳山區' },
  { value: '831', slug: '大寮區' },
  { value: '832', slug: '林園區' },
  { value: '833', slug: '鳥松區' },
  { value: '840', slug: '大樹區' },
  { value: '842', slug: '旗山區' },
  { value: '843', slug: '美濃區' },
  { value: '844', slug: '六龜區' },
  { value: '845', slug: '內門區' },
  { value: '846', slug: '杉林區' },
  { value: '847', slug: '甲仙區' },
  { value: '848', slug: '桃源區' },
  { value: '849', slug: '那瑪夏區' },
  { value: '851', slug: '茂林區' },
  { value: '852', slug: '茄萣區' },
  { value: '900', slug: '屏東市' },
  { value: '901', slug: '三地門鄉' },
  { value: '902', slug: '霧臺鄉' },
  { value: '903', slug: '瑪家鄉' },
  { value: '904', slug: '九如鄉' },
  { value: '905', slug: '里港鄉' },
  { value: '906', slug: '高樹鄉' },
  { value: '907', slug: '鹽埔鄉' },
  { value: '908', slug: '長治鄉' },
  { value: '909', slug: '麟洛鄉' },
  { value: '911', slug: '竹田鄉' },
  { value: '912', slug: '內埔鄉' },
  { value: '913', slug: '萬丹鄉' },
  { value: '920', slug: '潮州鎮' },
  { value: '921', slug: '泰武鄉' },
  { value: '922', slug: '來義鄉' },
  { value: '923', slug: '萬巒鄉' },
  { value: '924', slug: '崁頂鄉' },
  { value: '925', slug: '新埤鄉' },
  { value: '926', slug: '南州鄉' },
  { value: '927', slug: '林邊鄉' },
  { value: '928', slug: '東港鎮' },
  { value: '929', slug: '琉球鄉' },
  { value: '931', slug: '佳冬鄉' },
  { value: '932', slug: '新園鄉' },
  { value: '940', slug: '枋寮鄉' },
  { value: '941', slug: '枋山鄉' },
  { value: '942', slug: '春日鄉' },
  { value: '943', slug: '獅子鄉' },
  { value: '944', slug: '車城鄉' },
  { value: '945', slug: '牡丹鄉' },
  { value: '946', slug: '恆春鎮' },
  { value: '947', slug: '滿州鄉' },
  { value: '950', slug: '台東市' },
  { value: '951', slug: '綠島鄉' },
  { value: '952', slug: '蘭嶼鄉' },
  { value: '953', slug: '延平鄉' },
  { value: '954', slug: '卑南鄉' },
  { value: '955', slug: '鹿野鄉' },
  { value: '956', slug: '關山鎮' },
  { value: '957', slug: '海端鄉' },
  { value: '958', slug: '池上鄉' },
  { value: '959', slug: '東河鄉' },
  { value: '961', slug: '成功鎮' },
  { value: '962', slug: '長濱鄉' },
  { value: '963', slug: '太麻里鄉' },
  { value: '964', slug: '金峰鄉' },
  { value: '965', slug: '大武鄉' },
  { value: '966', slug: '達仁鄉' },
  { value: '970', slug: '花蓮市' },
  { value: '971', slug: '新城鄉' },
  { value: '972', slug: '秀林鄉' },
  { value: '973', slug: '吉安鄉' },
  { value: '974', slug: '壽豐鄉' },
  { value: '975', slug: '鳳林鎮' },
  { value: '976', slug: '光復鄉' },
  { value: '977', slug: '豐濱鄉' },
  { value: '978', slug: '瑞穗鄉' },
  { value: '979', slug: '萬榮鄉' },
  { value: '981', slug: '玉里鎮' },
  { value: '982', slug: '卓溪鄉' },
  { value: '983', slug: '富里鄉' },
  { value: '260', slug: '宜蘭市' },
  { value: '261', slug: '頭城鎮' },
  { value: '262', slug: '礁溪鄉' },
  { value: '263', slug: '壯圍鄉' },
  { value: '264', slug: '員山鄉' },
  { value: '265', slug: '羅東鎮' },
  { value: '266', slug: '三星鄉' },
  { value: '267', slug: '大同鄉' },
  { value: '268', slug: '五結鄉' },
  { value: '269', slug: '冬山鄉' },
  { value: '270', slug: '蘇澳鎮' },
  { value: '272', slug: '南澳鄉' },
  { value: '290', slug: '釣魚台列嶼' },
  { value: '880', slug: '馬公市' },
  { value: '881', slug: '西嶼鄉' },
  { value: '882', slug: '望安鄉' },
  { value: '883', slug: '七美鄉' },
  { value: '884', slug: '白沙鄉' },
  { value: '885', slug: '湖西鄉' },
  { value: '890', slug: '金沙鎮' },
  { value: '891', slug: '金湖鎮' },
  { value: '892', slug: '金寧鄉' },
  { value: '893', slug: '金城鎮' },
  { value: '894', slug: '烈嶼鄉' },
  { value: '896', slug: '烏坵鄉' },
  { value: '209', slug: '南竿鄉' },
  { value: '210', slug: '北竿鄉' },
  { value: '211', slug: '莒光鄉' },
  { value: '212', slug: '東引鄉' }
];

// TODO: update correct values according to backend
export const locationOptions = [
  {
    name: 'Asia',
    value: 'Asia'
  },
  {
    name: 'Africa',
    value: 'Africa'
  },
  {
    name: 'Europe',
    value: 'Europe'
  },
  {
    name: 'North American',
    value: 'North American'
  },
  {
    name: 'South American',
    value: 'South American'
  },
  {
    name: 'South Pacific',
    value: 'South Pacific'
  }
];

export const PRECAUTIONS = [
  '若您的電子信箱已變更，請洽平台客服專線(02)2221-7000，或email至客服信箱 service@sacurn.com 。',
  '重新產生通知信驗證碼每日上限 5 次，為確保您的交易安全，請立即至您的信箱收取通知信，並於10分鐘內完成動態驗證碼驗證，若未完成申請步驟，郵件內的動態驗證碼將會失效，請再重新申請',
  '如未收到驗證信件，請確認您留存的電子郵件地址是否正確及電子郵件信箱是否正常使用，或是被您的郵件伺服器判斷為垃圾郵件。'
];

export const PASSWORD_RESET_STEPS = [
  '若您忘記密碼，需請您填寫您的帳號及註冊信箱。',
  '完成身分驗證後，平台將寄信至您的信箱，請您點擊信件中的重設密碼連結後，重新設定密碼',
  '密碼重設連結僅15分鐘內有效，請您成功送出申請後，儘速完成重設密碼'
];

export const MEMBERS_TERMS = [
  {
    id: 1,
    title: '產品及服務說明與同意條款',
    content: [
      {
        id: 1.1,
        detail: '「會員」：本公司之會員，會員之詳細等級請參本服務條款第 8 條。'
      },
      {
        id: 1.2,
        detail:
          '「土星碳權憑證」係指本公司依據本公司於國際自願性碳權交易平台取得或經國際、國內認證機構核發之自願性碳權，所等量發行之電子憑證。'
      },
      {
        id: 1.3,
        detail:
          '「碳權抵換」係指會員利用本公司之專案抵換顧問服務，本公司將持該會員之土星碳權憑證至前述之國際認證機構進行抵換，以達碳中和之目的。'
      },
      {
        id: 1.4,
        detail:
          '您了解並同意，本公司僅針對本公司發行之土星碳權憑證負有依本協議內容提供服務之義務，會員不得要求本公司以非本公司發行之碳權憑證履行任何義務。'
      }
    ]
  },
  {
    id: 2,
    title: '電子文件之合意',
    content: [
      {
        id: 2.1,
        detail:
          '本協議係採電子文件，依電子簽章法相關規範，會員於使用本平台前，應詳細閱讀本協議及其他本平台公布之服務相關條款，並有至少 3 日之審閱期。會員瞭解，於本平台勾選「我已閱讀並同意土星永續股份有限公司服務條款、隱私權聲明、Cookie 政策」之選項時，即表示會員已經詳細審閱並了解本协议的所有條款，且已經過審閱期達 3 日以上。會員願意完全遵守本協議以及與使用本平台、土星碳權憑證相關之管理規章、規則；若會員無法遵守本平台、本協議之內容、或對本協議內容全部或部分不同意時，請勿使用本平台及本服務。另，會員於本平台勾選「我已閱讀並同意土星永續公司服務條款、隱私權聲明、Cookie 政策」，應保證其已取得完整之授權，如為法人者，應得代表其所屬法人簽署本協議。'
      },
      {
        id: 2.2,
        detail:
          '會員應負責保管帳號以及密碼，會員經所註冊之帳號及密碼登入本平台後，視同有權人親自操作；且其所勾選之「同意」或類似選項，性質上視同有權人親自簽名同意，會員應接受其等同親自簽名之法律效力。'
      }
    ]
  },
  {
    id: 3,
    title: '會員資格及申請註冊',
    content: [
      {
        id: 3.1,
        detail: '本公司僅供已依所屬國相關法規合法取得商業登記之法人申請加入成為會員。'
      },
      {
        id: 3.2,
        detail:
          '於註冊會員時，申請者應詳閱本協議後勾選「我已閱讀並同意土星永續公司服務條款、隱私權聲明、Cookie 政策」之選項。本平台受理會員註冊申請後，將自受理申請表後[24]小時內通知申請者繳交身分驗證相關文件，待申請者繳納所有文件及註冊費用新台幣 30,000 元後並經本公司審核確認後，本公司將核予會員身分，包括發給會員升級卡及主帳號以供登入本平台系統。'
      },
      {
        id: 3.3,
        detail: '本公司保有拒絕申請者註冊之權利，如本平台認為不適當者，得拒絕申請者入會之申請。'
      },
      {
        id: 3.4,
        detail: '除前款本公司不予核可之情形外，申請者繳納所有文件及註冊費用後即無請求退費之權利。'
      }
    ]
  },
  {
    id: 4,
    title: '洗錢防制配合義務',
    content: [
      {
        id: 4.1,
        detail:
          '會員同意，如基於法規或行政機關之要求，本公司得依洗錢防制相關規範內容，於定時或不定時，向會員驗證資料與核對交易資料，以踐行洗錢防制作業，會員對此有配合之義務。'
      },
      {
        id: 4.2,
        detail:
          '如會員拒絕提供資料或所提供之資料並非真實、正確及完整者，經本公司通知補正後仍未補正，將視為重大違約，本公司得依土星永續股份有限公司會員服務條款第 14 條規定終止該會員之資格。'
      }
    ]
  },
  {
    id: 5,
    title: '會員帳戶使用與保管',
    content: [
      {
        id: 5.1,
        detail:
          '會員應妥善保管其帳戶及密碼資訊，並正確、安全地使用其帳戶及密碼資訊。會員未盡上述義務導致帳戶密碼遺失、帳戶被盜用或因冒名使用而引起糾紛或造成損害者，會員應承擔因此所致法律責任。如因此造成本公司損害，本公司得請求會員賠償該損害，並有權暫停會員使用本平台之權限，直到該損害獲得賠償。'
      },
      {
        id: 5.2,
        detail:
          '本公司有權審查會員註冊所提供的資料是否真實，會員必須擔保在註冊及使用本服務過程中所提供予本平台的資料、以及所留存的資料，均為完整、正確、與實際情況相符之資料，如果該等資料事後有變更，會員必須即時通知本公司；若事後發現資料不符、或資料變更而未即時通知本公司，本公司除得隨時取消或暫停會員之帳戶外，並得隨時拒絕對會員提供本服務之一部或全部，且本公司不因此而承擔任何責任。'
      },
      {
        id: 5.3,
        detail:
          '如會員發現其帳戶或密碼被他人非法使用或有使用異常情況者，應及時通知本公司，本公司有權採取措施暫停該帳戶的登入和使用。惟因會員帳戶或密碼被他人非法使用所致之損害，本公司不負任何責任。'
      }
    ]
  },
  {
    id: 6,
    title: '服務之暫停',
    content: [
      {
        id: 6.1,
        detail:
          '本公司為進行本平台之伺服器、軟硬體之檢查、維修、升級等事項，將向會員事先通知並於一定期間內暫停本平台之一部或全部之服務。但會員不得以該服務暫停為由，向本公司請求返還費用或請求損害賠償。'
      },
      {
        id: 6.2,
        detail:
          '於下列情形，本公司得不事先通知，於一定期間內暫停本平台之一部或全部之服務。會員不得以該服務暫停為由，向本公司請求返還費用或請求損害賠償責任。'
      },
      {
        id: '6.2.1',
        detail: '因電腦系統、網路設備，或電信業者機房線路等發生事故、故障而停止；'
      },
      {
        id: '6.2.2',
        detail: '因天災、停電、第三人之行為等其他不可抗力或不得歸責於本公司之事由所導致之服務暫停。'
      }
    ]
  },
  {
    id: 7,
    title: '土星碳權憑證與價金',
    content: [
      {
        id: 7.1,
        detail:
          '本公司於本平台所販售之土星碳權憑證，係屬非以有型媒介提供之數位憑證，並無消費者保護法有關鑑賞期規定之適用。'
      },
      {
        id: 7.2,
        detail: '會員得於本平台所列各專案提出申購，其價格與數量依本公司於本平台公告內容為準。'
      },
      {
        id: 7.3,
        detail:
          '會員了解並同意，各標的物之資訊、編號、價金、稅額計算與扣除交易手續費之資訊，詳如使用者於本平台頁面所選擇之專案所示。'
      },
      {
        id: 7.4,
        detail:
          '如會員欲下載附有本公司電子簽章之土星碳權憑證或委由本公司發行附有本公司簽章之紙本土星碳權憑證，應繳納新台幣 1500 元整。'
      }
    ]
  },
  {
    id: 8,
    title: '交易手續費、會員等級與相關權益',
    content: [
      {
        id: 8.1,
        detail:
          '會員同意，當使用本服務時，除應繳納註冊費用外，亦應繳納平台費用，包括年續會費及土星碳權憑證交易手續費等。'
      },
      {
        id: 8.2,
        detail:
          '會員得因推薦他人加入會員、購買訂單或依訂單其他條件內容獲得積分，該積分得作為升級條件之用，惟具體詳細會員等級、交易手續費及相關權益，應以本平台頁面為主。'
      },
      {
        id: 8.3,
        detail: '如平台費用及會員等級與相關權益有變動者，本公司應於 60 日前以公告方式告知會員。'
      }
    ]
  },
  {
    id: 9,
    title: '土星碳權憑證之抵換',
    content: [
      {
        id: 9.1,
        detail:
          '會員同意若其欲透過本公司提供土星碳權憑證之抵換，應依照本平台指定方式進行申請，詳細抵換之費用、條款與條件，以會員與本公司另行簽署之「土星永續股份有限公司 碳權抵換專案合約條款」為準。'
      }
    ]
  },
  {
    id: 10,
    title: '責任限制',
    content: [
      {
        id: 10.1,
        detail:
          '如依法令或契約本公司須就會員使用或無法使用本服務負任何賠償或違約責任時，會員同意本公司所負賠償責任，於法律允許之最大限度內，以本公司已收受會員所繳納費用之總額為賠償責任之上限。'
      },
      {
        id: 10.2,
        detail:
          '如因法院、行政機關之要求或命令或判決，令本公司提交相關資料及材料者，或令本公司暫停對會員之部分或全部服務，或其他依法應作為之義務，本公司不因該對法院、行政機關之要求或命令或判決之遵守，承擔對會員之任何賠償責任。'
      },
      {
        id: 10.3,
        detail:
          '除非因故意或重大過失，否則本公司不對因土星碳權憑證之交易而導致使用者之任何直接、間接、附帶、特殊、懲罰性損害負擔賠償責任，包括但不限於利潤損失、股價下跌損失、商譽損失、薪資損失或行政罰鍰與其他法律責任。'
      },
      {
        id: 10.4,
        detail:
          '除非另有約定，本公司不對因以下原因所導致之任何問題或損失負責，包括天災、戰爭、恐怖主義活動、罷工、勞動爭議、政府行為、司法命令或其他不可抗力因素。'
      },
      {
        id: 10.5,
        detail:
          '本公司將對本平台系統將定期進行備份與維修，本公司將盡力維護資料之完整性，但仍無法百分之百擔保資料之完整性，就誤刪之資訊，或錯誤或資料備份之失敗，本公司不負任何賠償之責。'
      }
    ]
  },
  {
    id: 11,
    title: '會員行為規範及會員之聲明與擔保',
    content: [
      {
        id: 11.1,
        detail:
          '會員於本平台所刊登之言論、敘述、文件及其他內容，應確保不得侵害他人權益，包括但不限於侵害他人智慧財產權、誹謗他人名譽、影響他人商譽等行為，如有上述行為經其他會員檢舉或由本公司發現者，本公司得有權不通知會員情況下，先行刪除該等言論、敘述、文件及其他內容，並嗣後通知該會員之違反情狀。如會員經通知後仍再度違反，本公司有權暫停會員一部或全部之帳戶功能。'
      },
      {
        id: 11.2,
        detail:
          '會員聲明與保證：\n11.2.1 會員擁有簽訂本協議並遵守本協議相關條款之法律權限、權利及能力，且當會員於本協議為任何意思表示或行為時，均具備實施該行為之完整授權。\n11.2.2 會員係基於合法之目的使用本服務，將遵守本協議條款及所有適用之法律、規定、守則、政策及規範等，如有違反者，將視為違反本協議情節重大，本公司得逕終止本協議。'
      }
    ]
  },
  {
    id: 12,
    title: '專案刊登資訊之責任承擔與免除',
    content: [
      {
        id: 12.1,
        detail:
          '任何由會員刊登於本平台之專案內容，若有文字、文件、影片、照片、圖片、聲音或其他內容者（以下稱「內容」），均由該會員承擔責任，本公司對會員未經授權之內容，不承擔任何責任。'
      },
      {
        id: 12.2,
        detail:
          '如上述內容有明顯侵害他人權利之虞，本公司得先行刪除該等內容或將該等內容設定為未公開，並嗣後通知該會員之違反情狀。如會員經通知後仍再度違反，本公司有權暫停會員一部或全部之帳戶功能。'
      },
      {
        id: 12.3,
        detail:
          '如因會員所提供之內容引起第三人有任何權利主張，或違反相關法令或主管機關命令者，本公司得要求該會員為適當之調整，並向該第三方尋求解決方式，如紛爭無法解決，本公司得暫停向該會員提供一部分或全部之服務，並可要求該會員支付其會員等級之 1 年續會費作為懲罰性違約金，如於 90 日內無法解決者，本公司得終止本協議。'
      },
      {
        id: 12.4,
        detail:
          '如因會員所提供之內容造成本公司受有損害者，本公司得向該會員請求包括但不限於損害、律師費用、訴訟費用、行政罰鍰等支出。'
      }
    ]
  },
  {
    id: 13,
    title: '保密義務及所有權',
    content: [
      {
        id: 13.1,
        detail: '會員如因土星碳權憑證販售而知悉任何相關交易資料時，除法律或主管機關另有規定者外，應予以保密。'
      },
      {
        id: 13.2,
        detail:
          '會員所使用會員資格之相關業務資料服務及軟、硬體設備，其專利權、商標、營業秘密及其他任何智慧財產權、所有權及其他權利，皆以本公司為權利人，除依法律、法院或主管機關之要求者外，均應予以保密。未經本公司同意，會員不得擅自重製、傳輸、改作、編輯、登載或以其他任何目的加以使用，若對本公司或第三方造成之一切損害，該會員應負損害賠償之責任。'
      },
      {
        id: 13.3,
        detail:
          '會員如未經授權使用或揭露機密資訊即構成本協議之重大違約事由，本公司得依土星永續股份有限公司會員服務條款第 14 條規定終止該會員之資格。'
      }
    ]
  },
  {
    id: 14,
    title: '本協議之終止',
    content: [
      {
        id: '14.1',
        detail:
          '除另有約定者，會員違反本協議內容情節重大者，包含但不限於訂單給付期限內未完成給付金額，或有相當事證足認有涉及違法之行為，或所提交之身份認證資料為虛偽並查證屬實者，本公司得對其暫停一部或全部之服務，並得終止本協議。'
      },
      {
        id: '14.2',
        detail:
          '1前條所謂違反本協議之約定情節重大，係指違約方違反本協議之義務，經本公司合法通知 3 次，未於本公司通知指定期限完成修正者，或違約方仍有違約行為者。'
      },
      {
        id: '14.3',
        detail:
          '1會員資格如因第 14.1 條原因終止者，該會員應於終止後一個月內進行抵換之作業，或於上開期限內，本公司可將會員儲放於帳戶中製造年份五年內之土星碳權憑證以原始價格之 40% 買回，如本公司買回之價格低於買回時之市場價格，該價差視為懲罰性違約金，會員不得請求該差額。本公司將保留購回與否之決定權。'
      },
      {
        id: '14.4',
        detail:
          '如非因會員之違約而會員欲終止本協議時（提前終止或不欲續繳年費者），會員應依本平台公告之關於終止本協議及關閉／廢止帳戶之程序為之，如有土星碳權憑證仍存於會員帳戶，會員應於帳戶關閉作業期間於本平台中售出或於終止後一年內進行抵換之作業。'
      },
      {
        id: '14.5',
        detail:
          '如未能於帳戶關閉作業期間售出土星碳權憑證或於終止後一年內進行抵換者，本公司可於上開期限內，將會員儲放於帳戶中製造年份五年內之土星碳權憑證以原始價格之 60% 買回，或另以雙方同意之方式將土星碳權憑證予以抵換。本公司將保留購回與否之決定權。'
      },
      {
        id: '14.6',
        detail:
          '本公司得視情況調整附約內容，會員經通知後如不同意該等異動，該會員應以書面通知本公司之不同意意思表示，於本公司收到該不同意之意思表示時，即視為本協議終止，本公司將不予退還已收受之費用。'
      },
      {
        id: '14.7',
        detail:
          '除非雙方另有約定，本協議終止之效力，係指會員資格之終止，包括會員帳號之關閉／廢止，亦包含終止會員與本公司所簽署之土星永續股份有限公司會員服務條款、隱私權政策及 Cookie 政策，本公司即停止提供所有服務予會員，且不予退還本公司已收受之費用。'
      }
    ]
  },
  {
    id: 15,
    title: '通知',
    content: [
      {
        id: '15.1',
        detail:
          '除另有約定外，本公司依本協議對會員所為之任何通知，原則以中文作成，但在必要情形，通知得例外以英文作成，並應如以下之一方式為之：'
      },
      {
        id: '15.1.1',
        detail: '以書面為之；'
      },
      {
        id: '15.1.2',
        detail: '以電子郵件、網站明顯處、社群網站、本平台應用軟體、簡訊通知；及'
      },
      {
        id: '15.1.3',
        detail: '其他經會員同意之方式為之。'
      },
      {
        id: '15.2',
        detail: '以下情形視為會員收受本公司有效之通知：'
      },
      {
        id: '15.2.1',
        detail: '以信件投遞者，於信件投遞後二日或信件投遞至相關地址時；'
      },
      {
        id: '15.2.2',
        detail: '以電子郵件、網站明顯處、社群網站、本平台應用軟體推播、簡訊通知者，於通知後 24 小時起；及'
      },
      {
        id: '15.2.3',
        detail:
          '本公司如未獲會員提供住址或其他聯繫方式，本平台得於平台明顯處刊載通知訊息以通知會員，會員應定期瀏覽並了解任何通知內容。'
      },
      {
        id: '15.3',
        detail: '會員聯繫資料有變更者，應即時更新本平台聯繫資料，以便本公司知悉。'
      }
    ]
  },
  {
    id: 16,
    title: '智慧財產權',
    content: [
      {
        id: '16.1',
        detail:
          '本公司於本平台所使用之軟體或程式，以及本平台上所有內容，包含但不限於著作、程式碼、圖片、檔案、資訊、資料、營運模式、網站架構、使用者介面之安排與設計等，除本平台有特別規定外，均由本平台或其他權利人依法擁有其智慧財產權。'
      },
      {
        id: '16.2',
        detail: '前項智慧財產權包括但不限於商標權、專利權、著作權、營業秘密與專有技術等。'
      },
      {
        id: '16.3',
        detail:
          '任何人不得未經同意，擅自使用、修改、重製、公開播送、改作、散布、出租、發行、公開傳輸、公開發表、進行還原工程、解編或反向組譯及其他侵害智慧財產權之行為。會員如刊載依法應受智慧財產權保障之訊息，應保證對於該等訊息擁有智慧財產權或受智慧財產權人之授權。'
      },
      {
        id: '16.4',
        detail: '若有侵害智慧財產權之侵害情形，會員應負一切法律責任，如有致本公司損害者，應對本公司負損害賠償之責。'
      }
    ]
  },
  {
    id: 17,
    title: '本協議之調整與修正',
    content: [
      {
        id: '17.1',
        detail: '本公司得依政府政策、法令規定及營運情形調整本協議之內容。'
      },
      {
        id: '17.2',
        detail:
          '本公司於調整或修正本協議之內容後，該調整或修正之內容將於公告或電子郵件通知日後第 61 日生效，如會員仍繼續使用本服務者，視同同意調整或修正後之本協議內容。'
      }
    ]
  },
  {
    id: 18,
    title: '誠信原則',
    content: [
      {
        id: '18.1',
        detail:
          '會員及其所屬成員（包括但不限於董事、經理人、受僱人、受任人、或具有實質控制能力之人）絕不以任何直接、間接方式要求、期約、收受、給予本公司所屬成員或相關公司（包括但不限於雙方交易有關之第三人）任何有形或無形之不正當利益或不誠信行為（包括但不限於賄賂、收受佣金、抽成、回扣），反之亦然。'
      },
      {
        id: '18.2',
        detail:
          '會員知悉有本公司人員違反禁止收受佣金、回扣或其他不正當利益之契約條款時，應立即據時將此等人員之身分、提供、承諾、要求或收受之方式、金額或其他不正當利益告知本公司，並提供相關證據且配合本公司調查。會員如因此而受有損害時，得向本公司請求損害賠償，並得自應給付之價款中如數扣除，如係本公司所屬成員違反規定者，本公司應與之負連帶賠償責任。反之亦然。'
      },
      {
        id: '18.3',
        detail: '任一方及其所屬成員違反前二項規定者，他方有權隨時終止或解除本契約。'
      },
      {
        id: '18.4',
        detail: '第10.1條有關責任範圍限制之約定，於第18.2條亦適用之。'
      }
    ]
  },
  {
    id: 19,
    title: '附則',
    content: [
      {
        id: '19.1',
        detail:
          '若會員發現本平台上之專案內容圖片、資訊，有任何侵權情形，得通知本公司，本公司收到通知後將立即以合理努力為適當之處理，並不保證處理之結果。'
      },
      {
        id: '19.2',
        detail: '本協議任何一方對本協議任何條款之違約行為權利主張之棄權，不得被視為對其他或其後之任何違約行為之棄權。'
      },
      {
        id: '19.3',
        detail: '本協議條款內容是可分的，如本協議之任何條款違法或無效，不影響其他條款之有效性。'
      },
      {
        id: '19.4',
        detail:
          '本協議之解釋及履行，各方同意以中華民國法律為準據法。如因本協議條款產生任何爭議，除法律另有規定者外，各方同意以台灣台北地方法院為第一審管轄法院。'
      },
      {
        id: '19.5',
        detail: '本協議有未盡事宜者，依相關法令、習慣及誠信原則公平解決之。'
      }
    ]
  }
];
