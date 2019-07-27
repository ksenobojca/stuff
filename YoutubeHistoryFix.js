var shits1 = ["Gangnam",
  "Peppa Wutz", "Peppa Pig Wutz", "Peppa Pig Nederlands",
  "Deutsch", "Espanol", "Portugues",
  "Kinder Joy", "Surprise Egg"]

// https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane
var shits2 = [
  /[\u0400-\u04FF]/, // cyrylic
  /[\u0600-\u06FF]/, // arabic
  /\u00dc|\u00c4|\u00d6|\u00fc|\u00e4|\u00f6|\u00df/, // German
  /[\u2E80-\u9FFF]/ // Chinese, Japanese and Korean
  ];

// https://www.w3schools.com/cssref/css_selectors.asp
// elems = document.querySelectorAll("#title-wrapper");
elems = document.querySelectorAll("#contents > ytd-video-renderer")

elems.forEach((elem) => {
  title = elem.querySelector("#video-title").title;
  button = elem.querySelector("button");
  var isShit1 = shits1.some(s => {return title.toUpperCase().includes(s.toUpperCase());})
  var isShit2 = shits2.some(s => {return s.test(title);})
  if (isShit1 || isShit2) {
    //button.click();
    console.log(title);
  }
});
