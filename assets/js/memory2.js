document.addEventListener('DOMContentLoaded', () => {
    const cardArray  = [
      {name: 'finn', img: 'images/finns.png'},
      {name: 'finn', img: 'images/finns.png'},
      {name: 'edwin', img: 'images/edwins.png'},
      {name: 'edwin', img: 'images/edwins.png'},
      {name: 'gene', img: 'images/genes.png'},
      {name: 'gene', img: 'images/genes.png'},
      {name: 'kush', img: 'images/kushs.png'},
      {name: 'kush', img: 'images/kushs.png'},
      {name: 'luka', img: 'images/lukas.jpg'},
      {name: 'luka', img: 'images/lukas.jpg'},
      {name: 'mortensen', img: 'images/mortensens.png'},
      {name: 'mortensen', img: 'images/mortensens.png'}
    ]

    cardArray.sort(() => 0.5 - Math.random());
  
  

    var tile = document.querySelector('.tile');
    var result = document.querySelector('#score');

    var cardChosen = [];
    var cardChosenId = [];
    var cardsWon = [];
    function createBoard() {

      for (let i = 0; i <cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'images/Playground-Logoss.jpg');
        card.setAttribute('id', i);
        tile.appendChild(card);
        card.addEventListener('click', flipCard);
      }
    }
    function checkForMatch() {
      let cards = document.querySelectorAll('img');
      let first_click = cardChosenId[0];
      let second_click = cardChosenId[1];
      if(cardChosen[0] === cardChosen[1]) {
        
        cardsWon.push(cardChosen);
  
      } else {
        cards[first_click].setAttribute('src', 'images/Playground-Logoss.jpg')
        cards[second_click].setAttribute('src', 'images/Playground-Logoss.jpg')
        }
        result.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2){
          result.textContent = 'Congratulations! You won the game!';
        }
      cardChosen = [];
      cardChosenId = [];
  
    }
    
    function flipCard() {
      var cardId = this.getAttribute('id');
      cardChosen.push(cardArray[cardId].name);
      cardChosenId.push(cardId);
      this.setAttribute('src', cardArray[cardId].img);
      if(cardChosen.length === 2) {
        setTimeout(checkForMatch, 500);
      }
    }
    createBoard();
  })