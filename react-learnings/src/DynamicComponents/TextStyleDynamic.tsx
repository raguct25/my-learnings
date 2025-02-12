// import React, { useState } from "react";

// const parseText = (text: string) => {
//   // Replace patterns with HTML tags
//   const boldPattern = /\*\*(.*?)\*\*/g; // Detect **bold**
//   const italicPattern = /_(.*?)_/g; // Detect _italic_
//   const strikePattern = /~~(.*?)~~/g; // Detect ~~strikethrough~~
//   const variablePattern = /\{\{(.*?)\}\}/g; // Detect {{variable}}

//   return text
//     .replace(boldPattern, "<b>$1</b>")
//     .replace(italicPattern, "<i>$1</i>")
//     .replace(strikePattern, "<s>$1</s>")
//     .replace(variablePattern, '<span style="color: red;">{{$1}}</span>');
// };

// const TextStyleDynamic = () => {
//   const [input, setInput] = useState("");

//   const handleInputChange = (e: any) => {
//     setInput(e.target.value);
//   };

//   return (
//     <div>
//       <textarea
//         value={input}
//         onChange={handleInputChange}
//         placeholder="Type something like **bold**, _italic_, ~~strikeout~~, or {{variable}}"
//         rows={5}
//         style={{ width: "100%", marginBottom: "20px" }}
//       />
//       <div
//         style={{ border: "1px solid #ccc", padding: "10px" }}
//         dangerouslySetInnerHTML={{ __html: parseText(input) }}
//       />
//     </div>
//   );
// };

// export default TextStyleDynamic;

// import React, { useState } from "react";
// import ReactMarkdown from "react-markdown";

// const TextStyleDynamic = () => {
//   const [input, setInput] = useState("");

//   const handleInputChange = (e: any) => {
//     setInput(e.target.value);
//   };

//   return (
//     <div className="p-6">
//       <textarea
//         className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring focus:border-blue-300"
//         value={input}
//         onChange={handleInputChange}
//         placeholder="Type something like **bold**, _italic_, or ~~strikeout~~"
//         rows={5}
//       />
//       <div className="border border-gray-300 p-4 rounded-lg">
//         <ReactMarkdown
//           components={{
//             strong: ({ children }) => (
//               <strong className="text-blue-600">{children}</strong>
//             ),
//             em: ({ children }) => (
//               <em className="italic text-green-600">{children}</em>
//             ),
//             del: ({ children }) => (
//               <del className="line-through text-red-600">{children}</del>
//             ),
//           }}
//         >
//           {input}
//         </ReactMarkdown>
//       </div>
//     </div>
//   );
// };

// export default TextStyleDynamic;

import React, { useState } from "react";

const parseText = (text: string) => {
  const boldPattern = /\*(.*?)\*/g; // Detect **bold**
  const italicPattern = /_(.*?)_/g; // Detect _italic_
  const strikePattern = /~(.*?)~/g; // Detect ~~strikethrough~~
  const variablePattern = /\{\{(.*?)\}\}/g; // Detect {{variable}}

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

// import React, { useState } from "react";

// const TextStyleDynamic = () => {
//   const [input, setInput] = useState("");
//   const [counter, setCounter] = useState(1);

//   const handleInputChange = (e: any) => {
//     let value = e.target.value;

//     // Automatically replace `{{}}` with `{{counter}}` and increment counter
//     if (value.includes("{{}}")) {
//       value = value.replace(/\{\{\}\}/g, `{{${counter}}}`);
//       setCounter(counter + 1);
//     }

//     // Remove invalid `{{}}` patterns (non-numeric inside `{{}}`)
//     value = value.replace(/\{\{[^\d]*\}\}/g, "");

//     setInput(value);
//   };

//   return (
//     <div className="p-6">
//       <textarea
//         className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring focus:border-blue-300"
//         value={input}
//         onChange={handleInputChange}
//         placeholder="Type {{}} to insert sequential numbers."
//         rows={5}
//       />
//       <div className="border border-gray-300 p-4 rounded-lg">
//         <p>{input}</p>
//       </div>
//     </div>
//   );
// };

// export default TextStyleDynamic;
