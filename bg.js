const body = document.querySelector("body");

const NUM_image = 3;

function paintImage(randomNumber012) {
  const image = new Image();
  image.src = `VJS.images/${randomNumber012 + 1}.jpg`;
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * NUM_image);
  //0 1 2
  return number;
}

function init() {
  const randomNumber012 = genRandom();
  paintImage(randomNumber012);
}

init();
