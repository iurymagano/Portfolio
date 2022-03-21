const el = document.querySelector('#welcome');
const text = "Seja bem-vindo ao meu portfólio!"
const interval = 100;
const img = document.querySelector('.img-projeto');

const buttonMenu = document.querySelector('.button-menu');
const navbar = document.querySelector('.navbar-box');

const btnNavLinks = document.querySelector('.btn-nav-links')

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

const debounce = function(func, wait, emmediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if(!emmediate) func.apply(context, args);
        };
        const callNow = emmediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context,args)
    }
}


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

const animeScroll = () => {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
    target.forEach(function(e) {
        if((windowTop) > e.offsetTop) {
            e.classList.add(animationClass)
        }else {
            e.classList.remove(animationClass)
            
        }
    })
} 

animeScroll();

if(target.length) {
    window.addEventListener('scroll', debounce(() => {
        animeScroll()
    }, 10));
}

showText(el, text, interval);

