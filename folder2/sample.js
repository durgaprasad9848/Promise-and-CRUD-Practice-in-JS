var form = document.querySelector("#my-form");
var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');
//console.log(form);
//let userList = JSON.parse(localStorage.getItem('user'+user.email));
//console.log(userList);
form.addEventListener('submit', (e) =>{;
    e.preventDefault();
    // user object 
    let user ={
        name : nameInput.value,
        email : emailInput.value,
    } 
    //console.log(user);
    //userList.push(user);// array to store all the data of the users
    document.querySelector("#my-form").reset();// to reset the form
    //console.log(userList);
    userSeralized = JSON.stringify(user);// local storage only allow string so convert into string.
    localStorage.setItem( user.email ,userSeralized);// adding element in local storage

    addListOfUsers(user);// calling the funtion
});

//userList_Diseralized = JSON.parse(localStorage.getItem('user'));

//console.log(userList_Diseralized)
/*
Array.from(userList_Diseralized).forEach(function(item){
    //console.log(item);
})
*/
function addListOfUsers(user) {
    // get element where you wnat to create a elemnt 
    var ul = document.getElementById("listOfUser");
    // once get the element then create a element 
    var li = document.createElement("li");
    // append the elemet in child, child is because the we are creating the element so it will child of the the element we want ot add the element.
    li.appendChild(document.createTextNode(user.name + " " + user.email + " "));
    // append child node in paprent element or the where you want to add the element.

    //edit button
    var editB = document.createElement('input');
    editB.type = 'button'
    editB.value = 'Edit'
    editB.addEventListener('click',(e)=>{
        document.getElementById('name').value = user.name;
        document.getElementById('email').value = user.email;
        li.remove();
    })
    editB.style.border = "2px solid green";
    //delete button
    var deleteB = document.createElement('input');
    deleteB.type = 'button'
    deleteB.value = 'Delete'
    deleteB.addEventListener('click',(e) =>{
        localStorage.removeItem(user.email);
        li.remove();
    })
    deleteB.style.border = "2px solid red";
    //
    li.appendChild(editB);
    li.appendChild(deleteB);
    ul.append(li)
}
//userList.forEach(addListOfUsers);
Object.keys(localStorage).forEach((key) => {
    stringifiedDetailsOfPeople = localStorage.getItem(key);
    detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);    
    addListOfUsers(detailsOfPeople);
});
