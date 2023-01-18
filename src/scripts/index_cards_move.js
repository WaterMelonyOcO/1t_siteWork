let cardPlace = document.querySelector(".cards_Place");
let cnt = parseInt(getComputedStyle(cardPlace).marginLeft);

function leftClick() {
  // console.log(cnt);
  if (cnt > -120) {
    return false;
  } else {
    cardPlace.style.marginLeft = `${(cnt += 300)}px`;
    console.log(cardPlace.style.marginLeft);
  }
}

function rightClick() {
  // console.log(cnt);
  if (cnt < -400) {
    return false;
  } else {
    cardPlace.style.marginLeft = `${(cnt -= 300)}px`;
    console.log(cardPlace.style.marginLeft);
  }
}
