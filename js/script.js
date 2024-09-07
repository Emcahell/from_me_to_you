const cora = document.getElementById('cora');
const boxMessage = document.getElementById('box-message');
const message = document.getElementById('message');

cora.addEventListener('click', () =>{
    message.textContent = 'Te Amu <3';
    boxMessage.classList.add('active');
})