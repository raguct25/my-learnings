import React from "react";
import DynamicRenderer from "./DynamicRenderer";

import jsonData from "./datas.json";

function DynamicComponent() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Dynamic Template Renderer</h1>
      <DynamicRenderer data={jsonData} />
    </div>
  );
}

export default DynamicComponent;
