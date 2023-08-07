function News(props) {
  return (
    <div className="flex flex-col">
      <ul className="">
        {latest_news.map((news, index) => {
          return (
            <li key={index}>
              <div className="flex flex-row justify-between px-2.2 mb-7.7 mt-8.2">
                <p className="text-lg text-navy-blue pr-6.2 font-bold">{index+1}.</p>
                <div className="flex flex-col">
                  <p className="text-lg mb-3.1 font-bold text-navy-blue">
                    {news.heading}
                  </p>
                  <p className="text-base text-dark-grey leading-7 ">{news.description}</p>
                </div>
              </div>
              {latest_news.length-index!=1 && <hr className=" border-navy-blue border-solid"/>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default News;

const latest_news = [
  {
    heading: "證交所董事會通過設碳權交易所示警買碳權相關股注意風險",
    description:
      "【時報-台北電】台股今天受到美股6月升息機率升高，加權指數拉回小跌43點，但盤面個股活蹦亂跳，仍有研揚（6579）、華城（1519）及三陽工業（2206）等29檔股價創歷史新高，另有緯創（3231）等5檔刷歷史新天量。股價攻頂創高有研揚、華城、三陽工業、致茂、研華、揚博、亞航、夏都、山富、弘塑、閎康、定穎投控、萬在、乙盛-KY、宜鼎、高技、德昌、台南-KY、擎邦、華孚、沛亨、旭隼、南俊國際、博晟生醫、台微醫、聯寶、汎銓、宇瞻、青鋼等29檔。另今天爆天量股有緯創、牧東、愛普*、研揚、勤誠等5檔。（新聞來源：工商即時 呂淑美）",
  },
  {
    heading: "證交所董事會通過設碳權交易所 示警買碳權相關股注意風險",
    description:
      "證交所董事會今通過成立碳權交易所，但對於近期碳權概念股飆漲，證交所董事特別示警，呼籲投資人購買碳權相關股票宜注意投資風險，並不是種樹、買地、用綠電就可以獲得碳權！證交所董事會強調，森林、土壤不會自動產...",
  },
  {
    heading: "證交所董事會通過設碳權交易所 示警買碳權相關股注意風險",
    description:
      "證交所董事會今通過成立碳權交易所，但對於近期碳權概念股飆漲，證交所董事特別示警，呼籲投資人購買碳權相關股票宜注意投資風險，並不是種樹、買地、用綠電就可以獲得碳權！證交所董事會強調，森林、土壤不會自動產...",
  },
  {
    heading: "證交所董事會通過設碳權交易所 示警買碳權相關股注意風險",
    description:
      "證交所董事會今通過成立碳權交易所，但對於近期碳權概念股飆漲，證交所董事特別示警，呼籲投資人購買碳權相關股票宜注意投資風險，並不是種樹、買地、用綠電就可以獲得碳權！證交所董事會強調，森林、土壤不會自動產...",
  },
];
