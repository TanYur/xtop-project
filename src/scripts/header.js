const screenWidth1 = window.screen.width;


const logo = document.querySelector('.logo');
// const header = document.querySelector('header');
const wrapper = document.querySelector('.wrapper');
const logoTitle = document.querySelector('.main-title h1');
const NewLogo = logo.outerHTML;



if (screenWidth1 < 767) {  
    
    let line = '<div class="line"><div class="line-item"></div><div class="line-item"></div><div class="line-item"></div></div>';
    const subPageMainTitle = `<div class="logo"><a href='../../index.html'><img src="../img/logo_02.png" alt="xttopbio"></a></div>`
    
    if(logoTitle){
        logoTitle.insertAdjacentHTML('beforeBegin', NewLogo);
        logoTitle.remove();
    } else {
        wrapper.insertAdjacentHTML('afterBegin', subPageMainTitle);
    }
    
    logo.insertAdjacentHTML('beforeBegin', line);
    logo.remove();
    
}

//menu
const menuMobile = document.querySelector('.left-side');
const menu = document.querySelector('.menu');

// menuMobile.classList = 'someclass';

menuMobile.addEventListener('click', e => {   
   
   if(menu.classList.contains('menu-active')){
    menu.classList.remove('menu-active')
   } else menu.classList.add('menu-active');

});

//disappear menu
document.querySelector('body').addEventListener('click', e => {
    let target = e.target;    
    const classNames = ['menu', 'left-side', 'line', 'line-item'];
    const targetClassList = [...target.classList];
   
    if (targetClassList.some(i => classNames.some(j => j == i))) {        
        menu;
    } else {        
        menu.classList.remove('menu-active')
    }   
});
