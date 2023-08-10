import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import CompanyInfoForm from "../components/CompanyInfoForm";

function CompanyRegistration() {
  const [stepNumber, setStepNumber] = useState(1);
  const stepNumberHandler = () => {
    setStepNumber((prevstepNumber) => prevstepNumber + 1);
  };

  return (
    <>
      <ProgressBar steps={5} stepNumber={stepNumber} stepName={"填寫寫金融機構帳戶資料"}/>
      {stepNumber==1 && <CompanyInfoForm/>}

    </>
  );
}

export default CompanyRegistration;

