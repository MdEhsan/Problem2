const input = document.querySelector('.input');
// const plusBtn = document.querySelector('#plus-btn');
// const minusBtn = document.querySelector('#minus-btn');
const redBtn = document.querySelector('#red-btn')
const greenBtn = document.querySelector('#green-btn')
const blueBtn = document.querySelector('#blue-btn')



function change(){
    return input.style.color = 'red';
}


redBtn.addEventListener('click' , change)