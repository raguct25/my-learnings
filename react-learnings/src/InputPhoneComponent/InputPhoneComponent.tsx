import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
// import InternationalPhoneInput from "react-international-phone";

const InputPhoneComponent = () => {
  const [phone, setPhone] = useState("");

  console.log("phone", phone);
  console.log("setPhone", setPhone);

  return (
    <div>
      <PhoneInput
        value={phone}
        onChange={(phone) => setPhone(phone)}
        forceDialCode
      />
    </div>
  );
};

export default InputPhoneComponent;
