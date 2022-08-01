const container = document.querySelector('#container');

const ROW_WIDTH = 16

for (let i = 0; i < ROW_WIDTH ** 2; i++){
    const div = document.createElement('div');
    div.classList.add('box');
    container.append(div);
}

const hover = Array.from(document.querySelectorAll('.box'));
hover.forEach(box => box.addEventListener('mouseover', () => {
    box.classList.add('color-box')
}));


