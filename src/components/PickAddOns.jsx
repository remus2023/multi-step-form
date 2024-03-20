import { pickAddOnsDb } from "../config/config";
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
        <div key={index}>
          <input
            type="checkbox"
            name={addOns.name}
            onChange={() => handleChange(index)}
            checked={pickAddOns[index].checked}
          />
          <div>
            <div>{addOns.addOns}</div>
            <div>{addOns.description}</div>
          </div>
          <div>{`+$${addOns.price * payment.numberMonth}/${payment.period}`}</div>
        </div>
      ))}
    </>
  );
};

export default PickAddOns;
