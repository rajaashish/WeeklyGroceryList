// Variables
const groceryList = document.getElementById('grocery-list');


// Event Listeners
eventListeners();

function eventListeners() {
     // Form Submission
     document.querySelector('#form').addEventListener('submit', newgrocery);

     // Remove grocery from the list
     groceryList.addEventListener('click', removegrocery);

     // Document
     document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}


// Functions

function newgrocery(e) {
     e.preventDefault();

     // Read the textarea value
     const grocery = document.getElementById('grocery').value;

     // Create the remove button
     const removeBtn = document.createElement('a');
     removeBtn.classList = 'remove-grocery';
     removeBtn.textContent = 'X';

     // Create an <li> element
     const li = document.createElement('li');
     li.textContent = grocery; 
     
     // Add the remove button to each grocery
     li.appendChild(removeBtn);

     // Add to the list
     groceryList.appendChild(li);

     // add to Local Storage
     addgroceryLocalStorage(grocery);

     // Print the alert
     alert('grocery Added');

     this.reset();
} 

// Removes the grocerys from the DOM
function removegrocery(e) {
     if(e.target.classList.contains('remove-grocery')) {
          e.target.parentElement.remove();
     } 

     // Remove from Storage
      removegroceryLocalStorage( e.target.parentElement.textContent ) ;
}

// Adds the grocerys into the local storage
function addgroceryLocalStorage(grocery) {
     let grocerys = getgrocerysFromStorage();

     // Add the grocery into the array
     grocerys.push(grocery);

     // Convert grocery array into String
     localStorage.setItem('grocerys', JSON.stringify( grocerys )  );
}

function getgrocerysFromStorage() {
     let grocerys;
     const grocerysLS = localStorage.getItem('grocerys');
     // Get the values, if null is returned then we create an empty array
     if(grocerysLS === null) {
          grocerys = [];
     } else {
          grocerys = JSON.parse( grocerysLS ); 
     }
     return grocerys;
}

// Prints Local Storage grocerys on Load
function localStorageOnLoad() {
     let grocerys = getgrocerysFromStorage();

     // Loop throught storage and then print the values
     grocerys.forEach(function(grocery) {
          // Create the remove button
          const removeBtn = document.createElement('a');
          removeBtn.classList = 'remove-grocery';
          removeBtn.textContent = 'X';

          // Create an <li> element
          const li = document.createElement('li');
          li.textContent = grocery; 
          
          // Add the remove button to each grocery
          li.appendChild(removeBtn);

          // Add to the list
          groceryList.appendChild(li);
     });
}

// Removes the grocery from local storage

function removegroceryLocalStorage(grocery) {
     // get grocerys from storage
     let grocerys = getgrocerysFromStorage();

     // Remove the X from the grocery

     const groceryDelete = grocery.substring( 0, grocery.length -1 );

     // Loop Throught  the grocerys and remove the grocery that's equal
     grocerys.forEach(function(groceryLS, index) {
          if(groceryDelete === groceryLS) {
               grocerys.splice(index, 1);
          }
     });

     // Save the data 
     localStorage.setItem('grocerys', JSON.stringify(grocerys) );
}