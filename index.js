console.log('Inside JS');
const a = 10;
const b = 20;

const body = document.getElementById('body');
const h1 = document.getElementById('h1');
h1.innerHTML=`${h1.innerHTML}    ${a+b}`;

const h2 = document.createElement('h2');
h2.innerHTML='Hello Bro!!!'

body.append(h2);

var myParagraph = document.createElement("p");    // Create a <p> element
var myText = document.createTextNode("text added using JS"); 
// Create a text node that has the text for <p>
myParagraph.appendChild(myText);   // Append the text to <p>
document.body.appendChild(myParagraph); // Append <p> to <body>

let hello=null;
console.log(typeof hello);