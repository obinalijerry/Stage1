const day =document.getElementById('day');
const timeinMilliseconds = document.getElementById('timeinmilliseconds');

const date = new Date();

timeinMilliseconds.innerHTML = date.getMilliseconds();
