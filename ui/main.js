console.log('Loaded!');

//change the text of main text div
var element=document.getElementById('main-text');

element.innerHTML = 'abcd';

//move image
var img = document.getElementById('madi');

img.onclick = function (){ 
 var interval=setInterval(moveRight, 100);
 
 // img.style.marginLeft='100px';
};
