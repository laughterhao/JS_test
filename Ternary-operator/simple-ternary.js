const select = document.querySelector('select');
const html = document.querySelector('html');

select.addEventListener('change',()=>( select.value === 'black') ? update('black','white') : update('white','black'));

function update (bgColor,textColor) {
  html.style.backgroundColor = bgColor ;
  html.style.color = textColor;
}
