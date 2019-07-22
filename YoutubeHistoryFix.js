shits = ["Gangnam", "Peppa Wutz", "Peppa Pig Wutz", "Peppa Pig Nederlands", "Deutsch", "Español",
  "Kinder Joy", "Surprise Egg"]

// https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane
var cyrylic = /[\u0400-\u04FF]/;
var arabic = /[\u0600-\u06FF]/;
var german = /\u00dc|\u00c4|\u00d6|\u00fc|\u00e4|\u00f6|\u00df/;
var cjk = /[\u2E80-\u9FFF]/; //Chinese, Japanese and Korean

// https://www.w3schools.com/cssref/css_selectors.asp
//elems = document.querySelectorAll("#title-wrapper");
elems = document.querySelectorAll("#contents > ytd-video-renderer")
elems.forEach((elem) => {
  title = elem.querySelector("#video-title").title;
  button = elem.querySelector("button");
  isShit = shits.some((s) => {return title.toUpperCase().includes(s.toUpperCase());})
  if (isShit || cyrylic.test(title) || arabic.test(title) || german.test(title) || cjk.test(title)) {
    button.click();
	console.log(title);
  }
});
