import { morse } from "./morseData.js";

const input = document.querySelector(".translator__input");
const output = document.querySelector("#translator__output");
const translatorMode = document.querySelector("#translatorMode");

export const englishToMorse = (englishLetters) => {
  if (typeof englishLetters != "string") {
    return "undefined";
  } else if (englishLetters.length == 0) {
    return "Nothing was given";
  } else if (englishLetters.length == 1) {
    for (const key in morse) {
      if (englishLetters.toLowerCase() == key) {
        return morse[key];
      }
    }
  } else if (englishLetters.length > 1) {
    const arrayOfLetters = englishLetters.split("").map((letter) => {
      for (const key in morse) {
        if (letter.toLowerCase() == key) {
          return morse[key];
        }
      }
    });
    return arrayOfLetters.join(" ");
  }
};

export const morseToEnglish = (morseCode) => {
  if (typeof morseCode != "string") {
    return "undefined";
  } else if (morseCode.length == 0) {
    return "Nothing was given";
  } else if (morseCode) {
    const arrayOfLetters = morseCode.split(" ").map((code) => {
      for (const key in morse) {
        if (code == morse[key]) {
          return key;
        }
      }
    });
    return arrayOfLetters.join("");
  }
};

input.addEventListener("input", (event) => {
  translatorMode.value == "english"
    ? (output.innerText = englishToMorse(event.target.value))
    : (output.innerText = morseToEnglish(event.target.value.toLowerCase()));
});
