const qrImgs = document.querySelectorAll('.qr-code img');
const doc = document.querySelector('.wrapper');
const headerHelp = document.querySelector('header')




qrImgs.forEach(i => {
    i.addEventListener('mouseover', () => {
        if (document.querySelector(".modal-wrapper") == null) {
            let modalWrapper = document.createElement('div');
            let modalWindow = document.createElement('div');
            modalWrapper.className = "modal-wrapper";
            modalWindow.className = "modal"
            document.body.append(modalWrapper);
            modalWrapper.append(modalWindow);
            headerHelp.style.position = 'initial';
        } 
    });
});

// qrImgs.forEach(i => {
//     i.addEventListener('mouseout', (e) => {
//         div.remove()
//     });
// });