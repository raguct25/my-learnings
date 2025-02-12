import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ChildComponent = () => {
  const { state } = useLocation();

  const navigate = useNavigate();

  console.log("state:", state);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       navigate(-1);
  //     }, 5000);
  //   }, []);

  return (
    <div className="text-center m-5">
      ChildComponent
      <h2>{state.name}</h2>
      <button className="underline" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};
