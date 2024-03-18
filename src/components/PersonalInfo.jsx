import { personalInfoDb } from "../config/config";
const PersonalInfo = () => {
  return (
    <>
      {personalInfoDb.map((input, index) => (
        <div key={index}>
          <label>{input.label}</label>
          <input name={input.name} type={input.type} placeholder={input.placeHolder} />
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
