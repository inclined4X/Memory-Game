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
const cardsChosen = [];
const cardsChosenIds = [];

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
  const cardsImg = document.querySelectorAll(".img");
  console.log("check for a match");
  if (cardsChosen[0] == cardsChosen[1]) {
    alert("You found a match");
  }
  cardsImg[cardsChosenIds[0]].setAttribute("src", "images/white.png");
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
