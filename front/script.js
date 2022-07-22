document.getElementById('buttonSend');


 document.getElementById('register').style.visibility='hidden';

//show the contact form by clicking on the button "me contacter"
document.getElementById('contactButton').onclick = function showForm() {
 let formShow = document.getElementById('register').style.visibility="visible"
}

//hide the contact form by clicking on the button "cacher le formulaire"
function hideForm() {
    document.getElementById('register').style.visibility='hidden'
}


//send data to the PHP (todo)
function sendForm() {
    document.querySelector("#text").innerHTML="cette fonction est en cours de dveloppement"   
}
document.addEventListener("click",sendForm)