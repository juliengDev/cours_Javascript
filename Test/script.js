let btn = document.querySelector('.btn');
let p = document.querySelector('.text')

btn.addEventListener('click', () => {
    
    let element = document.createElement('div');
    element.textContent = 'Coucou fdp';
    p.appendChild(element)    
    

})