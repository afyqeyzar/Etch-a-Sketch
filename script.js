const container = document.querySelector('#container');
//sixteenBtn = document.querySelector('#sixteen');
//sixteenBtn.addEventListener('click', sixteen);

const ROW_WIDTH = 32;

function sixteen() {
    //document.getElementById("sixteen").disabled = true;
    for (let i = 0; i < ROW_WIDTH ** 2; i++){
        const div = document.createElement('div');
        div.classList.add('box');
        container.append(div);
    }
}

sixteen()


const hover = Array.from(document.querySelectorAll('.box'));
hover.forEach(box => box.addEventListener('mouseover', () => {
    box.classList.add('color-box')
}));


function refreshPage(){
    window.location.reload();
} 

clearBtn = document.querySelector('#clear-btn')
clearBtn.addEventListener('click', refreshPage);

