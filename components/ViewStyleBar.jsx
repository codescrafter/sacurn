import { useState } from "react";
import Image from "next/image";
import filter from '@/public/images/products-page/filter.svg'

function ViewStyleBar(props) {
  let [active, setActive] = useState("white");
  return (
    <div className="flex flex-row h-auto">
      {styles.map((style) => {
        return (
          <div
            className={`bg-${
              style["color"]
            } rounded-3xl text-center visible my-auto mr-5.7 h-[60%] hover:cursor-pointer ${
              active === style["color"] ? `w-51 py-2.2 h-[100%]` : `w-22.5`
            }`}
            onClick={() => {
              setActive(style["color"]);
            }}
          >
            <p className={`${active==='white' ? 'text-black':'text-white'} text-xs ${active === style["color"] ? 'visible':'invisible'}`}>{style["text"]}</p>
          </div>
        );
      })}
      {/* <div className="rounded-full  bg-light-grey"><Image className="h-[70%]" src={filter}/></div> */}
    </div>
  );
}

export default ViewStyleBar;

const styles = [
  { color: "white", text: "碳權總覽" },
  { color: "dark-green", text: "綠碳．森林碳匯" },
  { color: "navy-blue", text: " " },
  { color: "pale-yellow", text: " " },
];
