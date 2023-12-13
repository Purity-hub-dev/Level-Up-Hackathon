// set event listener to notification

const notifyBell = document.querySelector(".bell-btn");
const notifyBellMenu = document.querySelector(".alert-container");
const allNotifyBellMenuItems = notifyBellMenu.querySelectorAll(
  '[role="menu-items"]'
);
console.log(allNotifyBellMenuItems);

notifyBell.addEventListener("click", toggleButon);

function toggleButon() {
  notifyBellMenu.classList.toggle("showAlert");

  const isExpanded = notifyBell.attributes["aria-expanded"].value === "true";

  if (isExpanded) {
    closeBtn();
  } else {
    openBtn();
  }
}

function handleNotifyArrowKeyPress(event, notifyItemIndex) {
  const lastNotifyItem = notifyItemIndex === allNotifyBellMenuItems.length - 1;
  const firstNotifyItem = notifyItemIndex === 0;

  const nextNotifyItem = allNotifyBellMenuItems.item(notifyItemIndex + 1);
  const previusNotifyItem = allNotifyBellMenuItems.item(notifyItemIndex - 1);

  if (event.key === "ArrowDown" || event.key === "ArrowRight") {
    if (lastNotifyItem) {
      allNotifyBellMenuItems.item(0).focus();

      return;
    }
    nextNotifyItem.focus();
  }

  if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
    if (firstNotifyItem) {
      allNotifyBellMenuItems.item(allNotifyBellMenuItems.length - 1).focus();

      return;
    }
    previusNotifyItem.focus();
  }
}

function openBtn() {
  notifyBell.isExpanded === "true";
  allNotifyBellMenuItems.item(0).focus();

  notifyBellMenu.addEventListener("keyup", handleNotifyEscapeKeyPress);

  allNotifyBellMenuItems.forEach(function (notifyItem, notifyItemIndex) {
    notifyItem.addEventListener("keyup", function (event) {
      handleNotifyArrowKeyPress(event, notifyItemIndex);
    });
  });
}

function handleNotifyEscapeKeyPress(event) {
  if (event.key === "Escape") {
    toggleButon();
  }
}

function closeBtn() {
  notifyBell.isExpanded === "false";
  notifyBell.focus();
}

// // set event listener to store topbar menu

const dctopBar = document.querySelector(".img-container");
const topBarMenu = document.querySelector(".userInfo");

const allMenuItems = topBarMenu.querySelectorAll('[role="menu-items"]');

dctopBar.addEventListener("click", toggleMenu);

//listening to arrow key press

function handleArrowKeyPress(event, menuItemIndex) {
  const lastMenuItem = menuItemIndex === allMenuItems.length - 1;
  const firstMenuItem = menuItemIndex === 0;

  const nextMenuItem = allMenuItems.item(menuItemIndex + 1);
  const previousMenuItem = allMenuItems.item(menuItemIndex - 1);

  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    if (lastMenuItem) {
      allMenuItems.item(0).focus();

      return;
    }
    nextMenuItem.focus();
  }

  if (event.key == "ArrowLeft" || event.key == "ArrowUp") {
    if (firstMenuItem) {
      allMenuItems.item(allMenuItems.length - 1).focus();

      return;
    }
    previousMenuItem.focus();
  }
}

function openMenu() {
  dctopBar.ariaExpanded = "true";

  allMenuItems.item(0).focus();

  // listening to escape key if opened

  topBarMenu.addEventListener("keyup", handleEscapeKeyPress);

  allMenuItems.forEach(function (menuItem, menuItemIndex) {
    menuItem.addEventListener("keyup", function (event) {
      handleArrowKeyPress(event, menuItemIndex);
    });
  });
}

//function to key up listening

function handleEscapeKeyPress(event) {
  if (event.key === "Escape") {
    toggleMenu();
  }
}

function closeMenu() {
  dctopBar.ariaExpanded = "false";
  dctopBar.focus();
}

function toggleMenu() {
  const isExpanded = dctopBar.attributes["aria-expanded"].value === "true";

  topBarMenu.classList.toggle("showInfo");

  if (isExpanded) {
    closeMenu();
  } else {
    openMenu();
  }
}

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

function handleArticleArrowKeyPress(event, articleItemIndex) {
  const articlesGeneral_Container = document.querySelectorAll(
    ".article-generalContainer"
  );
  const allArticleHeadingItems = articlesGeneral_Container.querySelectorAll(
    '[role="container-item"]'
  );

  const lastArticleItem =
    articleItemIndex === allArticleHeadingItems.length - 1;
  const firstArticleItem = articleItemIndex === 0;

  const nextArticleItem = articleItemIndex.item(
    allArticleHeadingItems.length + 1
  );
  const previousArticleItem = allArticleHeadingItems.item(
    allArticleHeadingItems.length - 1
  );

  if (event.key === "ArrowDown" || event.key === "ArrowRight") {
    if (lastArticleItem) {
      allArticleHeadingItems.item(0).focus();

      return;
    }
    nextArticleItem.focus();
  }

  if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
    if (firstArticleItem) {
      allArticleHeadingItems.item(allArticleHeadingItems.length - 1).focus();

      return;
    }
    previousArticleItem.focus();
  }
}

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

  closeGuide.addEventListener("keyup", function(event){
    handleArticleArrowKeyPress(event, articleItemIndex)

  })
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
  const customize_theme = document.querySelector(".customize-theme");

  let currentIndex = 0;

  function keypress(event) {
    if (event.key === "enter") {
      const checkbox = articles[currentIndex].customize_theme;
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

// import React from "react";
// import ReactDOM from "react-dom";

// const roolElement = document.getElementById("root");

// let counter = 0;
// const handleClickEvent = () =>{
//   counter++;
//   console.log("counter", counter)
//   renderContent();
// };

// const content = () =>{
//   <div>
//     <button onClick={counter}>Clish to increase the number</button>
//     <p>The counter is on {counter}</p>
//   </div>

// };

// ReactDOM.render(content, roolElement);

// const renderContent = () =>{
//   const content = () =>{
//     <div>
//       <button onClick={counter}>Clish to increase the number</button>
//       <p>The counter is on {counter}</p>
//     </div>

//   };

//   ReactDOM.render(content, roolElement);

// }
// renderContent()
