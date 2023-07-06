export default function CustomTable({ theading, tableBody }) {
  return (
    <div className="flow-root">
      <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
          <table className="min-w-full custom-table">
            <thead>
              <tr>
                {theading.map((item, index) => (
                  <th
                    scope="col"
                    className={`pb-3 text-left text-base xl:text-lg font-normal text-grey ${
                      index === 0 ? "pl-[33px]" : "px-8"
                    }`}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableBody.map((item) => (
                <tr className="bg-white row" key={item.id}>
                  <td className="py-6 pl-[33px] text-dark-grey text-base xl:text-xl">
                    {item.time}
                  </td>
                  <td className="py-6 px-4 xl:px-8 text-dark-grey text-base xl:text-xl ">
                    {item.prodName}
                  </td>
                  <td className="py-6 px-4 xl:px-8  text-dark-grey text-base xl:text-xl">
                    {item.operator}
                  </td>
                  <td className="py-6 px-4 xl:px-8 text-dark-grey text-base xl:text-xl">
                    {item.unitPrice}
                  </td>
                  <td className="py-6 px-4 xl:px-8 text-dark-grey text-base xl:text-xl">
                    {item.quant}
                  </td>
                  <td className="py-6 px-4 xl:px-8 text-dark-grey text-base xl:text-xl">
                    {item.lumpsum}
                  </td>
                  <td className="py-6 px-4 xl:px-8 text-dark-grey text-base xl:text-xl">
                    {item.action}
                  </td>
                  <td className="py-6 px-4 xl:px-8  text-dark-grey text-base xl:text-xl">
                    {item.remark}
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
