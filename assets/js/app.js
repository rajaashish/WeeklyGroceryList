//variables


//Event Listeners
eventListeners();

function eventListeners(){

//Form submission
document.querySelector('#form').addEventListener('submit',newList);
}

//Function
function newList(e){
    e.preventDefault();
    console.log('Form Submitted')

}