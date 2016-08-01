// Function to show all todo items
function storeTodos () {
    var items = [];
    // retrieve data as a string from local storage
    var itemsList = localStorage.getItem('todo');
    if (itemsList !== null) {
        // convert to an object
        items = JSON.parse(itemsList);
    }

    return items;
}

listTodos();

// Function to add some todo items upon click of #add
document.getElementById('add').addEventListener('click', add);

function add() {
  var task = document.getElementById('entry').value;
    if(task != ''){
      var items = storeTodos();
      items.push(task);
      localStorage.setItem('todo', JSON.stringify(items));

      listTodos();
      document.getElementById('createList').reset();
      return false;
    } else {
      alert("Please add a todo item to your list.");
    }
}

// Function to show list items in HTML
function listTodos() {
    var items = storeTodos();

    var html = '<ul>';
    for (i = 0; i < items.length; i++){
      html += '<li><span class="todoItem">' + items[i] + '</span><a href="#" class="deleteItems"> x</a>' + '</li>';
    };
    html += '</ul>';

    document.getElementById('items').innerHTML = html;
    var todoItem = document.getElementsByClassName('todoItem');
    var clicked = false;

    // loop through all items in the array and add the event listener
    for (i = 0; i < todoItem.length; i++) {
      todoItem[i].addEventListener('click', clickhandler);
      // Set id to uniquely identify each todo item
      todoItem[i].id = 'todoItem-' + i;
      id = todoItem[i].id;
      //console.log(id);
      if (localStorage.getItem('status') === id) {
        document.getElementById(id).className += " strikethrough";
        //console.log(localStorage.getItem('status'));
      }
    }

    // Clickhandler function sets class to strikethrough if todo item is clicked
    function clickhandler(id){
      var clicked = true;
      if (clicked) {
        id = id.target.id;
        document.getElementById(id).className += " strikethrough";
        localStorage.setItem('status', id);
      }
    }
}

// Function to remove todo items if "x" is clicked
var deleteItems = document.getElementsByClassName('deleteItems');
for (i = 0; i < deleteItems.length; i++) {
  deleteItems[i].addEventListener('click', remove);
}

function remove(deleteItems) {
  var clicked = true;
  if (clicked) {
    console.log("The x of " + id + " was clicked!");
    return false;
  }
}
