// 정의

const form = document.querySelector(".js-form"),
  input = document.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_ON = "showing";

// 개요

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();

// (1-1)등록이 안되어 있어 입력창을 보이게 해 이름 묻고
function askForName() {
  form.classList.add(SHOWING_ON);
  form.addEventListener("submit", handleSubmit);
}

// (1-2)이름을 입력하면 환영문자를 띄우고
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);

  // (1-3)입력된 이름을 localStorage에 저장한다.
  saveName(currentValue);
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

// (2)등록이 되어 있으면 환영문자 띄우기
function paintGreeting(text) {
  form.classList.remove(SHOWING_ON);
  greeting.classList.add(SHOWING_ON);
  greeting.innerText = `hello ${text}`;
}
/* form입력창을 안보이게 하고
greeting h4를 보이게 한다
greeting의 내용은 `hello (currentUser)`가 된다. */
