const el = document.querySelector('#welcome');
const text = "Seja bem-vindo ao meu portfólio!"
const interval = 100;
const img = document.querySelector('.img-projeto');

const buttonMenu = document.querySelector('.button-menu');
const navbar = document.querySelector('.navbar-box');

const btnNavLinks = document.querySelector('.btn-nav-links')

const showText = (el, text, interval) => {
    
    const char = text.split("").reverse();
    
    const typer = setInterval(() => {
        if(!char.length) {
            return clearInterval(typer);
        }
        const next = char.pop();
        
        el.innerHTML += next;
    }, interval)
    
}

buttonMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');

})

btnNavLinks.addEventListener('click', () => {
    navbar.classList.remove('active')
}) 



showText(el, text, interval);

