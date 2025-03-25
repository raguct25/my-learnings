// import React from "react";

// async function getPosts() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// }

// const SsrComponent = async () => {
//   const posts = await getPosts();
//   return (
//     <div>
//       <h1>Server-Side Rendered (SSR) Posts</h1>
//       <ul>
//         {posts.map((post: any) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SsrComponent;

// IF use async in the jsx component the coponent could not work this is a server side render

//Compiled with problems:

// ERROR in src/App.tsx:31:8
// TS2786: 'SsrComponent' cannot be used as a JSX component.
//   Its return type 'Promise<Element>' is not a valid JSX element.
//     Type 'Promise<Element>' is missing the following properties from type 'ReactElement<any, any>': type, props, key
//     29 |       {/* <InputPhoneComponent /> */}
//     30 |       {/* <CarouselComponent /> */}
//   > 31 |       <SsrComponent />
//        |        ^^^^^^^^^^^^
//     32 |     </>
//     33 |   );
//     34 | }

import React from "react";

const SsrComponent = () => {
  return (
    <div>
      <h1>Server-Side Rendered (SSR) Posts</h1>
    </div>
  );
};

export default SsrComponent;
