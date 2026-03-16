import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";

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

// const HeadingComponent2 = () => <h1 id="heading">hello world from react 2</h1>;

// react component compositionx

// function HeadingComponent() {
//   return (
//     <div>
//       <h1 id="heading">hello world from react</h1>
//       <HeadingComponent2 />
//     </div>
//   );
// }



const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img alt="reslogo" src="https://www.cookingcarnival.com/wp-content/uploads/2025/09/Vegetable-Dum-Biryani-5.jpg" className="res-logo"/>
      <h3>Meghana Foods</h3>
      <h4>South Indian, North Indian</h4>
      <h4>4.5 stars</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">
       Search
      </div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div>
      <Header/>
      <Body/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
