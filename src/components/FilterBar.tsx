const FilterBar = () => {
  return (
    <div className="flex flex-row items-center justify-end mb-7">
      <div className="flex flex-row">
        <select
          name="location"
          className="bg-drop-down rounded-xl min-[1500px]:text-mdlg text-mdsm font-bold bg-trans-grey min-[1500px]:w-[220px] min-[1200px]:w-[170px] w-[150px] min-[1500px]:h-[41px] h-[36px] outline-none px-[1.5rem] appearance-none bg-no-repeat bg-[center_right_1.5rem] min-[1500px]:mx-4 mx-2"
        >
          <option className="bg-grey hover:bg-black cursor-pointer">Location</option>
          <option className="bg-grey">Location</option>
          <option className="bg-grey">Location</option>
        </select>
        <select
          name="vintages"
          className="bg-drop-down rounded-xl min-[1500px]:text-mdlg text-mdsm font-bold bg-trans-grey min-[1500px]:w-[220px] min-[1200px]:w-[170px] w-[150px] min-[1500px]:h-[41px] h-[36px] outline-none px-[1.5rem] appearance-none bg-no-repeat bg-[center_right_1.5rem] min-[1500px]:mx-4 mx-2"
        >
          <option>vintages</option>
          <option>vintages</option> <option>vintages</option>
          <option>vintages</option>
          <option>vintages</option>
        </select>
        <select
          name="prices"
          className="wishSelect bg-drop-down rounded-xl min-[1500px]:text-mdlg text-mdsm font-bold bg-trans-grey min-[1500px]:w-[220px] min-[1200px]:w-[170px] w-[150px] min-[1500px]:h-[41px] h-[36px] outline-none px-[1.5rem] appearance-none bg-no-repeat bg-[center_right_1.5rem] min-[1500px]:mx-4 mx-2"
        >
          <option>Prices</option>
        </select>
      </div>
      <label className="min-[1500px]:ml-22.5 min-[1200px]:ml-17 ml-11 min-[1500px]:text-base min-[1200px]:text-sm text-[12px]">
        Sort:&nbsp;
      </label>
      <span className="min-[1500px]:mr-8 mr-6">
        <select
          id="sort"
          className="bg-transparent min-[1500px]:text-base min-[1200px]:text-sm text-[12px] outline-none"
        >
          <option>High to Low</option>
        </select>
      </span>
    </div>
  );
};

export default FilterBar;
