// Theme 1

function theme1() {
  document.body.style.backgroundColor = "var(--theme1-main)";
  document.body.style.color = "var(--theme1-text)";

  var rootBackgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--theme1-button");

  var rootColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--theme1-button"
  );

  var anchors = document.querySelectorAll("a");
  var buttons = document.querySelectorAll("button");
  var cards = document.querySelectorAll(".card");

  anchors.forEach(function (anchor) {
    anchor.style.color = rootColor;
  });

  buttons.forEach(function (button) {
    button.style.backgroundColor = rootBackgroundColor;
  });

  cards.forEach(function (card) {
    card.style.backgroundColor = rootBackgroundColor;
  });
}

// Theme 2

function theme2() {
  document.body.style.backgroundColor = "var(--theme2-main)";
  document.body.style.color = "var(--theme2-text)";

  var rootBackgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--theme2-button");

  var rootColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--theme2-button"
  );

  var anchors = document.querySelectorAll("a");
  var buttons = document.querySelectorAll("button");
  var cards = document.querySelectorAll(".card");

  anchors.forEach(function (anchor) {
    anchor.style.color = rootColor;
  });

  buttons.forEach(function (button) {
    button.style.backgroundColor = rootBackgroundColor;
  });

  cards.forEach(function (card) {
    card.style.backgroundColor = rootBackgroundColor;
  });
}

// Theme 3
function theme3() {
  document.body.style.backgroundColor = "var(--theme3-main)";
  document.body.style.color = "var(--theme3-text)";

  var rootBackgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--theme3-button");

  var rootColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--theme3-button"
  );

  var anchors = document.querySelectorAll("a");
  var buttons = document.querySelectorAll("button");
  var cards = document.querySelectorAll(".card");

  anchors.forEach(function (anchor) {
    anchor.style.color = rootColor;
  });

  buttons.forEach(function (button) {
    button.style.backgroundColor = rootBackgroundColor;
  });

  cards.forEach(function (card) {
    card.style.backgroundColor = rootBackgroundColor;
  });
}

function loadTheme() {
  if (localStorage.getItem("theme") === "theme2") {
    theme2();
  } else if (localStorage.getItem("theme") === "theme3") {
    theme3();
  } else {
    theme1();
  }
}

loadTheme();
