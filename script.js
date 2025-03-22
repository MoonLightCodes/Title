const btn = document.querySelector('button');
const root = document.querySelector('body');
const output = document.querySelector('input');
btn.addEventListener('click', () => {
    root.innerHTML = '';
    let t = output.value.trim().toUpperCase().split('').join(' ');
    let p = document.createElement('h1');
    p.innerText = t;
    root.appendChild(p);
});