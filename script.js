//selecting class
const colorBtn = document.querySelector('.colorBtn');

//selecting body
const bodyBcg = document.querySelector('body');

//creating array to hold cplors
const colors = ['yellow','red','green','#3b5998'];

colorBtn.addEventListener('click',changeColor);

function changeColor (){

//script below is specifically slecting a color when button is clicekd
//bodyBcg.style.backgroundColor = colors[2];

//script below is selecting random color when button is clicked
let random = Math.floor(Math.random()*colors.length)
bodyBcg.style.backgroundColor = colors[random];
}