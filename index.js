const input = document.getElementById("input");
const add = document.getElementById("add");
const addform = document.getElementById("addForm");

add.addEventListener('click', function(e){
    e.preventDefault(); // Prevent default button behavior
    // console.log(input.value); // Log the current input value

    // Add the input value to the list
    const list = document.getElementById("list");
    const item = document.createElement("li");
    item.innerHTML = `<div><input type="checkbox" class="toggle"> ${input.value}</div>
                      <img src="./Assets/trash-can-solid.svg" class="delete">`;
    
    // Add event listener for the checkbox to toggle strike-through
    const checkbox = item.querySelector('.toggle');
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            item.querySelector('div').style.textDecoration = 'line-through';
        } else {
            item.querySelector('div').style.textDecoration = 'none';
        }
    });

    // Add event listener for the delete button
    const deleteButton = item.querySelector('.delete');
    deleteButton.addEventListener('click', function() {
        list.removeChild(item);
    });
    list.appendChild(item); // Append the new item to the list

    input.value = ''; // Clear the input field
    
    addForm.style.display = "none";
    buttons.style.display = "flex";
});


const clearList = document.getElementById("clearList");

clearList.addEventListener('click', function() {
    const list = document.getElementById("list");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
});

const addTask = document.getElementById("addTask");
const buttons = document.getElementById("buttons");
addTask.addEventListener('click', function(){
    buttons.style.display = "none";
    addform.style.display = "flex";
});