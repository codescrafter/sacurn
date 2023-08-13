import { useForm } from "react-hook-form";
import CompanyDocumentUpload from "./CompanyDocumentUpload";

function CompanyInfoForm(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log("Here : " + watch("company_name"));
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="flex flex-col items-start">
        <div className="flex flex-row ml-[22%] mb-7">
          <h1 className="text-navy-blue text-2.5xl flex flex-row">
            <div className="bg-navy-blue px-0.5 h-full" />
            &nbsp;請填寫企業資料
          </h1>
        </div>

        <div className="flex flex-row gap-28 justify-center w-full">
          <div className="grid grid-cols-2 formGrid">
            {/* {labels.map((item, index) => {
            return (
              <>
                <label className="text-black text-right font-semibold col-span-1 mb-5.2">
                  {item} :
                </label>
                <input
                  className={`${Style} ml-4 mb-5.2 min-[1500px]:w-[368px] w-auto`}
                  {...register()}

                  type="text"
                />
              </>
            );
          })} */}

            <>
              <label className="text-black text-right font-semibold col-span-1 mb-5.2">
                企業名稱 :
              </label>
              <div className="ml-4 mb-5.2 min-[1500px]:w-[368px] w-auto">
                <input
                  className={`${Style} w-full`}
                  {...register("company_name", { required: true })}
                  type="text"
                />
                {errors.company_name && (
                  <p className="text-xs mt-1 ml-2 text-bright-red">
                    會員名稱即為提領的金融帳號戶名，請正確填寫
                  </p>
                )}
              </div>
            </>
            <>
              <label className="text-black text-right font-semibold col-span-1 mb-5.2">
                統一編號 :
              </label>
              <input
                className={`${Style} ml-4 mb-5.2 min-[1500px]:w-[368px] w-auto`}
                {...register("uniform_numbers")}
                type="text"
              />
            </>
            <>
              <label className="text-black text-right font-semibold col-span-1 mb-5.2">
                代表人中文姓名 :
              </label>
              <input
                className={`${Style} ml-4 mb-5.2 min-[1500px]:w-[368px] w-auto`}
                {...register("representative_chinese_name")}
                type="text"
              />
            </>
            <>
              <label className="text-black text-right font-semibold col-span-1 mb-5.2">
                實收資本額 :
              </label>
              <input
                className={`${Style} ml-4 mb-5.2 min-[1500px]:w-[368px] w-auto`}
                {...register("paid_in_capital")}
                type="text"
              />
            </>
            <>
              <label className="text-black text-right font-semibold col-span-1 mb-5.2">
                核准設立日期 :
              </label>
              <input
                className={`${Style} ml-4 mb-5.2 min-[1500px]:w-[368px] w-auto`}
                {...register("approved_establishment_date")}
                type="text"
              />
            </>
            <label className="text-black text-right font-semibold mb-5.2">
              會員聯絡地址 :
            </label>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <select className={`${Style} w-23.2`}>
                  <option className="text-black">縣市</option>
                  <option className="text-black">縣市</option>
                  <option className="text-black">縣市</option>
                </select>
                <select className={`${Style} w-23.2`}>
                  <option className="text-black">鄉鎮市區</option>
                  <option className="text-black">鄉鎮市區</option>
                  <option className="text-black">鄉鎮市區</option>
                </select>
                <input type="text" className={`${Style}`} />
              </div>
            </div>
          </div>

          <CompanyDocumentUpload />
        </div>
      </div>
      <button className="text-black" type="submit">
        Submit
      </button>
    </form>
  );
}

export default CompanyInfoForm;

const Style =
  "rounded-full text-black shadow-company-registration-input bg-white min-[1550px]:h-9.5 min-[1200px]:h-7.5 h-6 px-2 py-2.5 text-black min-[1550px]:text-mdsm min-[1200px]:text-xms text-xxs outline-none";

const ids = [
  "company_name",
  "uniform_numbers",
  "representative_chinese_name",
  "paid_in_capital",
  "approved_establishment_date",
];

const labels = [
  "企業名稱",
  "統一編號",
  "代表人中文姓名",
  "實收資本額",
  "核准設立日期",
];
