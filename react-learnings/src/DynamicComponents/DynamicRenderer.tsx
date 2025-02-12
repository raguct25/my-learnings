import React, { useEffect } from "react";
import ISO6391 from "iso-639-1";

const DynamicRenderer = ({ data }: any) => {
  useEffect(() => {
    // Get all languages and map them to label and code
    const allLanguages = ISO6391.getAllNames().map((name, index) => ({
      label: name,
      code: ISO6391.getCode(name),
    }));

    console.log("allLanguages", allLanguages);
  }, []);
  return (
    <div className="w-full max-w-2xl space-y-6">
      {data.map((item: any, index: number) => {
        if (item.type === "TEXT") {
          return (
            <div key={index} className="bg-white p-4 rounded shadow">
              <textarea className="w-full border border-gray-300 rounded p-2 resize-none" />
            </div>
          );
        } else if (item.type === "IMAGE") {
          return (
            <div
              key={index}
              className="bg-white p-4 rounded shadow flex justify-center"
            >
              <img
                src={item.src}
                alt={item.alt || "Dynamic content"}
                className="max-w-full rounded"
              />
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className="bg-white p-4 rounded shadow text-red-500"
            >
              Unsupported component type: {item.type}
            </div>
          );
        }
      })}
    </div>
  );
};

export default DynamicRenderer;
