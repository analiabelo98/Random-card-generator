/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".number").innerHTML = generateRandomNumber();
};

function generateRandomNumber() {
  let array = ["8", "3", "Q", "K", "J", "A", "1", "2", "4", "5", "6", "7", "9"];
  let numberIndex = Math.floor(Math.random() * array.length);

  return array[numberIndex];
}

function generateRandomSuit() {
  let suits = ["heart", "spade", "diamond", "club"];
  let suitsIndex = Math.floor(Math.random() * suits.length);

  return suits[suitsIndex];
}
