const el = document.querySelector('#welcome');
const text = "Seja bem-vindo ao meu Portfólio!"
const interval = 200;

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

showText(el, text, interval);