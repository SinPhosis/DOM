// DOM Methods
// getElementById("id")
// getElementsByTagName("name")
// getElementsByClassName("className")
// setAttribute(attribute , value) change attribute
// createElement(element) create aa HTML element
// removeChild(element) Remove an
// appendChild(element) add
// replaceChild(new, old) replace
// write(text)
// document.getElementById(id).onclick = function(){code}   add event handlers
// querySelectorAll("
// ")
 
// DOM Property
// innerHTML  change or get content
// attribute  change or get attribute
// style.property change or get style
// onclick=script
 
// DOM Navigate
// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling
 
// Examples
 
// document.getElementById("p2").style.color = "blue";
// document.getElementById("myBtn").onclick = displayDate;
// document.getElementById("myBtn").addEventListener("click", displayDate);
// element.addEventListener("click", function(){ alert("Hello World!"); });
// element.removeEventListener("mousemove", myFunction);
// Most browsers return a NodeList object for the method querySelectorAll().
 
// DOM
// Document
// Examples 
// document.getElementsByClassName("game-container")
// document.getElementsByTagName("p")
// document.getElementsByTagName("div")
// document.querySelector(".game-container").innerHTML = "query selector"  // class 
// document.querySelector("#game-container").innerHTML = "query selector"  // id 
// document.querySelector(".game-container").innerHTML = "query selector"  // tag name
 
// const card = document.createElement('div');
// const title = document.createElement("p");
// title.innerHTML = "Hello world from p tag";
 
// document.getElementById("game-container").appendChild(title);
// appendChild(element) add
 
// document.getElementById("game-container").removeChild(title)
 
// removeChild(element) Remove an
 
// replaceChild
 
// const newTitle = document.createElement("div");
// newTitle.innerHTML = "repleced element";
 
// document.getElementById("game-container").replaceChild(newTitle, title);
// // document.getElementById(id).onclick = function(){code}
 
// const parentDiv = document.getElementById("game-container");
 
// const button = document.createElement("p");
// button.innerHTML = "Click me";
 
// button.style.border = "1px solid red";
// button.style.padding = "5px";
 
// button.classList.add("buttun");
 
// parentDiv.appendChild(button);
 
// button.onclick = function () {
//   alert("clicked the button");
//   console.log("====================================");
//   console.log("clicked the button");
//   console.log("====================================");
// };
//
//     event name
 
// button.onmouseenter;
// button.addEventListener("mouseout", function () {
//   alert("Hello World!");
// });



// Exercise
// 1. Create folder DOM_lesson
// 2. index.html , index.js
// 3. index.html  1 shirheg div, script tag-tai
// 4. create new P tag and give innerHTML context and append parent DIV with it.
// 5. Use replace it with div tag
// 6. Create button using p tag and append parent
// 7. Add style attribute in button element button
// 8. Show alert when button clicked by using event listener
// 9. Create p tag that contains "Hello wolrd title" and change the color when element mouseover
// 10. Add class name using classList
const unknown = document.getElementById("something");

//const p = document.createElement("p");
//p.innerHTML = "testin buh";
//
//document.getElementById("something").appendChild(p);
//
//const new_element = document.createElement("div");
//new_element.innerHTML = "replaced element";
//
//document.getElementById("something").replaceChild(new_element, p);
//
//new_element.style.color = "green";
//new_element.style.fontSize = "23px";
//
////const button = document.createElement("input");
////document.getElementById("something").appendChild(button);
//
//new_element.addEventListener("mouseenter", () => {
//    new_element.style.color = "red"
//});
//
//new_element.addEventListener("mouseout", () => {
//    new_element.style.color = "green"
//});

// Login Label
const h1 = document.createElement("h1");
h1.innerHTML = "Log In";
h1.style.color = "green";
h1.style.display = "flex";
h1.style.justifyContent = "center";
document.getElementById("something").appendChild(h1);

// Email Label
const passwordLabel = document.createElement("label");
passwordLabel.innerHTML = "Email";
passwordLabel.style.marginBottom = "5px"; 
passwordLabel.style.fontWeight = "bold";
document.getElementById("something").appendChild(passwordLabel);

// Email Input
const input1 = document.createElement("input");
input1.type = "email"; 
input1.style.display = "block";  
input1.style.margin = "0 auto";  
input1.style.padding = "10px";  
input1.style.width = "200px"; 
document.getElementById("something").appendChild(input1);

//  Password Label
const emailLabel = document.createElement("label");
emailLabel.innerHTML = "Password";
emailLabel.style.marginTop = "30px" 
emailLabel.style.marginBottom = "5px"; 
emailLabel.style.fontWeight = "bold"; 
document.getElementById("something").appendChild(emailLabel);

// Password Input
const input2 = document.createElement("input");
input2.type = "password"; 
input2.style.display = "block";  
input2.style.margin = "0 auto";  
input2.style.padding = "10px"; 
input2.style.width = "200px"; 
document.getElementById("something").appendChild(input2);

// Sign In Button

const button = document.createElement("button");
button.innerHTML = "SIGN IN";
button.style.cursor = "pointer";
button.style.fontSize = "15px";
button.style.color = "white";
button.style.backgroundColor = "#016064";
button.style.width = "120px";
button.style.height = "50px";
button.style.marginTop = "40px";
button.style.borderRadius = "10px";
button.style.borderStyle = "hidden"
document.getElementById("something").appendChild(button);

// outer 
const container = document.getElementById("something");
container.style.display = "flex";
container.style.flexDirection = "column"; 
container.style.justifyContent = "center";  
container.style.alignItems = "center";  
container.style.height = "100vh";  

// Add button event listener
button.addEventListener("click", () => {
    const email = input1.value.trim();
    const password = input2.value.trim();
    const correctEmail = "example@gmail.com"; 
    const correctPassword = "123456789"; 

  if (email === correctEmail && password === correctPassword) {
    alert("Login successful!");
  } else {
    alert("Invalid email or password. Please try again.");
  }
});