const select = document.querySelector('select');
const para = document.querySelector('p');

select.onchange = setWeather;

function setWeather () {
  //把選單上所選的值,放入choice 以便為了做switch的判斷
  const choice = select.value;

  switch (choice){
    case 'sunny':
      //要注意 textContent 的大小寫,寫錯會導致畫面會出不來
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      //每一個case 結尾都需要 break; 做END
      break;
    case 'rainy':
      para.textContent = `Rain is falling outside; take a rain coat and a brolly, and don't stay out for too long.`;
      break;
    case 'snowing':
    para.textContent = `The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.`;
    break;
    case 'overcast':
      para.textContent = `It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.`;
      break;
     //當都沒值可以判斷 會傳回空值
    default:
      para.textContent = '';
  }
}
