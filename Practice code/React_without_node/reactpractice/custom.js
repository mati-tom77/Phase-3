var parElement = React.createElement(
"div",
{ style: { backgroundColor: "pink" } },
"I am a div for title",
React.createElement(
"ul",
null,
React.createElement("li", null, "First child of ul"),
React.createElement("li", null, "Second child of ul")
),
React.createElement("div", null, "Div to hold 2nd paragraph")
);
console.log(parElement);
ReactDOM.render(parElement, document.querySelector("#myDiv"));