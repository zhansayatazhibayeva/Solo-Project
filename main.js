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
const ftr = document.getElementById("pageFooter");

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


function changecolor(color, textcolor) {
    document.body.style.backgroundColor = color;
    ftr.style.backgroundColor = color;
    txt.style.backgroundColor = color;
    txt.style.color = textcolor;
    navBox.style.backgroundColor = color;


    document.querySelectorAll('.navbar a').forEach(link => {
        link.style.color = textcolor;
    });

    document.querySelectorAll('.card-heading').forEach(font => {
        font.style.color = textcolor;
    });

    document.querySelectorAll('.output').forEach(output => {
        output.style.color = textcolor;
    });
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