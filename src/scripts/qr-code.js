const doc = document.querySelector('.wrapper'),
    headerHelp = document.querySelector('header'),
    showBtn = document.querySelectorAll('.qr-code');

const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloeBtn = document.querySelector('[data-close]');

function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
};

function closeModal() {
    let modalImg = modal.querySelector('img');
    console.log(modalImg)
    if (modalImg) {
        modalImg.remove();
    }
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
};

modalTrigger.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
        openModal();
        let modaImg = document.querySelector('.modal p');
        console.log(modaImg);
        modaImg.innerHTML = imgQr[i];
        console.log(modaImg);
    });
});

modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
        closeModal();
    }
});


document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
        closeModal();
    }
});