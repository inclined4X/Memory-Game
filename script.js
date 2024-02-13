const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },

  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },

  {
    name: "hotdog",
    img: "images/hotdog.png",
  },

  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },

  {
    name: "milkshake",
    img: "images/milkshake.png",
  },

  {
    name: "pizza",
    img: "images/pizza.png",
  },

  {
    name: "fries",
    img: "images/fries.png",
  },

  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },

  {
    name: "hotdog",
    img: "images/hotdog.png",
  },

  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },

  {
    name: "milkshake",
    img: "images/milkshake.png",
  },

  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  const cards = document.querySelectorAll("img");
  console.log(cards);
  console.log("check for a match");

  if (optionOneId === optionTwoId) {
    alert("You have clicked the same image");
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert("You found a match");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  }
  cardsChosen = [];
  cardsChosenIds = [];
}

//to get the IDs of the cards anytime it's clicked so that we can link it to the array to display name
function flipCard() {
  console.log(cardArray);
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log(cardsChosen);
  console.log(cardsChosenIds);
  console.log("clicked", cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
