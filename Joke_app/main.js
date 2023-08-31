//取得html 的值
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
let storyText = '今天气温 34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。';

let insertX = ['怪兽威利', '大老爹', '圣诞老人'];
let insertY = ['肯德基', '迪士尼乐园', '白宫'];
let insertZ = ['自燃了', '在人行道化成了一坨泥', '变成一条鼻涕虫爬走了'];
//在Array 隨機取值
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
//點擊按鈕 執行result()
randomize.addEventListener('click', result);

function result() {
  //把storyText 生成為 newStory這個變數
    let newStory = storyText;
    // 所有陣列透過randomValueFromArray 隨機取得一個變數
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    //透過replace把文中:inserta:,:insertb:,:insertc: 取代新生成的變數 ;由於replace 只會取一個值 所以':inserta:'需要再多呼叫一次
    newStory = newStory.replace(':inserta:',xItem);
    newStory = newStory.replace(':insertb:',yItem);
    newStory = newStory.replace(':insertc:',zItem);
    newStory = newStory.replace(':inserta:',xItem);
    //當input.value有值 需要變更名稱
  if (customName.value !== '') {
    //取得input.value值
    let name = customName.value;
    //透過replace 把文中李雷改變 input.value
    newStory = newStory.replace('李雷',name);
  }
  //把溫度改成攝氏或華氏溫度
  if (document.getElementById("american").checked) {
    let weight = Math.round(300/14)+'stone';
    let temperature = Math.round(((94-32)*5)/9)+ 'centigrade';

    newStory = newStory.replace('34 摄氏度' , weight);
    newStory = newStory.replace('34 摄氏度' , temperature);
  }
  //把內容變成newStory
  story.textContent = newStory;
  //讓內容的背景顏色變為黃色
  story.style.visibility = 'visible';
}

