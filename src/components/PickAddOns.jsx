import { dataBase } from "../config/config";
import { FormContext } from "../providers/form.providers";
import { useContext } from "react";
const PickAddOns = () => {
  const { payment } = useContext(FormContext);
  return (
    <>
      {dataBase[2].map((addOns, index) => (
        <div key={index}>
          <input type="checkbox" name={addOns.name} id="" />
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
