//change footer

const bntBackSubPage = document.querySelector('.btn-back');
const linkedinBtnSubPage = document.querySelector('.sub-page .linkedin');
const copyBtns = document.querySelectorAll('.project-help-page li .btn');
bntBackSubPage.remove();

const newbtn = bntBackSubPage.outerHTML;
linkedinBtnSubPage.insertAdjacentHTML('beforeBegin', newbtn);


copyBtns.forEach((i, index) => {
  i.addEventListener('click', function () {
    let parentBtn = document.querySelectorAll('.project-help-page li');    
    var copyText = parentBtn[index].querySelector(".copy-number");    
    const copyBtns = document.querySelectorAll('.project-help-page li .btn');
    copyBtns[index].classList.add('btn-copy');
    copyText.select();
    document.execCommand("copy");
  })
});

copyBtns.forEach((i) => {
  i.onmouseout = function (event) {
    let target = event.target;
    target.classList.remove('btn-copy');
  };
})
copyBtns.forEach((i, index) => {
  i.pointerout = function (event) {
    let target = event.target;
    target.classList.remove('btn-copy');
  };
})
