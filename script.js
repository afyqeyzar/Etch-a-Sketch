const container = document.querySelector('#container');

for (let i = 0; i < 16*16; i++){
    const div = document.createElement('div');
    div.classList.add('box');
    container.append(div);
}

//const hover = Array.from(document.querySelectorAll('.box'));

function changeColor(){
    div.style.cssText = 'background: white;';
}



const hover = Array.from(document.querySelectorAll('.box'));
  hover.forEach(box => box.addEventListener('mouseover', (e) => {
    console.log(e)
  }));




