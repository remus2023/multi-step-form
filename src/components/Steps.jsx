import { useContext } from "react";
import { FormContext } from "../providers/form.providers";
const Steps = () => {
  const { step } = useContext(FormContext);
  const pages = [1, 2, 3, 4];
  console.log("step", step);
  return (
    <div className="flex justify-center items-center gap-4 pt-4 pb-8">
      {pages.map((page, index) => (
        <span
          key={index}
          className={`w-[33px] h-[33px] rounded-full border-white border-2 text-center font-bold ${
            step === index ? "bg-[#BEE2FD] text-[#022959]" : "text-white"
          } `}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Steps;
