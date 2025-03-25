import React, { useState } from "react";

const parseText = (text: string) => {
  console.log("text", text);

  const boldPattern = /\*(.*?)\*/g; // Detect **bold**
  const italicPattern = /_(.*?)_/g; // Detect _italic_
  const strikePattern = /~(.*?)~/g; // Detect ~~strikethrough~~
  // const variablePattern = /\{\{(.*?)\}\}/g; // Detect {{variable}}
  // const variablePattern = /\{\{(\d+)\}\}/g; // Detect {{numbers only}}
  const variablePattern = /\{\{(.*?)\}\}/g;
  const matches = text.match(variablePattern) || [];

  console.log("matches", matches);

  return text
    .replace(boldPattern, '<span class="font-bold text-gray-600">$1</span>')
    .replace(italicPattern, '<span class="italic text-gray-600">$1</span>')
    .replace(
      strikePattern,
      '<span class="line-through text-gray-600">$1</span>'
    )
    .replace(
      variablePattern,
      '<span class="text-purple-600 font-semibold">{$1}</span>'
    );
};

const TextStyleDynamic = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <div className="p-6">
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring focus:border-blue-300"
        value={input}
        onChange={handleInputChange}
        placeholder="Type something like **bold**, _italic_, ~~strikeout~~, or {{variable}}"
        rows={5}
      />
      <div
        className="border border-gray-300 p-4 rounded-lg"
        dangerouslySetInnerHTML={{ __html: parseText(input) }}
      />
    </div>
  );
};

export default TextStyleDynamic;
