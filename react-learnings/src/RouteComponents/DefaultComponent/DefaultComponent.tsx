import React from "react";
import { useNavigate } from "react-router-dom";

const DefaultComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="flex">
      DefaultComponent
      <button
        className="bg-slate-400 p-4 rounded-md hover:text-white"
        onClick={() =>
          navigate("/child", { state: { name: "Data From-Parent" } })
        }
      >
        Navigate component
      </button>
    </div>
  );
};

export default DefaultComponent;
