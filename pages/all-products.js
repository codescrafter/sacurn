import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import mainPic from "@/public/images/products-page/group-693.png";
import ViewStyleBar from "@/components/ViewStyleBar";
import ProductsListView from "@/components/ProductsListView";
import ProductDeatilView from "@/components/ProductDetailView";

function AllProducts(props) {
    let [active, setActive] = useState('white');
    let [display,setDisplay]=useState('list-view')
    const setActiveDisplayHandler=(selected_color)=>{
        setActive(selected_color)
        if(selected_color=='white'){
            setDisplay('list-view')
        }
        else if(selected_color='green'){
            setDisplay('detail-view')
        }
        else{
            setDisplay('no-view')
        }
    }
  return (
    <div className="w-screen relative min-h-screen bg-no-repeat bg-cover bg-[url('/images/products-page/cover.png')] h-screen">
      <Navbar className={`pt-4 mb-9.5 relative z-30`} />
      <div className="h-full w-screen absolute flex flex-row justify-start top-0 left-0">
        <div>
          <Image className="h-full w-full" src={mainPic} />
        </div>
        <div className="flex flex-col mt-20 max-h-[973px] items-end  mr-9.5">
            <ViewStyleBar activeColor={active} setDisplay={setActiveDisplayHandler}/>
            {display=='list-view' && <div className="yellowScrollNoBg mr-1 pr-5.5 mt-10.7 mb-15.7 overflow-scroll overflow-x-hidden ">
            <ProductsListView/>
            </div>}
            {display=='detail-view' && <ProductDeatilView/>}
            
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
