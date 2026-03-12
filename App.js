import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {
//     id: "heading"
// }, "hello world from react");

// const parent = React.createElement("div", {
//     id: "parent"
// },
//     React.createElement(
//         "div", {
//         id: "child"
//     },
//         [React.createElement("h1", {
//             id: "heading2"
//         },
//             "Helllo im heading 2"),
//         React.createElement("h2", {
//             id: "heading2"
//         },
//             "Helllo im heading 3")
//         ]
//     ))

// react element with jsx

// const heading = <h1 id="heading">hello world from react</h1>

// react function component

const HeadingComponent2 = () => <h1 id="heading">hello world from react 2</h1>;

// react component compositionx

function HeadingComponent() {
  return (
    <div>
      <h1 id="heading">hello world from react</h1>
      <HeadingComponent2 />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent)
// root.render(heading)
root.render(<HeadingComponent />);
