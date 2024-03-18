import thankYou from "../assets/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[343px] h-[400px] gap-4 p-6 rounded-[10px] bg-white">
      <img src={thankYou} alt="Thank You" className="w-[56px]" />
      <h1 className="font-bold text-2xl">Thank You!</h1>
      <p className="font-regular text-base text-[#9699AA] text-center">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you
        ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYou;
