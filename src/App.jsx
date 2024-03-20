import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import PickAddOns from "./components/PickAddOns";
import SelectYourPlan from "./components/SelectYourPlan/SelectYourPlan";
import FinishUp from "./components/FinishUp";
import { FormContext } from "./providers/form.providers";
import { personalInfoDb, selectYourPlanDb, pickAddOnsDb, infoStep } from "./config/config";
import Steps from "./components/Steps";
import ThankYou from "./components/ThankYou";

function App() {
  const [payment, setPayment] = useState({ period: "mo", numberMonth: 1 });
  const [step, setStep] = useState(0);
  const [personalInfo, setPersonalInfo] = useState(personalInfoDb);
  const [selectPlan, setSelectPlan] = useState(selectYourPlanDb);
  const [pickAddOns, setPickAddOns] = useState(pickAddOnsDb);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const components = [
    { componentName: <PersonalInfo /> },
    { componentName: <SelectYourPlan /> },
    { componentName: <PickAddOns /> },
    { componentName: <FinishUp /> },
  ];
  return (
    <FormContext.Provider
      value={{ payment, setPayment, selectPlan, setSelectPlan, pickAddOns, setPickAddOns, step }}
    >
      <div className="flex flex-col justify-center items-center max-w-[375px] p-4 bg-top bg-no-repeat bg-[#F8F9FF] bg-[url('../src/assets/bg-sidebar-mobile.svg')]">
        {!isConfirmed ? (
          <>
            <Steps />
            <div className="flex flex-col gap-3 max-w-[343px] min-h-min p-6 rounded-[10px] bg-white">
              <h1 className="font-bold text-2xl">{infoStep[step].nameStep}</h1>
              <p className="font-regular text-base text-[#9699AA]">
                {infoStep[step].descriptionStep}
              </p>
              {components[step].componentName}
            </div>
          </>
        ) : (
          <ThankYou />
        )}
      </div>
      {!isConfirmed ? (
        <div className="flex justify-between items-center max-w-[375px] h-[75px] p-4">
          <span className="text-sm text-[#9699AA] cursor-pointer" onClick={() => setStep(step - 1)}>
            {step !== 0 ? "Go Back" : ""}
          </span>
          {step === 3 ? (
            <button
              className="border-solid border-0 rounded bg-[#483EFF] text-sm cursor-pointer text-white w-[97px] h-10"
              onClick={() => setIsConfirmed(true)}
            >
              Confirm
            </button>
          ) : (
            <button
              className="border-solid border-0 rounded bg-[#022959] text-sm cursor-pointer text-white w-[97px] h-10"
              onClick={() => setStep(step + 1)}
            >
              Next Step
            </button>
          )}
        </div>
      ) : null}
    </FormContext.Provider>
  );
}

export default App;
