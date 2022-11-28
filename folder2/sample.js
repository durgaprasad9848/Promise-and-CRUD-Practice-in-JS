 
//Task 6
window.onload = function(){
//1
  var itemlist = document.querySelector('#items');
 
  console.log(itemlist.parentElement);

  itemlist.parentElement.style.color = "blue";

//2

 var itemlist2 = document.querySelector('#items');

 itemlist2.lastElementChild.style.color="yellow";
//3
 console.log(itemlist2.lastChild);

//4 create child

//5
console.log(itemlist2.firstElementChild);

//6
console.log(itemlist2.firstChild);

//7
console.log(itemlist2.nextSibling);
 
//8

console.log(itemlist2.nextElementSibling);

//9
console.log(itemlist2.nextElementSibling);

//10

console.log(itemlist2.previousSibling);


//11.

var newpara = document.createElement('p');

newpara.className='paragraph';

newpara.id='para1';
//12

newpara.setAttribute('title','Hi prasad');


console.log(newpara);

//13
var newparatext = document.createTextNode('Inside the paragraph');


//14
newpara.appendChild(newparatext);

console.log(newpara);


/////
//1
var container = document.querySelector('header .container');

var h1= document.querySelector('header h1');

console.log(h1);

container.insertBefore(newpara,h1);
//2

var container2=document.querySelectorAll('h2');

var listgroup = document.querySelector('list-group');

container2[1].insertBefore(newpara,listgroup);



}


 