 
//Task 6
window.onload = function(){

//Query selector
var querypract = document.querySelector('.list-group-item:nth-child(2)');

querypract.style.backgroundColor="red";


//console.log(querypract);


//Query selector all 
//1.

var queryall = document.querySelectorAll('.list-group-item');

queryall[1].style.color="green";


//2.
for(let i=0;i,queryall.length;i++)
{
  if(i%2==0)
  queryall[i].style.backgroundColor="green";
}
 
//3
// Query selector : Selectos only single class,tag or id at a time. nth item will be accesed by nth-child() method.
// Query selector all : selects all the classes,tags and id at a time and accessed by its index value

}


 