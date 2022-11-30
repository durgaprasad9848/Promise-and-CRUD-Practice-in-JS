 
var from = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

from.addEventListener('submit',additem);


function additem(e)
{
  e.preventDefault();

  var newItem = document.getElementById('item').value;

  var li = document.createAttribute('li');
  li.className='list-group-item';
  li.appendChild(document.createTextNode(newItem));

  var deleteBtn = document.createElement('button');
   
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(deleteBtn);
  itemList.appendChild(li);

  //edit button

  var editBtn = document.createElement('button');

  editBtn.className = 'edit buttion';
  editBtn.appendChild(document.createTextNode('EDIT'));
  li.appendChild(editBtn);



}


// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
 