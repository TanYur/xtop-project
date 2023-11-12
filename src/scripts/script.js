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


const bookmark = document.querySelectorAll('.bookmark h3');
const bookmarksActive = document.querySelectorAll('.bookmark h3.active');
const screenWidth = window.screen.width;
const contents = document.querySelectorAll('.content');


if (screenWidth < 767) {
    contents.forEach((i, index) => {
        i.innerHTML = '<h3>' + bookmarksActive[index].innerText + '</h3>' + i.innerHTML
    });   
  
}

bookmark.forEach(i => {

    i.addEventListener('click', e => {
        let elem = e.target;
        // console.log(elem)

        let text = elem.textContent;        
        let parentElem = elem.parentNode;
        let blockGrandElem = parentElem.parentNode.parentNode;
        let idBlockGrandElem = blockGrandElem.id;
        let listTitle = blockGrandElem.querySelectorAll('.chapter .bookmark h3');
        if (!elem.classList.contains('active')) {
            listTitle.forEach(j => j.classList.remove('active'))
            elem.classList.add('active');
        };

        console.log('text ' + text)
        const content = blockGrandElem.querySelector('.content');
        // console.log(content)
        const textTitle = elem.innerText;

        if (screenWidth < 767) {
            content.innerHTML = '<h3>' + textTitle + '</h3>' + data[idBlockGrandElem][text];
        } else content.innerHTML = data[idBlockGrandElem][text];
    })
});






