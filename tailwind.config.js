/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        // '1.5lg': '1200px',
        // '2.3xl': '1600px',
        '2.5xl': '1780px',
        '3xl': '1920px'
      },
      // light mode
      tremor: {
        brand: {
          faint: '#eff6ff', // blue-50
          muted: '#bfdbfe', // blue-200
          subtle: '#60a5fa', // blue-400
          DEFAULT: '#3b82f6', // blue-500
          emphasis: '#1d4ed8', // blue-700
          inverted: '#ffffff' // white
        },
        background: {
          muted: '#f9fafb', // gray-50
          subtle: '#f3f4f6', // gray-100
          DEFAULT: '#ffffff', // white
          emphasis: '#374151' // gray-700
        },
        border: {
          DEFAULT: '#e5e7eb' // gray-200
        },
        ring: {
          DEFAULT: '#e5e7eb' // gray-200
        },
        content: {
          subtle: '#9ca3af', // gray-400
          DEFAULT: '#6b7280', // gray-500
          emphasis: '#374151', // gray-700
          strong: '#111827', // gray-900
          inverted: '#ffffff' // white
        }
      },
      // dark mode
      'dark-tremor': {
        brand: {
          faint: '#0B1229', // custom
          muted: '#172554', // blue-950
          subtle: '#1e40af', // blue-800
          DEFAULT: '#3b82f6', // blue-500
          emphasis: '#60a5fa', // blue-400
          inverted: '#030712' // gray-950
        },
        background: {
          muted: '#131A2B', // custom
          subtle: '#1f2937', // gray-800
          DEFAULT: '#111827', // gray-900
          emphasis: '#d1d5db' // gray-300
        },
        border: {
          DEFAULT: '#1f2937' // gray-800
        },
        ring: {
          DEFAULT: '#1f2937' // gray-800
        },
        content: {
          subtle: '#4b5563', // gray-600
          DEFAULT: '#6b7280', // gray-600
          emphasis: '#e5e7eb', // gray-200
          strong: '#f9fafb', // gray-50
          inverted: '#000000' // black
        }
      },
      borderRadius: {
        mdlg: '8px',
        '2.5xl': '20px'
      },
      fontSize: {
        xxs: ['8px', '12px'],
        xms: ['10px', '14px'],
        mdbase: ['15px', '23px'],
        mdlg: ['17px', '26px'],
        '1.5xl': ['22px', '30px'],
        '2.5xl': ['27px', '34px'],
        '3.5xl': ['33px', '38px'],
        '4.5xl': ['44px', '44px'],
        '5.2xl': ['50px', '50px']
      },
      boxShadow: {
        'login-box':
          '0px 4px 34px rgba(47, 134, 172, 0.25), -3.42614px -10.2784px 27.4091px rgba(46, 131, 222, 0.3), -2.28409px -2.28409px 4.56818px rgba(68, 81, 85, 0.35), 0px 0px 11.4205px rgba(0, 0, 0, 0.15), 4.56818px 4.56818px 35.4034px rgba(38, 47, 61, 0.35), inset -6.85227px -9.13636px 0px rgba(255, 255, 255, 0.2)',
        'input-box':
          '-3.42614px -3.42614px 63.9545px #FFFFFF, inset 1.73724px 1.73724px 5.21171px rgba(0, 0, 0, 0.19), inset 6.07568px 6.08033px 11.292px rgba(0, 0, 0, 0.13), inset -3.47447px -5.21171px 1.73724px rgba(255, 255, 255, 0.75), inset -5.21171px -7.81756px 4.34309px rgba(255, 255, 255, 0.93)',
        btn: '-3.47447px -1.73724px 3.47447px rgba(183, 215, 235, 0.6), 1.14205px 1.18773px 8.04px rgba(31, 54, 68, 0.9)',
        'cart-item': '0px 0.696072518825531px 9.745015144348145px 0px rgba(0, 0, 0, 0.15)',
        'sales-box': '0px 0px 3px 0px rgba(0, 0, 0, 0.20)',
        'stoptrading-btn': '0px 1px 3px 0px rgba(0, 0, 0, 0.30)',
        'graph-card': '1px 1px 26px 0px rgba(0, 0, 0, 0.23)',
        'graph-btn': '0px 1.5px 7.5px 0px rgba(0, 0, 0, 0.19)',
        'progress-bar': '0px 3px 2px 0px rgba(0, 0, 0, 0.15)',
        'company-registration-input':
          '0px 21.893245697021484px 63.4149169921875px 0px #F0F0F0, 0px 6.039515972137451px 23.40312385559082px 0px rgba(0, 0, 0, 0.05)',
        'operator-signup-input': '0px 8px 31px 0px rgba(0, 0, 0, 0.08)',
        'operator-signup-button':
          '1.1420453786849976px 1.1877270936965942px 8.039999008178711px 0px rgba(31, 54, 68, 0.90), -3.4744720458984375px -1.7372360229492188px 3.4744720458984375px 0px rgba(183, 215, 235, 0.60)',
        'download-btn': '0px 1.809303879737854px 4.809999942779541px 0px rgba(0, 0, 0, 0.25)',
        'completed-box': '0px 1px 41px 0px rgba(0, 0, 0, 0.10)',
        //v2-shadows
        'membership-nav-out': '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
        'membership-nav-in': '0px 3px 4px 0px rgba(0, 0, 0, 0.40) inset',
        'membership-nav-underline': '0px 3px 4px 0px rgba(0, 0, 0, 0.55)',
        'input-field': '0px 21.89325px 63.41492px 0px #F0F0F0, 0px 6.03952px 23.40312px 0px rgba(0, 0, 0, 0.05)',
        'account-info-box': '0px 0px 44px 0px rgba(0, 0, 0, 0.2)'
      },
      backgroundImage: {
        'login-white': 'linear-gradient(158.08deg, #F1F3F3 8.75%, rgba(241, 243, 243, 0.94) 91.6%)',
        'blue-btn': 'linear-gradient(136.26deg, #32769F 9.08%, #015588 115.58%)',
        'info-box':
          'linear-gradient(90deg, rgba(0, 84, 135, 0) 0%, rgba(0, 84, 135, 0.5418) 27.15%, rgba(0, 84, 135, 0.63) 52.73%, rgba(0, 84, 135, 0.5418) 76.22%, rgba(0, 84, 135, 0) 100.23%)',
        'news-box': 'linear-gradient(90deg,#FFFFFF87,#E7E7E7,#FFFFFF87)',
        'bottom-note': 'linear-gradient(270deg,#005487 0%,transparent 100%)',
        slider:
          'linear-gradient(90deg, rgba(217, 217, 217, 0.1) 0%, rgba(217, 217, 217, 0.5) 48.44%, rgba(217, 217, 217, 0.1) 100%)',
        'multi-slide': 'linear-gradient(89.71deg, #D9D9D9 69.19%, rgba(217, 217, 217, 0) 99.76%)',
        'operator-signup': 'linear-gradient(179deg, #32769F 0%, #015588 100%)',
        'drop-down': "url('/public/images/wishlist/dropDown.png')",
        'file-select-bg': 'linear-gradient(180deg, transparent 60%, #1e191999 60%, #1e191999 80%)'
      },
      blur: {
        xxs: '0.5px'
      },
      spacing: {
        0.3: '1px',
        0.5: '2px',
        0.7: '3px',
        1.2: '5px',
        1.5: '6px',
        1.9: '7px',
        2.2: '9px',
        2.5: '10px',
        2.7: '11px',
        3.1: '12.5px',
        3.2: '13px',
        3.5: '14px',
        3.7: '15px',
        4.2: '17px',
        4.5: '18px',
        4.7: '19px',
        5.2: '21px',
        5.5: '22px',
        5.7: '23px',
        6.2: '25px',
        6.5: '26px',
        6.7: '27px',
        7.2: '29px',
        7.5: '30px',
        7.7: '31px',
        8.2: '33px',
        8.5: '34px',
        8.7: '35px',
        9.5: '38px',
        10.5: '42px',
        10.7: '43px',
        11.5: '46px',
        12.7: '51px',
        13: '52px',
        13.2: '53px',
        13.7: '55px',
        15: '60px',
        15.7: '63px',
        16.7: '67px',
        17: '68px',
        17.5: '70px',
        17.7: '71px',
        18: '72px',
        18.7: '75px',
        19: '76px',
        19.7: '79px',
        21: '84px',
        21.7: '87px',
        22.5: '90px',
        23.2: '93px',
        26.7: '107px',
        29: '116px',
        31: '124px',
        33: '132px',
        37: '148px',
        45: '180px',
        47.2: '189px',
        51: '204px',
        53: '212px',
        53.5: '214px',
        59.2: '237px',
        64: '256px',
        74.7: '299px',
        100: '400px'
      }
    },
    colors: {
      'navy-blue': '#005487',
      'dark-green': '#2C8125',
      'snowflake-grey': '#F3F3F3',
      transparent: 'transparent',
      white: '#FFFFFF',
      'slate-blue-grey': '#A2A3A9',
      'medium-grey': '#8A8A8A',
      black: '#000000',
      'pale-yellow': '#FFD600',
      grey: '#888888',
      'dark-grey': '#525252',
      'light-grey': '#D9D9D9',
      'soft-red': '#C24242',
      'bright-blue': '#0091E9',
      'slight-blue': '#EBF0FB',
      'bright-red': '#FD1515',
      silverstone: '#B3B4B4',
      'neutral-150': '#F6f6F6',
      'neutral-250': '#F9FBFC',
      'light-green': '#68A362',
      'light-red': '#F27979',
      'light-blue': '#1D70BD',
      'light-purple': '#C4B0FD',
      'light-gray': '#F1F4F5',
      yellow: '#FAC91C',
      blue: '#1076B4',
      'card-bg': '#ffffffcc',
      'silk-blue': '#5195B2',
      'transparent-grey': '#c6c6c640',
      'light-trans-grey': 'rgba(179, 180, 180, 0.30)',
      milky: 'rgba(255, 255, 255, 0.80)',
      smoke: '#F6F6F6',
      'transparent-black': '#1b1b1b4d',
      'card-bg-light': '#c6c6c626',
      cyan: '#7EF1F1',
      'text-light': '#DCDCDC',
      'trans-grey': 'rgba(255, 255, 255, 0.30)',
      // v2 colors
      ceramic: '#F9F9F9',
      'light-white': '#ffffff4c',
      'trans-white': '#ffffffe6',
      'ceramic-bg': '#E0E0E0',
      'hit-grey': '#A8A8A8',
      'transparent-blue': '#005487e6',
      aluminium: '#ABABAB',
      'soft-green': '#60C757'
    }
  },
  plugins: []
};
