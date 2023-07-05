export default function RecordTable() {
  return (
    <div className="flow-root">
      <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
          <table className="min-w-full">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="pl-[33px] pb-3 text-left text-base xl:text-lg font-normal text-grey"
                >
                  操作時間
                </th>
                <th
                  scope="col"
                  className="px-8 pb-3 text-left text-base xl:text-lg font-normal text-grey"
                >
                  商品名稱
                </th>
                <th
                  scope="col"
                  className="px-8 pb-3 text-left text-base xl:text-lg font-normal text-grey"
                >
                  操作者
                </th>
                <th
                  scope="col"
                  className="px-8 pb-3 text-left text-base xl:text-lg font-normal text-grey"
                >
                  單價
                </th>
                <th
                  scope="col"
                  className="px-8 pb-3 text-left text-base xl:text-lg font-normal text-grey"
                >
                  數量(噸)
                </th>
                <th
                  scope="col"
                  className="px-8 pb-3 text-left text-base xl:text-lg font-normal text-grey"
                >
                  總金額
                </th>
                <th
                  scope="col"
                  className="px-8 pb-3 text-left text-base xl:text-lg font-normal text-grey"
                >
                  動作
                </th>
                <th
                  scope="col"
                  className="px-8 pb-3 text-left text-base xl:text-lg font-normal text-grey"
                >
                  備註
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((e) => (
                <tr className="bg-white row" key={e.id}>
                  <td className="py-6 pl-[33px] text-dark-grey text-base xl:text-xl">
                    2023/05/18
                  </td>
                  <td className="py-6 px-4 xl:px-8 text-dark-grey text-base xl:text-xl ">
                    Kasigau Corridor II REDD+ Forest Conservation Carbon
                    avoidance
                  </td>
                  <td className="py-6 px-4 xl:px-8  text-dark-grey text-base xl:text-xl">
                    Chen Rio
                  </td>
                  <td className="py-6 px-4 xl:px-8 text-dark-grey text-base xl:text-xl">
                    $120
                  </td>
                  <td className="py-6 px-4 xl:px-8 text-dark-grey text-base xl:text-xl">
                    $100
                  </td>
                  <td className="py-6 px-4 xl:px-8 text-dark-grey text-base xl:text-xl">
                    +100
                  </td>
                  <td className="py-6 px-4 xl:px-8 text-dark-grey text-base xl:text-xl">
                    $12,000
                  </td>
                  <td className="py-6 px-4 xl:px-8  text-dark-grey text-base xl:text-xl">
                    完成付款
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
const tableData = [
  {
    id: 1,
    time: "2023/05/18",
    prodName: "Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance",
    operator: "Chen Rio",
    unitPrice: "$120",
    quant: "$100",
    lumpsum: "+100",
    action: "$12,000",
    remark: "完成付款",
  },
  {
    id: 2,
    time: "2023/05/18",
    prodName: "Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance",
    operator: "Chen Rio",
    unitPrice: "$120",
    quant: "$100",
    lumpsum: "+100",
    action: "$12,000",
    remark: "完成付款",
  },
  {
    id: 3,
    time: "2023/05/18",
    prodName: "Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance",
    operator: "Chen Rio",
    unitPrice: "$120",
    quant: "$100",
    lumpsum: "+100",
    action: "$12,000",
    remark: "完成付款",
  },
  {
    id: 4,
    time: "2023/05/18",
    prodName: "Kasigau Corridor II REDD+ Forest Conservation Carbon avoidance",
    operator: "Chen Rio",
    unitPrice: "$120",
    quant: "$100",
    lumpsum: "+100",
    action: "$12,000",
    remark: "完成付款",
  },
];
