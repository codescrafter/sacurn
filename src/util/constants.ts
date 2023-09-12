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
