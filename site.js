var earlyZip = document.querySelector('#zip');

console.log("Whee! I'm at the top of the JavaScript file!");

window.addEventListener('load', function(event) {
  console.log('Heard the "load" event');
});

document.addEventListener('DOMContentLoaded', function(event) {
  var lateZip = document.querySelector('#zip');
  console.log('Heard the "DOMContentLoaded" event');
  if (earlyZip) {
    console.log('I have a value on earlyZip');
  } else {
    console.log('earlyZip? Who knows what that is? Not me!!!');
  }
  if (lateZip) console.log('I have a value on lateZip');
});

console.log("Boo! I'm at the bottom of the JavaScript file :(");
