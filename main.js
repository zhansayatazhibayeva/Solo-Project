const txt = document.getElementById('showtext');
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

txt.addEventListener('input', function () {
    const enteredText = txt.value;
    document.querySelectorAll('.output').forEach(output => {
        output.textContent = enteredText;
    });
});
