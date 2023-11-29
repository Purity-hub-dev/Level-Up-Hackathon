// set event listener to notification

const notifyBell = document.querySelector(".bell-btn");
const notifyBellMenu = document.querySelector(".alert-container");

notifyBell.addEventListener("click", function () {
  notifyBellMenu.classList.toggle("showAlert");
});

function toggleButon(){

  const expanded = notifyBellMenu.getAttribute("aria-expanded") === "true";
      notifyBellMenu.hidden = !notifyBellMenu.hidden;
      notifyBellMenu.setAttribute("aria-expanded", String(!expanded));
}
// set event listener to store topbar menu

const dctopBar = document.querySelector(".img-container");
const topBarMenu = document.querySelector(".userInfo");
const topBarItems = Array.from(topBarMenu.children);
let active = -1;

dctopBar.addEventListener("click", function () {
  topBarMenu.classList.toggle("showInfo");
});

// code for keyboard accessiblity
document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "ArrowDown") {
    if (active < topBarItems.length - 1) {
      active++;
      topBarItems[active].focus();
    }
  } else if (e.key === "ArrowUp") {
    if (active < topBarItems.length - 1) {
      active--;
      topBarItems[active].focus();
    }
    // topBarItems[active].focus();
  }
});
// topBarItems.forEach(function (item) {
//   item.addEventListener("click", function () {
//     topBarMenu.classList.remove("showInfo");
//   });
// });

// function screen recorder accessiblity

// set event listener to modal popup

window.addEventListener("DOMContentLoaded", modalContainer());

function modalContainer() {
  const Modal = document.querySelector("section .popup-modal");

  if (Modal.style.display === "none" || Modal.style.display === "") {
    Modal.style.display = "flex";
  }
}

// set event listener to modal toggle exit

const modalToggle = document.querySelector(".modal-option");

modalToggle.addEventListener("click", () => {
  const trialPopupModal = document.querySelector(".popup-modal");
  trialPopupModal.style.display = "none";
});

// close guide

const closeGuide = document.querySelector("button .close-guide");
const openGuide = document.querySelector("button .open-guide");

let result = -1;

let isExpanded = closeGuide.getAttribute["aria-expanded"];

closeGuide.addEventListener("click", function () {
  const articles = document.querySelectorAll(".article-container");
  // console.log(articles);
  articles.forEach(function (article) {
    closeGuide.classList.add("invisible");
    openGuide.classList.remove("invisible");
    article.style.display = "block";

    if (isExpanded === "true") {
      // closeGuide.ariaExpanded = "false"
      closeGuide.setAttribute("aria-expanded", "false");
      isExpanded === "true";

      console.log(closeGuide.setAttribute);
    } else {
      // closeGuide.ariaExpanded = "true";
      closeGuide.setAttribute("aria-expanded", "true");
      isExpanded === "true";
    }
  });
});

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  const articleContainer = document.querySelector(".article-container");
  const articleContainerMenu = articleContainer.children;
  if (e.key === "ArrowDown") {
    if (result < articleContainerMenu.length - 1) {
      result++;
      articleContainerMenu[result].focus();
      // articleContainerMenu[result].scrollIntoView
    }
  } else if (e.key === "ArrowUp") {
    if (result > 0) {
      result--;
      articleContainerMenu[result].focus();
    }
  }
});
// open guide

// const storeContainer = document.querySelector(".store-wrapper");

openGuide.addEventListener("click", () => {
  const articles = document.querySelectorAll(".article-container");
  articles.forEach((article) => {
    openGuide.classList.add("invisible");
    closeGuide.classList.remove("invisible");
    article.style.display = "none";
  });
});

document.addEventListener("keydown", function (event) {
  const articles = document.querySelectorAll(".article-container");

  let currentIndex = 0;

  function keypress(event) {
    if (event.key === "enter") {
      const checkbox = articles[currentIndex].querySelector(".customize-theme");
      checkbox.checked = !checkbox.checked;
    } else if (event.key === "ArrowUp" && currentIndex > 0) {
      currentIndex--;
      articles[currentIndex].focus();
    } else if (
      event.key === "ArrowDown" &&
      currentIndex < articles.length - 1
    ) {
      currentIndex++;
      articles[currentIndex].focus();
    }
  }
  articles.forEach((article) => {
    article.addEventListener("focus", function () {
      // currentIndex = index;
    });
  });
  console.log(keypress);
});

