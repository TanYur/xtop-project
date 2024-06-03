const cards = document.querySelectorAll('.card-item');

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cards[i].addEventListener('mousemove', startRotate);
    cards[i].addEventListener('mouseout', stopRotate);
}


function startRotate(event) {
    const cardItem =
        this.querySelector('.ncsc-item');
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;
    if (!cardItem.classList.contains('mirror')) {
        cardItem.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 10 + 'deg)rotateY(' + (event
            .offsetX - halfWidth) / 20 + 'deg)';
        cardItem.style.opacity = 1;
        cardItem.style.borderTop = "2px solid #e1e1e1cc";
        cardItem.style.borderLeft = "2px solid #e1e1e1cc";
    }
}

function stopRotate() {
    const cardItem =
        this.querySelector('.ncsc-item');
    cardItem.style.transform = 'rotate(0)';
    cardItem.style.opacity = .8;
    cardItem.style.borderTop = "0";
    cardItem.style.borderLeft = "0";
}

function chessBoard(rows, columns) {
    const array = Array.from({
        length: columns
    }, (e, i) => i % 2 == 0 ? e = '0' : e = 'X');
    return array;
}

chessBoard(6, 4);