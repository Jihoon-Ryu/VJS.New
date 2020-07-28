/*
-DOM지정 : const 상수이름 = document.getElementById(“id이름”)
or const 상수이름 = document.querySelector(“#id이름” or “.class이름”) : 
#나 . 같은 selector로 지정하기 : 자주 사용됨.
-HTML에 대한 수정 : 상수이름.innerHTML=“” 
-CSS에 대한 수정 : 상수이름.style.(property)=“”
-태그 직접 선택 : document.(태그이름)=“” : 모든 태그에 되는 건 아닌 듯.
*/

const text = document.getElementById("text");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasClass = text.classList.contains(CLICKED_CLASS);
  if (!hasClass) {
    text.classList.add(CLICKED_CLASS);
  } else {
    text.classList.remove(CLICKED_CLASS);
  }
}

function init() {
  text.addEventListener("click", handleClick);
}

init();

window.addEventListener("resize", handle2);

function handle2(event) {
  console.log(event);
}
