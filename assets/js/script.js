document.querySelector('.menu-opener').addEventListener('click', () => {
    let nav = document.querySelector('header nav'); 
    nav.classList.toggle('opened');
});

const toggleSlider = () => {
    const slides = document.querySelectorAll('input[name=slider]');
    if(slides.length === 0) return;

    let current = document.querySelector('input[name=slider]:checked');
    if(!current) {
        current = slides[0];
        current.checked = true;
    }

    let id = parseInt(current.getAttribute('id').split('-')[1]);
    
    if(id + 1 <= slides.length){
        id++;
    } else {
        id = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].checked = false;
    }
    document.querySelector(`#slider-${id}`).checked = true;
}

setInterval(toggleSlider, 5000)
