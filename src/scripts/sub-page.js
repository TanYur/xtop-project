//change footer

const bntBackSubPage = document.querySelector('.btn-back');
const linkedinBtnSubPage = document.querySelector('.sub-page .linkedin');
bntBackSubPage.remove();

const newbtn = bntBackSubPage.outerHTML;
linkedinBtnSubPage.insertAdjacentHTML('beforeBegin', newbtn);


