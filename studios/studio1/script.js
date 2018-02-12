"use strict";
console.log('reading');

// capture the submit event
document.f.onsubmit = processForm;

// define process function
function processForm() {

  // store form fields in variables
  var userName = document.f.userName.value;
  var userSign = document.f.userSign.value;
  var adj1 = document.f.adj1.value;
  var adj2 = document.f.adj2.value;
  var verb1 = document.f.verb1.value;
  var adv = document.f.adv.value;
  var noun = document.f.noun.value;
  var verb2 = document.f.verb2.value;
  var adj3 = document.f.adj3.value;
  var myFuture = document.getElementById("myFuture");


  myFuture.innerHTML = "<h2><span>" + userSign + "<span></h2><br>Hey " + userName + ", " + adj1 + " news! Your quarter is looking " + adj2 + ". Be sure to " + verb1 + " " + adv + " and all your dreams will come true. In terms of your future, " + noun + " will be yours if you will it. But beware! If you don't " + verb2 + ", you'll stay " + adj3 + " forever... <br><h3>Good luck!</h3>"
  //prevent page from reloading
  return false;
}

document.f.onreset = resetForm;

function resetForm() {
  myFuture.innerHtml = " ";
  myFuture.setAttribute("class", "hide");
  myFuture.setAttribute("results", "hide");

}