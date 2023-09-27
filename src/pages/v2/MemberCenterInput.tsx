const MemberCenterInput = () => {
  return (
    <div className=" flex flex-col gap-4 pt-13 pb-10">
      <div className="flex  justify-between items-center gap-2 ">
        <label htmlFor="" className="text-xl font-bold text-deepseablue">
          姓名
        </label>
        <input type="text" name="" id="" className="rounded-full h-10 w-60 bg-white outline-none px-4" />
      </div>
      <div className="flex justify-between items-center gap-2">
        <label htmlFor="" className="text-xl font-bold text-deepseablue ">
          職稱
        </label>
        <input type="text" name="" id="" className="rounded-full h-10 w-60 outline-none px-4" />
      </div>
      <div className="flex justify-between items-center gap-2">
        <label htmlFor="" className="text-xl font-bold text-deepseablue">
          Email
        </label>
        <input type="text" name="" id="" className="rounded-full h-10 w-60 outline-none px-4" />
      </div>
      <div>
        <div className="flex justify-between items-center gap-2">
          <label htmlFor="" className="text-xl font-bold text-deepseablue">
            電話
          </label>
          <input type="text" name="" id="" className="rounded-full h-10 w-60 outline-none px-4 " />
        </div>
        <p className="text-xs text-sunset-orange ml-19 mt-1">例: 0x-000111或09xx-000111</p>
      </div>
      <div className="flex items-center gap-6 -mt-3">
        <label htmlFor="" className="text-xl font-bold text-deepseablue">
          分機
        </label>
        <input type="text" name="" id="" className="rounded-full h-10 w-31 outline-none px-4 " />
      </div>
    </div>
  );
};

export default MemberCenterInput;
