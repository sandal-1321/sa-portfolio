let bar = document.getElementById('bars')
bar.addEventListener('click', () => {
    let nav = document.getElementById('nav-ul')
    let code = document.getElementById('cross')
    if (nav.style.display == 'initial') {
        nav.style = 'display:none';
        code.setAttribute('class', 'fa-solid fa-bars')
    }
    else {
        nav.style = 'display:initial';
        code.setAttribute('class', 'fa-solid fa-xmark')
    }
})