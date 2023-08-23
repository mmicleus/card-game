let imageUrls = [
"angular","angular",
"aurelia","aurelia",
"backbone","backbone",
"ember","ember",
"react","react",
"vue","vue"];

const gridContainer = document.getElementById('container');

let selectedCardCount = 0;
let selectedCards = [];

start();

function start(){

    clearContainer();
    imageUrls = imageUrls.sort(() => Math.random() - .5);

    imageUrls.forEach((url) => {
        
        gridContainer.append(renderCard(url));
    })

}

function clearContainer(){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function handleCardClick(event){

    const card = event.currentTarget;

    if(card.classList.contains('done')) return;

    const cardType = card.dataset.type;

    card.classList.add("show");

    if(selectedCards.length === 1){
        if(cardType === selectedCards[0].dataset.type){
            selectedCards.push(card);
            selectedCards.forEach((item) => {item.classList.add('done')})
            selectedCards = [];
        }
        else{
            selectedCards.push(card);
            setTimeout(()=>{
                selectedCards.forEach((item) => item.classList.remove('show'))
                selectedCards = [];
            },1000);
            
        }
    }
    else{
        selectedCards.push(card);
    } 
}


function renderCard(imageUrl){
    const element = document.createElement('div');
    const url = `Images/${imageUrl}.svg`;
    const imgElement = `<img class="frame" src="${url}">` + '<img class="js" src="Images/js-badge.svg">'

    element.classList.add('item');
    element.dataset.type = imageUrl;
    element.innerHTML = imgElement;

    element.addEventListener('click',handleCardClick);


    return element;
}

