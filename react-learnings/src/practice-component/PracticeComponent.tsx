import React, { useEffect, useId, useState } from "react";

const PracticeComponent = () => {
  const [phoneId, setPhoneId] = useState("");
  const [businessId, setBusinessId] = useState("");
  const id = useId();

  useEffect(() => {
    console.log("use effect called");
  }, []);

  const triggerButton = () => {
    console.log("button trigger");
    setPhoneId(`test-${Math.random()}`);
    setBusinessId(`ragu-${Math.random()}`);
  };

  return (
    <div>
      <p>PracticeComponent</p>
      <p className="text-center">print1:{phoneId}</p>
      <p className="text-center">print2:{businessId}</p>

      <button className="bg-slate-400 p-3" onClick={triggerButton}>
        click
      </button>
    </div>
  );
};

export default PracticeComponent;
