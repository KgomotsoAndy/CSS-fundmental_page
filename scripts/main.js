var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lesego4.jpg') {
      myImage.setAttribute ('src','images/lesego3.jpg');
    } else {
      myImage.setAttribute ('src','images/lesego4.jpg');
    }
}

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lesego4.jpg') {
      myImage.setAttribute ('src','images/lesego3.jpg');
    } else {
      myImage.setAttribute ('src','images/lesego4.jpg');
    }
}


//User name code
var myButton = document.getElementById('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to my site!, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome back, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
