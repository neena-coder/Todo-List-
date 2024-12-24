const input = document.getElementById("input");
const add = document.getElementById("add");
const addform = document.getElementById("addForm");

window.addEventListener('load', function() {
    loadItemsFromLocalStorage(); // Load items from local storage on page load
});

function loadItemsFromLocalStorage() {
    const list = document.getElementById("list");
    const items = JSON.parse(localStorage.getItem("todoItems")) || [];
    items.forEach(itemText => {
        const item = document.createElement("li");
        item.innerHTML = `<div><input type="checkbox" class="toggle"> ${itemText}</div>
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
            saveItemsToLocalStorage(); // Save updated list to local storage
        });
        list.appendChild(item); // Append the new item to the list
    });
}

function saveItemsToLocalStorage() {
    const listItems = Array.from(document.querySelectorAll("#list li"));
    const items = listItems.map(item => item.textContent.trim());
    localStorage.setItem("todoItems", JSON.stringify(items));
}

add.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default button behavior

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
        saveItemsToLocalStorage(); // Save updated list to local storage
    });
    list.appendChild(item); // Append the new item to the list

    input.value = ''; // Clear the input field
    addform.style.display = "none";
    buttons.style.display = "flex";

    saveItemsToLocalStorage(); // Save items to local storage
});

const clearList = document.getElementById("clearList");

clearList.addEventListener('click', function() {
    const list = document.getElementById("list");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    localStorage.removeItem("todoItems"); // Clear local storage
});

const addTask = document.getElementById("addTask");
const buttons = document.getElementById("buttons");
addTask.addEventListener('click', function(){
    buttons.style.display = "none";
    addform.style.display = "flex";
});