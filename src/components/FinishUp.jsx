import { useContext } from "react";
import { selectYourPlanDb, pickAddOnsDb } from "../config/config";
import { FormContext } from "../providers/form.providers";
const FinishUp = () => {
  const { payment, pickAddOns, selectPlan } = useContext(FormContext);
  console.log(selectYourPlanDb);
  return (
    <>
      {selectPlan
        .filter((plan) => plan.active)
        .map((element, index) => (
          <div key={index}>
            {element.plan} ({payment.period === "mo" ? "Monthly" : "Yearly"})
          </div>
        ))}
      {pickAddOns
        .filter((addOns) => addOns.checked)
        .map((element, index) => (
          <div key={index}>{element.addOns}</div>
        ))}
    </>
  );
};

export default FinishUp;
