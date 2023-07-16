import Image from "next/image";
import RoundedButton from "./RoundedButton";

function MembershipCard(props) {
  return (
    <div className="flex flex-col mt-10.3 2xl:ml-12.5 pr-9.3 w-auto">
      <div className="relative flex flex-col bg-milky flex-wrap rounded-mdlg 2xl:text-xl 2xl:font-semibold 2xl:w-full text-navy-blue gap-y-6.2 2xl:h-[35vh] min-[1650px]:pl-26.2 2xl:pl-22.5  2xl:pt-12.5">
        <h1 className="text-navy-blue">
          公司名稱：{companyRecord.companyName}
        </h1>
        <h1 className="text-navy-blue">
          代表人：{companyRecord.representative}
        </h1>
        <h1 className="text-navy-blue">VAT號碼：{companyRecord.vatNumber}</h1>
        <h1 className="text-navy-blue">
          公司電話：{companyRecord.companyPhone}
        </h1>
        <h1 className="text-navy-blue">公司地址：{companyRecord.address}</h1>
        <h1 className="text-navy-blue">
          帳戶聯絡人：{companyRecord.accountContact}
        </h1>
        <h1 className="text-navy-blue">
          聯絡人職稱：{companyRecord.contactPersonTitle}
        </h1>
        <h1 className="text-navy-blue">
          聯絡電話：{companyRecord.contactNumber}
        </h1>
        <h1 className="text-navy-blue">Email：{companyRecord.email}</h1>
      </div>

      <div className="bg-membership-card bg-110% bg-center  bg-no-repeat flex flex-col rounded-mdlg 2xl:mt-10.3">
        <Image
          className="2xl:mt-4.2 2xl:ml-4.5"
          src={require("@/public/images/membership-center/sacurn.png")}
        />
        <div className="flex flex-col flex-wrap min-[1650px]:gap-y-6 2xl:gap-y-5 text-xl w-auto font-semibold 2xl:h-[18vh] min-[1650px]:ml-26.2 2xl:ml-22.5 2xl:mt-4.5 text-left">
          <h1 className="text-navy-blue">
            會員卡卡號：{membershipCardData.cardNumber}
          </h1>
          <h1 className="text-navy-blue">
            發行者名稱：{membershipCardData.publisherName}
          </h1>
          <h1 className="text-navy-blue">
            卡片持有者名稱：{membershipCardData.cardHolderName}
          </h1>
          <h1 className="text-navy-blue">
            會員卡核發時間：{membershipCardData.cardIssuanceTime}
          </h1>
          <h1 className="text-navy-blue ">
            公司地址：{membershipCardData.cardLevel}
          </h1>
          <h1 className="text-navy-blue">
            會員卡等級：{membershipCardData.cardExpirationDate}
          </h1>
        </div>
      </div>
      <div className="flex flex-row justify-between 2xl:mt-15">
        {bottomNav.map((item) => {
          return (
            <RoundedButton className={`2xl:w-[15%] 2xl:py-2.5 bg-white`} childClassName={`text-dark-grey text-lg`}>{item}</RoundedButton>
          );
        })}
      </div>
    </div>
  );
}

export default MembershipCard;

const companyRecord = {
  companyName: "艾克斯厚定股份有限公司",
  representative: "Musk",
  vatNumber: "88888888",
  companyPhone: "02-1234 5678",
  address: "台北市中山區中山北路一段1號",
  accountContact: "Albert",
  contactPersonTitle: "CFO",
  contactNumber: "02-1234 5678",
  email: "musk@xholding.com",
};

const membershipCardData = {
  cardNumber: "0000 0000 0000",
  publisherName: "薩克朗土星碳權股份有限公司",
  cardHolderName: "艾克斯厚定股份有限公司",
  cardIssuanceTime: "2023/05/29",
  cardLevel: "VVIP 等級",
  cardExpirationDate: "2023/12/31",
};

const bottomNav = [
  "資料修改",
  "密碼修改",
  "會員升級",
  "會員續卡",
  "會員卡補發",
  "會員卡廢止",
];
