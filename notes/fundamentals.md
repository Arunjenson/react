# React Element

const heading = React.createElement("h1", {//here props or attributes can be added} ,children)

const root = ReactDOM.createRoot(document.getElementById);

root.render(heading)

react element is an Object when we render this object to DOM use ReactDOM.render()

Note : React will replace all the DOM elements with the JS object given with the render

in above case all the previous children elements inside the root will be replaced with the heading

# JSX (HTML like syntax)

Syntax to easily create react elements

ex :  const jsxElement = <h1>Hello JSX</h1> => same react element as the react element

JS engine cannot understand the JSX 

JSX is transpiled before it reaches to JS  - Babel

JSX => React.createElement => ReactElement JS object => HTML


# React Component 

two ways we can write react components
1. Functional Components. => Just a normal JS function which returns a JSX
2. Class Based Components