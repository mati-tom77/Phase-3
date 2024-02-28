const containerElement=document.querySelector("#fromjs");
const listOfItems=["Abebe","Kebede","Almaz"];
// create ul element
const ulElement=document.createElement("ul");
// create li
listOfItems.forEach((item) =>{
    const listElement=document.createElement("li");
    listElement.innerText=item;
    ulElement.appendChild(listElement);
});
containerElement.appendChild(ulElement);