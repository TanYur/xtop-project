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

const bookmark = document.querySelectorAll('.bookmark h3');

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
        content.innerHTML = data[idBlockGrandElem][text];
           
    })
});



