// set event listener to notification

const notifyBell = document.querySelector(".bell-btn");
const notifyBellMenu = document.querySelector(".alert-container");
const allNotifyBellMenuItems = notifyBellMenu.querySelectorAll(
  '[role="menu-items"]'
);

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

const setUpBtn = document.querySelector("#container-button");
const articleGeneralContainer = document.querySelector(
  ".article-generalContainer"
);

setUpBtn.addEventListener("click", toggleOpen);

function toggleOpen() {
  const isExpanded = setUpBtn.attributes["aria-expanded"].value === "true";

  if (isExpanded) {
    closeSetup();
  } else {
    openSetup();
  }
}

function openSetup() {
  setUpBtn.ariaExpanded = "true";
  articleGeneralContainer.ariaHidden = "false";

  articleGeneralContainer.classList.remove("hide");
  closeGuide.classList.remove("invisible");
  openGuide.classList.add("invisible");
}

function closeSetup() {
  setUpBtn.ariaExpanded = "false";
  articleGeneralContainer.ariaHidden = "true";

  articleGeneralContainer.classList.add("hide");
  closeGuide.classList.add("invisible");
  openGuide.classList.remove("invisible");
}

// update progress bar

let progressCount = 0;

const totalCheckBox = 5;

const progressCounter = document.querySelector(".progress-counter");

console.log(progressCounter);
const progressBar = document.querySelector(".progress");

console.log(progressBar);
const mark_as_done_class = "checkbox-done";

// console.log(mark_as_done_class);

function updateprogressBar() {
  const progressCount = document.querySelectorAll(
    `.checkbox-btn.${mark_as_done_class}`
  ).length;
  console.log(progressCount);

  progressCounter.textContent = progressCount;
  progressBar.style.width = `${(progressCount / totalCheckBox) * 100}%`;
}

const articles = document.querySelectorAll(".article-container");

articles.forEach(function (article) {
  const allCheckboxesBtn = article.querySelectorAll(".checkbox-btn");
  allCheckboxesBtn.forEach(function (checkboxBtn) {
    checkboxBtn.addEventListener("click", function () {
      handle_mark_done_or_not_done(checkboxBtn);
    });
  });
});

function handle_mark_as_done(btn) {
  const checkBoxStatus = btn.parentElement.querySelector(".checkbox-mode");
  const not_completed_icon = btn.parentElement.querySelector(
    ".not_completed_icon"
  );
  const loading_spinner_icon = btn.parentElement.querySelector(
    ".loading_spinner_icon"
  );
  const completed_icon = btn.parentElement.querySelector(".completed_icon");

  not_completed_icon.classList.add("hidden");
  loading_spinner_icon.classList.remove("hidden");

  setTimeout(() => {
    loading_spinner_icon.classList.add("hidden");
    completed_icon.classList.remove("hidden");

    btn.ariaLabel = btn.ariaLabel.replace("as done", "as not done");

    // checkBoxStatus.textContent = "Successfully marked as done";
    btn.classList.add(mark_as_done_class);

    updateprogressBar();
  }, 3000);
}

function handle_mark_as_not_done(btn) {
  const checkBoxStatus = btn.parentElement.querySelector(".checkbox-mode");
  const not_completed_icon = btn.parentElement.querySelector(
    ".not_completed_icon"
  );
  const loading_spinner_icon = btn.parentElement.querySelector(
    ".loading_spinner_icon"
  );
  const completed_icon = btn.parentElement.querySelector(".completed_icon");

  completed_icon.classList.add("hidden");
  loading_spinner_icon.classList.remove("hidden");

  setTimeout(() => {
    loading_spinner_icon.classList.add("hidden");
    not_completed_icon.classList.remove("hidden");

    btn.ariaLabel = btn.ariaLabel.replace("as not done", "as done");

    // checkBoxStatus.textContent = "Successfully marked as not done";
    btn.classList.remove(mark_as_done_class);

    updateprogressBar();
  }, 3000);
}

function handle_mark_done_or_not_done(btn) {
  const markAsDone = btn.classList.contains(mark_as_done_class);
  console.log(markAsDone);

  if (markAsDone) {
    handle_mark_as_not_done(btn);
  } else {
    handle_mark_as_done(btn);
  }
}

const setUpGuideBtn = document.querySelector("#container-button");
const openGuideBtn = document.querySelector(".open-guide");
const setup_heading = document.querySelector(".article-heading");
const checkedBoxBtns = document.querySelectorAll(".checkbox-btn");

setUpGuideBtn.onclick = function () {
  console.log("clicked setUpGuideBtn");
  setup_heading.click();
};

checkedBoxBtns.forEach(function (checkboxBtn) {
  checkboxBtn.addEventListener("click", function () {
    setTimeout(() => {
      checkedBoxBtns.forEach(function (btn, index) {
        if (btn.classList.contains(mark_as_done_class)) {
          let nextItem = btn.closest("article");

          nextItem.nextElementSibling.querySelector(".article-heading").click();
          nextItem.nextElementSibling.querySelector(".checkbox-btn").focus();
        }
      });
    }, 3000);
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
