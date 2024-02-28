// const ulElement=React.createElement("ul",null,null);
// console.log(ulElement);
// create ul element with its childeren
const ulElement=React.createElement(
"ul",
null,
React.createElement("li", null, "Abebe"),
React.createElement("li", null, "Kebede"),
React.createElement("li", null, "Almaz")
);
console.log(ulElement);
// React.createElement("div", null, "Div to hold 2nd paragraph")
// );
ReactDOM.render(ulElement, document.querySelector("#fromjs"));