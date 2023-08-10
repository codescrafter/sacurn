import { useReducer, useState } from "react";
import CompanyDocumentUpload from "./CompanyDocumentUpload";

const enteredDataHandler = (state, action) => {
  let newState;
  console.log(JSON.stringify(action.payload));
  switch (action.type) {
    case "company_name":
      newState = { ...state, company_name: action.payload };
      break;
    case "uniform_numbers":
      newState = { ...state, uniform_numbers: action.payload };
      break;
    case "representative_chinese_name":
      newState = {
        ...state,
        representative_chinese_name: action.payload,
      };
      break;
    case " paid_in_capital":
      newState = { ...state, paid_in_capital: action.payload };
      break;
    case "approved_establishment_date":
      newState = {
        ...state,
        approved_establishment_date: action.payload,
      };
      break;
    case "company_registration_address":
      newState = {
        ...state,
        company_registration_address: action.payload,
      };
      break;
    case "member_phone":
      newState = { ...state, member_phone: action.payload };
      break;
    default:
      break;
  }
  return newState;
};

function CompanyInfoForm(props) {
  const [error, setError] = useState({
    company_name: false,
    member_phone: false,
    member_contact_address: false,
  });

  const [data, dispatch] = useReducer(enteredDataHandler, {
    company_name: "",
    uniform_numbers: 0,
    representative_chinese_name: "",
    paid_in_capital: 0,
    approved_establishment_date: "",
    company_registration_address: "",
    member_phone: "",
  });

  const valueData = [
    data.company_name,
    data.uniform_numbers,
    data.representative_chinese_name,
    data.paid_in_capital,
    data.approved_establishment_date,
    data.company_registration_address,
    data.member_phone,
  ];

  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-row ml-[22%] mb-7">
        <h1 className="text-navy-blue text-2.5xl flex flex-row">
          <div className="bg-navy-blue px-0.5 h-full" />
          &nbsp;請填寫企業資料
        </h1>
      </div>
      <div className="flex flex-row gap-28 justify-center w-full">
        <div className="grid grid-cols-2 formGrid items-center">
          {labels.map((item, index) => {
            return (
              <>
                <label className="text-black text-right font-semibold col-span-1 mb-5.2">
                  {item} :
                </label>
                {console.log("this is for test : " + data.company_name)}
                <input
                  className={`${Style} ml-4 mb-5.2 min-[1500px]:w-[368px] w-auto`}
                  value={valueData[index]}
                  onChange={(event) => {
                    return dispatch({
                      type: ids[index],
                      payload: event.target.value,
                    });
                  }}
                  type="text"
                />
              </>
            );
          })}
          <label className="text-black text-right font-semibold mb-5.2">
            會員聯絡地址 :{" "}
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
  "company_registration_address",
  "member_phone",
];

const labels = [
  "企業名稱",
  "統一編號",
  "代表人中文姓名",
  "實收資本額",
  "核准設立日期",
  "公司登記地址",
  "會員電話",
];
