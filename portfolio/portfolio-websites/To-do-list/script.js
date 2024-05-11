if (localStorage.getItem('itemcount') == null || localStorage.getItem('itemcount') == 'NaN') {
    localStorage.setItem('itemcount', 0);
}

// Sends the amount of items to the 'count' variable.
// Count is here, so that all the functions can reach it.
    count = localStorage.getItem('itemcount');

// When the new button is clicked, this executes.
document.addEventListener('submit',function() {
    // This prevents the page from reloading after submitting the form.
    event.preventDefault();
   
    toDoItem = document.getElementById('item').value;
    createToDo(toDoItem);
    
});

// This creates a new To Do element.
function createToDo(text) {
    
    // Increments the server variable 'itemcount' by 1, because there is 1 new element.
    count++;
    localStorage.setItem('itemcount', count);

    // This code saves the to do item to the local storage of the user.
    localStorage.setItem(`Id${count}`, text);

    // Calls a function that displays the item
    displayToDo(count, text);

    // Makes the text field empty
    toDoItem = "";
}

function displayToDo(id, text) {
    container = document.getElementById('container');
    
    container.innerHTML += `<p class="list-item" class="to-do-item" id="${id}"><button onclick="javascript:checkItem(${id})" class="check-button" id="Check${id}"><svg xmlns="http://www.w3.org/2000/svg" style="padding:0;" width="12px" height="12px" viewBox="0 0 24.00 24.00" fill="none" stroke="#4f7a28" stroke-width="2.4" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">

    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"/>
    
    <g id="SVGRepo_iconCarrier">
    
    <path d="M19.716 4.386a1 1 0 0 1 1.572 1.236L10.665 19.136a1.5 1.5 0 0 1-2.324.042l-5.104-6.032a1 1 0 1 1 1.526-1.292l4.708 5.564L19.716 4.386z" fill="#00f900" stroke-width="5"/>
    
    </g>
    
    </svg></button>${text}<button class="delete-button" onclick="deleteToDo(${id})"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" width="10px" height="10px" viewBox="0 0 25 25" version="1.1">

    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#000000">
            <path style="fill:red;" d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup">

</path>
        </g>
    </g>
</svg></button></p>`;
}

function updateApp() {
    console.log('updating...')
        for(i=0;i<parseInt(count);i++) {
            displayToDo(i+1, localStorage.getItem(`Id${i+1}`))
        }
    console.log('updated')
}

function checkItem(id) {
    document.getElementById(id).classList.toggle('crossed');
    document.getElementById(`Check${id}`).classList.toggle('checked');
}

function deleteToDo(id) {
    document.getElementById(id).style.display = 'none';
    localStorage.removeItem(`Id${id}`);
    localStorage.setItem('itemcount', parseInt(localStorage.getItem('itemcount')) - 1);
}

function resetToDo() {
    for(i=1;i<count+1;i++) {
        localStorage.removeItem(`Id${i}`)
    }
    localStorage.setItem('itemcount',0);
    document.getElementById('container').innerHTML = "";
    location.reload();
}