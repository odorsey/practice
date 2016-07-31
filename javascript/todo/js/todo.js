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

// Function to add some todo items
document.getElementById('add').addEventListener('click', add);
listTodos();

function add() {
  var task = document.getElementById('entry').value;
    if(task != ''){
      var items = storeTodos();
      items.push(task);
      localStorage.setItem('todo', JSON.stringify(items));

      listTodos();
      form.reset();
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
      html += '<li class="todoItem">' + items[i] + '</li>';
    };
    html += '</ul>';

    document.getElementById('items').innerHTML = html;
}

// Setting up functionality to strikethrough to-do items if finished
var todoItem = document.getElementsByClassName('todoItem');

// Set clicked status
var clicked = false;

// loop through all items in the array and add the event listener
for (i = 0; i < todoItem.length; i++) {
  todoItem[i].addEventListener('click', clickhandler);
  // Set id to uniquely identify each todo item
  todoItem[i].id = 'todoItem-' + i;
  id = todoItem[i].id;
}

function clickhandler(id){
  var clicked = true;
  if (clicked) {
    id = id.target.id;
    document.getElementById(id).className += " strikethrough";
    return false;
  }
}
