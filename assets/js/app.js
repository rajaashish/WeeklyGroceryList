// Variables
const ListList = document.getElementById('List-list');


// Event Listeners
eventListeners();

function eventListeners() {
     // Form Submission
     document.querySelector('#form').addEventListener('submit', newList);

     // Remove List from the list
     ListList.addEventListener('click', removeList);

     // Document
     document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}


// Functions

function newList(e) {
     e.preventDefault();

     // Read the textarea value
     const List = document.getElementById('List').value;

     // Create the remove button
     const removeBtn = document.createElement('a');
     removeBtn.classList = 'remove-List';
     removeBtn.textContent = 'X';

     // Create an <li> element
     const li = document.createElement('li');
     li.textContent = List; 
     
     // Add the remove button to each List
     li.appendChild(removeBtn);

     // Add to the list
     ListList.appendChild(li);

     // add to Local Storage
     addListLocalStorage(List);

     // Print the alert
     alert('List Added');

     this.reset();
} 

// Removes the Lists from the DOM
function removeList(e) {
     if(e.target.classList.contains('remove-List')) {
          e.target.parentElement.remove();
     } 

     // Remove from Storage
      removeListLocalStorage( e.target.parentElement.textContent ) ;
}

// Adds the Lists into the local storage
function addListLocalStorage(List) {
     let Lists = getListsFromStorage();

     // Add the List into the array
     Lists.push(List);

     // Convert List array into String
     localStorage.setItem('Lists', JSON.stringify( Lists )  );
}

function getListsFromStorage() {
     let Lists;
     const ListsLS = localStorage.getItem('Lists');
     // Get the values, if null is returned then we create an empty array
     if(ListsLS === null) {
          Lists = [];
     } else {
          Lists = JSON.parse( ListsLS ); 
     }
     return Lists;
}

// Prints Local Storage Lists on Load
function localStorageOnLoad() {
     let Lists = getListsFromStorage();

     // Loop throught storage and then print the values
     Lists.forEach(function(List) {
          // Create the remove button
          const removeBtn = document.createElement('a');
          removeBtn.classList = 'remove-List';
          removeBtn.textContent = 'X';

          // Create an <li> element
          const li = document.createElement('li');
          li.textContent = List; 
          
          // Add the remove button to each List
          li.appendChild(removeBtn);

          // Add to the list
          ListList.appendChild(li);
     });
}

// Removes the List from local storage

function removeListLocalStorage(List) {
     // get Lists from storage
     let Lists = getListsFromStorage();

     // Remove the X from the List

     const ListDelete = List.substring( 0, List.length -1 );

     // Loop Throught  the Lists and remove the List that's equal
     Lists.forEach(function(ListLS, index) {
          if(ListDelete === ListLS) {
               Lists.splice(index, 1);
          }
     });

     // Save the data 
     localStorage.setItem('Lists', JSON.stringify(Lists) );
}