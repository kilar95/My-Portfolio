const wordsCarousel = ['an environmental scientist', 'a problem solver', 'a dreamer'];
const word = $("#carousel-words");
let counter = 0;
let firstRun = "false";

Window.onload = updateWord();
setInterval(updateWord, 1800);

function updateWord() {
  if (firstRun === "false") {
    wordsCarousel.push("a junior web developer");
    firstRun = "true";
  } else {
    word.fadeOut(function () {
      word.html(wordsCarousel[counter]);
      counter++;
      if (counter >= wordsCarousel.length) {
        counter = 0;
     }
      word.fadeIn();
    });
  };
}

