import { useContext } from "react";
import { selectYourPlanDb } from "../../config/config";
import { FormContext } from "../../providers/form.providers";
import "../SelectYourPlan/selectYourPlan.css";

const SelectYourPlan = () => {
  const { payment, setPayment, setSelectPlan } = useContext(FormContext);

  function changePayment() {
    setPayment(
      payment.period === "mo" ? { period: "yr", numberMonth: 10 } : { period: "mo", numberMonth: 1 }
    );
  }

  function handleClick(plan) {
    setSelectPlan(
      selectYourPlanDb.map((planDb) =>
        plan === planDb.plan ? (planDb.active = true) : (planDb.active = false)
      )
    );
  }

  return (
    // <div className="flex flex-col justify-center items-center max-w-[375px] p-4 bg-top bg-no-repeat bg-[#F8F9FF] bg-[url('../src/assets/bg-sidebar-mobile.svg')]">
    //   <div className="flex flex-col gap-3 max-w-[343px] min-h-[500px] p-6 rounded-[10px] bg-white">
    //     <h1 className="font-bold text-2xl">Select your plan</h1>
    //     <p className="font-regular text-base text-[#9699AA]">
    //       You have the option of monthly or yearly billing.
    //     </p>
    <>
      {selectYourPlanDb.map((plan, index) => (
        <div
          key={index}
          className={`flex justify-start items-start w-full p-4 gap-4 rounded-lg border-solid border-2 cursor-pointer
          ${plan.active ? "border-[#483EFF] bg-[#F8F9FF]" : "border-[#D6D9E6] bg-white"}`}
          onClick={() => handleClick(plan.plan)}
        >
          <img src={plan.imgSrc} alt="Arcade" width="40px" />
          <div>
            <div className="text-base font-medium text-[#022959]">{plan.plan}</div>
            <div>{`$${plan.price * payment.numberMonth}/${payment.period}`}</div>
            {payment.period === "yr" ? <div>2 month free</div> : ""}
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center gap-3">
        <span>Monthly</span>
        <input
          type="checkbox"
          role="switch"
          className="basic cursor-pointer"
          onChange={() => changePayment()}
        />
        <span>Yearly</span>
      </div>
    </>
    //   </div>
    // </div>
  );
};

export default SelectYourPlan;
