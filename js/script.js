const cora = document.getElementById('cora');
const boxMessage = document.getElementById('box-message');
const message = document.getElementById('message');
const btnClose = document.getElementById('btn-close');

cora.addEventListener('click', () =>{
    message.textContent = 'Te Amu <3';
    boxMessage.classList.add('active');
    btnClose.classList.add('active');
})

btnClose.addEventListener('click', () =>{
    boxMessage.classList.remove('active');
    btnClose.classList.remove('active');
})