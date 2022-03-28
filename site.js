console.log('WHeee! JavaScript!');

var zip_input = document.querySelector('#zip');

zip_input.addEventListener('focus', function(event) {
  console.log('OMG heard the focus event!');
  console.log('Value:', event.target.value);
});

zip_input.addEventListener('keydown', function(event) {
  console.log('OMG heard the keydown event!');
  console.log('Value:', event.target.value);
});

zip_input.addEventListener('keyup', function(event) {
  console.log('OMG heard the keyup event!');
  console.log('Value:', event.target.value);
});

zip_input.addEventListener('input', function(event) {
  console.log('OMG heard the input event!');
  console.log('Value:', event.target.value);
});

zip_input.addEventListener('blur', function(event) {
  console.log('OMG heard the blur event!');
  console.log('Value:', event.target.value);
});
