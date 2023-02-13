var message;
var chat;
var chat1;
document.getElementById('send').addEventListener('click', ()=>{
    message = document.getElementById('text').value;
    chat = document.createElement('p');
    chat.classList.add('message');
    chat.innerHTML = message;
    document.getElementById('ba').append(chat);
});