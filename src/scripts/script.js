//header

const darmowa = document.getElementById("darmowa"),
    sticky = darmowa.offsetTop;

window.onscroll = function () {
    scrolldarmowa();
};

function scrolldarmowa() {
    if (window.pageYOffset > sticky) {
        darmowa.classList.add("sticky")
    } else {
        darmowa.classList.remove("sticky");
    }
};

//bookmarks
//add title for mobile
//change logo place

const bookmark = document.querySelectorAll('.bookmark h3');
const bookmarksActive = document.querySelectorAll('.bookmark h3.active');
const screenWidth = window.screen.width;
const contents = document.querySelectorAll('.content');
const logo = document.querySelector('.logo');
const logoTitle = document.querySelector('.main-title h1')
const NewLogo = logo.outerHTML;




if (screenWidth < 767) {
    contents.forEach((i, index) => {
        i.innerHTML = '<h3>' + bookmarksActive[index].innerText + '</h3>' + i.innerHTML
    });
    
    let line = '<div class="line"></div><div class="line"></div><div class="line"></div>';

    logoTitle.insertAdjacentHTML('beforeBegin', NewLogo);
    logo.insertAdjacentHTML('beforeBegin', line);
    logo.remove();
    logoTitle.remove();
}

bookmark.forEach(i => {

    i.addEventListener('click', e => {
        let elem = e.target;

        let text = elem.textContent
        let parentElem = elem.parentNode;
        let blockGrandElem = parentElem.parentNode.parentNode;
        let idBlockGrandElem = blockGrandElem.id;
        let listTitle = blockGrandElem.querySelectorAll('.chapter .bookmark h3');
        if (!elem.classList.contains('active')) {
            listTitle.forEach(j => j.classList.remove('active'))
            elem.classList.add('active');
        };

        const content = blockGrandElem.querySelector('.content');
        const textTitle = elem.innerText;

        if (screenWidth < 767) {
            content.innerHTML = '<h3>' + textTitle + '</h3>' + data[idBlockGrandElem][text];
        } else content.innerHTML = data[idBlockGrandElem][text];
    })
});

//menu
const menuMobile = document.querySelector('.left-side');
// menuMobile.classList = 'someclass';

menuMobile.addEventListener('click', e => {
    let menuMobileList = document.createElement('div');
    
    menuMobileList.className = "menu-mobile";
    menuMobile.append(menuMobileList);
    console.log(menuMobileList);
    let menuContent = 
    `<p><a href="#bubbles">Space</a></p>
    <p><a href="#medicine">Medicine</a></p>
    <p><a href="#ecology">Ecology</a></p>
    <p><a href="#mirror">Technology</a></p>`;
    menuMobileList.insertAdjacentHTML('beforeBegin', menuContent);
});

