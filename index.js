// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app'); // Select element with id "app"
appDiv.innerHTML = `Hello World`; // Inject something into that element

function reqListener(){
  appDiv.innerHTML = JSON.parse(this.responseText)
  .extract_html; //Inject something into that element
  console.log(this.responseText)
}

function reqListener(){
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open(
  "GET", 
"https://en.wikipedia.org/api/rest_v1/page/summary/Viljandi_County");
oReq.send();