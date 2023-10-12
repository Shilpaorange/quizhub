function applyTheme(mainBgColor, textColor, buttonBgColor, buttonTextColor) {
  document.body.style.backgroundColor = mainBgColor;
  document.body.style.color = textColor;

  var anchors = document.querySelectorAll("a");
  var buttons = document.querySelectorAll("button");
  var cards = document.querySelectorAll(".card");

  anchors.forEach(function (anchor) {
    anchor.style.color = textColor;
  });

  buttons.forEach(function (button) {
    button.style.backgroundColor = buttonBgColor;
    button.style.color = buttonTextColor;
  });

  cards.forEach(function (card) {
    card.style.backgroundColor = buttonBgColor;
  });
}

// Theme 1
function theme1() {
  applyTheme(
    "var(--theme1-main)",
    "var(--theme1-text)",
    "var(--theme1-button)",
    "var(--theme1-main)"
  );
}

// Theme 2
function theme2() {
  applyTheme(
    "var(--theme2-main)",
    "var(--theme2-text)",
    "var(--theme2-button)",
    "var(--theme2-main)"
  );
}

// Theme 3
function theme3() {
  applyTheme(
    "var(--theme3-main)",
    "var(--theme3-text)",
    "var(--theme3-button)",
    "var(--theme3-main)"
  );
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
