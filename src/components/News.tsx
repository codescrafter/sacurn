import { FC } from "react";
import { NewsTypes } from "../type";

interface IProps {
  data: NewsTypes[];
}

const News: FC<IProps> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <ul>
        {data?.map((news: NewsTypes) => {
          return (
            <li key={news.id} className="border-solid border-b border-navy-blue last:border-none">
              <div className="flex flex-row justify-between px-2.2 mb-7.7 mt-8.2 ">
                <p className="text-lg text-navy-blue pr-6.2 font-bold">{news.id}.</p>
                <div className="flex flex-col">
                  <p className="text-lg mb-3.1 font-bold text-navy-blue">{news.heading}</p>
                  <p className="text-base text-dark-grey leading-7 ">{news.description}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default News;
