import classNames from 'classnames';

interface IProps {
  activeColor: string;
  setDisplay: (color: string) => void;
}

const ViewStyleBar = ({ activeColor, setDisplay }: IProps) => {
  const tabSelectHandler = (
    style: {
      color: string;
      text: string;
    },

    index: number
  ) => {
    setDisplay(style['color']);
    window.history.pushState(null, '', `?tabIndex=${index}`);
  };
  return (
    <div className="flex justify-end flex-row h-auto w-[98%] 2xl:mt-11 mt-9">
      {styles.map((style, index) => {
        return (
          <div
            className={classNames('rounded-3xl text-center visible my-auto mr-5.7 h-[60%] hover:cursor-pointer', {
              [`bg-${style['color']}`]: true,
              'w-51 py-2.2 h-[99%]': activeColor === style['color'],
              'w-22.5': activeColor !== style['color']
            })}
            onClick={() => tabSelectHandler(style, index)}
          >
            <p
              className={classNames('text-xs', {
                'text-black': activeColor === 'white',
                'text-white': activeColor !== 'white',
                visible: activeColor === style['color'],
                invisible: activeColor !== style['color']
              })}
            >
              {style['text']}
            </p>
          </div>
        );
      })}
      {/* <div className="rounded-full  bg-light-grey ml-2.5 mr-5.7 py-1.9 px-2">
        <img className="xl:w-auto xl:h-auto w-5 h-5" src={'/images/products-page/filter.svg'} alt="sacurn" />
      </div>
      <div className="rounded-3xl flex flex-row bg-light-grey w-auto pl-1.5 my-auto px-auto h-[85%]">
        <input
          type="text"
          className="bg-transparent rounded-3xl pl-3 w-[75%] outline-none text-black"
          placeholder="輸入想要搜尋的碳權名稱,代號或是關鍵字"
        />
        <div className="my-auto ml-6 mr-3.7 h-[70%] w-[1px] bg-dark-grey" />
        <img
          className="h-auto hover:cursor-pointer -translate-x-2"
          src={'/images/products-page/search.svg'}
          alt="sacurn"
        />
      </div> */}
    </div>
  );
};

export default ViewStyleBar;

const styles = [
  { color: 'dark-green', text: '綠碳．森林碳匯' },
  { color: 'navy-blue', text: ' ' },
  { color: 'pale-yellow', text: ' ' }
];
