const arrows = document.querySelectorAll(".button-box img");

arrows.forEach((arrow, index) => {
  arrow.style.animationDelay = `${index * 0.12}s`;
});