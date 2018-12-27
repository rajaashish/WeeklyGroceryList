//variables
const listList= document.getElementById('List-list');

//Event Listeners
eventListeners();

function eventListeners(){

//Form submission
document.querySelector('#form').addEventListener('submit',newList);
}

//Function
function newList(e){
    e.preventDefault();
   
    //Read the textarea value
    const List = document.getElementById('List').value;
    //create the remove button
    const removebtn =document.createElement('a');
    removebtn.classList='remove-List';
    removebtn.textContent='X';

    //Create a <li> element
    const li =document.createElement('li');
    li.textContent=List;
    

    //Add the remove button to each tweet
    li.appendChild(removebtn);

    //Add to the list
    listList.appendChild(li);



}