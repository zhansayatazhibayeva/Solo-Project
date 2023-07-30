const txt = document.getElementById('showtext');
const out1 = document.getElementById('output1');
const out2 = document.getElementById('output2');
const out3 = document.getElementById('output3');
const out4 = document.getElementById('output4');
const out5 = document.getElementById('output5');
const out6 = document.getElementById('output6');
const out7 = document.getElementById('output7');
const out8 = document.getElementById('output8');
const fontName1 = document.getElementById('fontName1'); 
const fontName2 = document.getElementById('fontName2');
const fontName3 = document.getElementById('fontName3');
const fontName4 = document.getElementById('fontName4');
const fontName5 = document.getElementById('fontName5');
const fontName6 = document.getElementById('fontName6');
const fontName7 = document.getElementById('fontName7');
const fontName8 = document.getElementById('fontName8'); 

const thirdBox = document.getElementById('font-size');
const navBox = document.getElementById('changeNavColor');

function rearrangeCards() {
    const cardsContainer = document.querySelector('.cards');
    const cards = document.querySelectorAll('.card');

    const rearrangeButton = document.getElementById('rearrange-cards');
    const isRearrangeMode = cardsContainer.classList.toggle('rearrange-mode');

    if (isRearrangeMode) {
        cardsContainer.style.gridTemplateColumns = '1fr'; 
    } else {
        cardsContainer.style.gridTemplateColumns = 'repeat(auto-fill,minmax(300px,1fr))';
    }
}

function reloadPage() {
   location.reload();
}

function changecolor(color,textcolor) {
    document.body.style.backgroundColor = color;
    txt.style.backgroundColor = color;
    txt.style.color = textcolor;
    thirdBox.style.backgroundColor = color;
    thirdBox.style.color = textcolor;
    navBox.style.backgroundColor = color;
    navBox.style.color = textcolor;
    fontName1.style.color = textcolor;
    fontName2.style.color = textcolor;
    fontName3.style.color = textcolor;
    fontName4.style.color = textcolor;
    fontName5.style.color = textcolor;
    fontName6.style.color = textcolor;
    fontName7.style.color = textcolor;
    fontName8.style.color = textcolor;

    out1.style.color = textcolor;
    out2.style.color = textcolor;
    out3.style.color = textcolor;
    out4.style.color = textcolor;
    out5.style.color = textcolor;
    out6.style.color = textcolor;
    out7.style.color = textcolor;
    out8.style.color = textcolor;
  }

function f1(e){
    let value = e.value;
    out1.style.fontSize = value + "px";
    out2.style.fontSize = value + "px";
    out3.style.fontSize = value + "px";
    out4.style.fontSize = value + "px";
    out5.style.fontSize = value + "px";
    out6.style.fontSize = value + "px";
    out7.style.fontSize = value + "px";
    out8.style.fontSize = value + "px";
}

txt.addEventListener('input',function(){
    const enteredText = txt.value;
    out1.textContent = enteredText;
});
txt.addEventListener('input',function(){
    const enteredText = txt.value;
    out2.textContent = enteredText;
});  
txt.addEventListener('input',function(){
    const enteredText = txt.value;
    out3.textContent = enteredText;
});  
txt.addEventListener('input',function(){
    const enteredText = txt.value;
    out4.textContent = enteredText;
});  
txt.addEventListener('input',function(){
    const enteredText = txt.value;
    out5.textContent = enteredText;
});  
txt.addEventListener('input',function(){
    const enteredText = txt.value;
    out6.textContent = enteredText;
});  
txt.addEventListener('input',function(){
    const enteredText = txt.value;
    out7.textContent = enteredText;
});  
txt.addEventListener('input',function(){
    const enteredText = txt.value;
    out8.textContent = enteredText;
});  