// dispay article / checkbox checked

const articles = document.querySelectorAll(".article-container");
const progressCounter = document.querySelector(".progress-counter");
const progressBar = document.querySelector(".progress");
const checkBoxStatus = document.querySelector("#checkbox-mode");

const checkboxButton = "";

articles.forEach((article) => {
  const firstSvg = article.querySelector(".first-svg");
  const secondSvg = article.querySelector(".second-svg");
  const thirdSvg = article.querySelector(".third-svg");
  const checkbox = article.querySelector(".customize-theme");
  const displayContent = article.querySelector(
    ".article-container .article-flex-container"
  );

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      firstSvg.style.display = "none";
      secondSvg.style.display = "block";
      secondSvg.classList.add("rotate-second-svg");
      article.classList.add("containerBg");
      displayContent.style.display = "flex";

      // checkBoxStatus.ariaLabel = "In Proggress. Please wait...";
      checkBoxStatus.setAttribute("aria-label", "In Proggress. Please wait...");

      setTimeout(() => {
        secondSvg.style.display = "none";
        thirdSvg.style.display = "block";

        // checkboxButton.ariaLabel = checkbox.ariaLabel.replace(
        //     "checked",
        //     "notChecked"
        //   );
        // }, 1000);
        checkboxButton
          .setAttribute("aria-abel")
          .replace("checked", "notChecked");
      }, 1000);

      checkBoxStatus.ariaLabel = "Successfully checkbox checked";
    } else {
      secondSvg.style.display = "block";
      thirdSvg.style.display = "none";
      article.classList.remove("containerBg");
      displayContent.style.display = "none";

      // checkBoxStatus.ariaLabel = "In Proggress. Please wait...";
      checkBoxStatus.setAttribute("aria-label", "In Proggress. Please wait...");

      setTimeout(() => {
        secondSvg.style.display = "none";
        firstSvg.style.display = "block";

        //     checkboxButton.ariaLabel = checkbox.ariaabel.replace(
        //       "notChecked",
        //       "checked"
        //     );
        //   }, 1000);
        // }
        // checkBoxStatus.ariaLabel = "Successfully checkbox notChecked";
        checkboxButton
          .setAttribute("aria-label")
          .replace("notChecked", "checked");
      }, 1000);
    }
    checkBoxStatus.setAttribute(
      "ariaLabel",
      "Successfully checkbox notChecked"
    );

    // close previously checked container

    articles.forEach(function (item) {
      if (item !== article) {
        const previouslyChecked = item.querySelector(
          ".article-container .article-flex-container"
        );
        previouslyChecked.style.display = "none";
        item.classList.remove("containerBg");
      }
    });

    // progress bar

    const progressBar = document.querySelector(".progress");
    updateProgressBar();
    function updateProgressBar() {
      const checkedCheckboxes = document.querySelectorAll(
        ".customize-theme:checked"
      ).length;
      const allCheckboxes =
        document.querySelectorAll(".customize-theme").length;
      const overallProgress = (checkedCheckboxes / allCheckboxes) * 100;
      progressBar.style.width = overallProgress + "%";

      progressCounter.textContent = `${checkedCheckboxes} / ${allCheckboxes} completed`;
    }
  });
});

//heading listening to event of click

const articleContainer = document.querySelectorAll(".article-container");
articleContainer.forEach(function (article) {
  const articleHeading = article.querySelector(".article-heading");

  articleHeading.addEventListener("click", function () {
    const articleFlexContainer = article.querySelector(
      ".article-flex-container"
    );
    if (articleFlexContainer.style.display === "flex") {
      articleFlexContainer.style.display = "none";
      article.classList.remove("containerBg");
    } else {
      articleFlexContainer.style.display = "flex";
      article.classList.add("containerBg");
    }
    //close previously clicked heading

    articles.forEach(function (item) {
      if (item !== article) {
        const otherflexContainer = item.querySelector(
          ".article-flex-container"
        );
        otherflexContainer.style.display = "none";
        item.classList.remove("containerBg");
      }
    });
  });
});
