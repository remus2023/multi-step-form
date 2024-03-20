import { FormContext } from "../providers/form.providers";
import { useContext } from "react";
const PickAddOns = () => {
  const { payment, pickAddOns, setPickAddOns } = useContext(FormContext);

  function handleChange(index) {
    console.log(pickAddOns[index].checked);
    console.log(index);
    // setPickAddOns([
    //   ...pickAddOns,
    //   { ...pickAddOns[index], checked: pickAddOns[index].checked ? false : true },
    // ]);
    setPickAddOns(
      pickAddOns.map((obj, mapIndex) =>
        mapIndex === index ? { ...obj, checked: obj.checked ? false : true } : obj
      )
    );
    console.log(pickAddOns);
  }
  return (
    <>
      {pickAddOns.map((addOns, index) => (
        <div
          className={`flex justify-between items-center w-full border-2 rounded-lg  px-4 py-[11px] ${
            addOns.checked ? "border-[#483EFF]" : "border-[#D6D9E6]"
          }`}
          key={index}
        >
          <div className="flex gap-3">
            <input
              className="w-[20px] accent-[#483EFF]"
              type="checkbox"
              name={addOns.name}
              onChange={() => handleChange(index)}
              checked={pickAddOns[index].checked}
            />
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="text-sm text-[#022959] font-medium">{addOns.addOns}</div>
              <div className=" font-ubuntu text-xs text-[#9699AA] leading-5">
                {addOns.description}
              </div>
            </div>
          </div>
          <div className="text-sm text-[#483EFF]">{`+$${addOns.price * payment.numberMonth}/${
            payment.period
          }`}</div>
        </div>
      ))}
    </>
  );
};

export default PickAddOns;
