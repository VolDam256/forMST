var menu_list_element = document.querySelectorAll(".menu__element");
var menu_line = document.querySelector(".menu__line");
var main = document.querySelectorAll(".divmain");

var asidemenu__link = document.querySelectorAll(".aside-menu__link");
var description__semitext = document.querySelectorAll(
  ".description__semi-text"
);
var description__item = document.querySelectorAll(".description__item");
var description__navigacia = document.querySelector(".description__navigacia");
var picture__slaider = document.querySelectorAll(".picture__slaider");

var whataname = 0;

for (var i = 0; i < asidemenu__link.length; i++) {
  listremove(asidemenu__link[i], i);
}

var e = document.createElement("a");
e.href = "#";
e.textContent = "...";
e.classList.add("blackbox");

asidemenu__link[0].classList.remove("aside-menu__link");
asidemenu__link[0].classList.add("aside-menu__link--active");

description__item[0].classList.remove("description__item");
description__item[0].classList.add("description__item--active");

picture__slaider[5].classList.remove("picture__slaider");
picture__slaider[5].classList.add("picture__slaider--active");

addblackbox(description__semitext, 0);

function addblackbox(text, nomer) {
  var text_new = text[nomer].textContent;
  var forslice;
  while (text_new.length > 160) {
    text_new = text_new.trim();
    forslice = text_new.lastIndexOf(" ");
    text_new = text_new.slice(0, forslice);
  }
  description__semitext[nomer].textContent = text_new;
  description__semitext[nomer].appendChild(e);
}

function listremove(string, nomer) {
  string.onmouseover = function () {
    string.classList.remove("aside-menu__link");
    string.classList.add("aside-menu__link--hover");
  };

  string.onmouseout = function () {
    string.classList.remove("aside-menu__link--hover");
    string.classList.add("aside-menu__link");
  };

  string.onclick = function () {
    if (nomer != whataname) {
      /*лИНИЯ*/
      asidemenu__link[whataname].classList.remove("aside-menu__link--active");
      asidemenu__link[whataname].classList.add("aside-menu__link");
      /*тЕКСТ И ЛИНИЯ*/
      string.classList.remove("aside-menu__link");
      string.classList.add("aside-menu__link--active");
      //description_content[nomer].classList.add("description_content_active");

      /*бЛОК*/
      description__item[whataname].classList.remove(
        "description__item--active"
      );
      description__item[whataname].classList.add("description__item");
      description__item[nomer].classList.remove("description__item");
      description__item[nomer].classList.add("description__item--active");
      var navi = nomer + 1;
      description__navigacia.textContent = navi + "/6";
      /*кАРТИНКА*/
      picture__slaider[5 - whataname].classList.remove(
        "picture__slaider--active"
      );
      picture__slaider[5 - whataname].classList.add("picture__slaider");
      picture__slaider[5 - nomer].classList.remove("picture__slaider--active");
      picture__slaider[5 - nomer].classList.remove("picture__slaider--active");
      picture__slaider[5 - nomer].classList.add("picture__slaider--active");

      /* Текст */
      addblackbox(description__semitext, nomer);

      whataname = nomer;
    }
  };
}

var whereLine = 0;
visibleAddiRemove(0);
repit();
function repit() {
  for (var i = 0; i < menu_list_element.length; i++) {
    navedenie(menu_list_element[i], i);
    otvedenie(menu_list_element[i]);
    click(menu_list_element[i], i);
  }
}

function visibleAddiRemove(kuda) {
  main[whereLine].classList.remove("divmain--active");
  main[whereLine].classList.add("divmain");
  main[kuda].classList.remove("divmain");
  main[kuda].classList.add("divmain--active");
  if (kuda == 0) {
    main[kuda].style.backgroundColor = "#ffffff";
  } else {
    main[kuda].style.backgroundColor = "#F0F0F0";
  }
  whereLine = kuda;
  repit();
}

function rashirenie(width, pozicia) {
  var newwidth = width / 100;
  var newmargin = width / 2 - 50 + pozicia;
  menu_line.style.transform =
    "translateX(" + newmargin + "px)" + "scaleX(" + newwidth + ")";
}

function click(element, nomer) {
  element.onclick = function () {
    if (nomer == 0) {
      rashirenie(100, 0);
      visibleAddiRemove(0);
      whereLine = nomer;
    }

    if (nomer == 1) {
      rashirenie(110, 145);
      visibleAddiRemove(1);
      whereLine = nomer;
    }

    if (nomer == 2) {
      rashirenie(90, 295);
      visibleAddiRemove(2);
      whereLine = nomer;
    }

    if (nomer == 3) {
      rashirenie(135, 430);
      visibleAddiRemove(3);
      whereLine = nomer;
    }
  };
}

function otvedenie(element) {
  if (whereLine == 0) {
    element.onmouseout = function () {
      rashirenie(100, 0);
    };
  }
  if (whereLine == 1) {
    element.onmouseout = function () {
      rashirenie(110, 145);
    };
  }
  if (whereLine == 2) {
    element.onmouseout = function () {
      rashirenie(90, 295);
    };
  }
  if (whereLine == 3) {
    element.onmouseout = function () {
      rashirenie(135, 430);
    };
  }
}

function navedenie(element, nomer) {
  if (whereLine == 0) {
    if (nomer == 0) {
      element.onmouseover = function () {
        rashirenie(100, 0);
      };
    }
    if (nomer == 1) {
      element.onmouseover = function () {
        rashirenie(255, 0);
      };
    }

    if (nomer == 2) {
      element.onmouseover = function () {
        rashirenie(385, 0);
      };
    }

    if (nomer == 3) {
      element.onmouseover = function () {
        rashirenie(565, 0);
      };
    }
  }

  if (whereLine == 1) {
    if (nomer == 0) {
      element.onmouseover = function () {
        rashirenie(255, 0);
      };
    }

    if (nomer == 1) {
      element.onmouseover = function () {
        rashirenie(110, 145);
      };
    }

    if (nomer == 2) {
      element.onmouseover = function () {
        rashirenie(240, 145);
      };
    }
    if (nomer == 3) {
      element.onmouseover = function () {
        rashirenie(420, 145);
      };
    }
  }

  if (whereLine == 2) {
    if (nomer == 0) {
      element.onmouseover = function () {
        rashirenie(385, 0);
      };
    }

    if (nomer == 1) {
      element.onmouseover = function () {
        rashirenie(240, 145);
      };
    }

    if (nomer == 2) {
      element.onmouseover = function () {
        rashirenie(90, 295);
      };
    }
    if (nomer == 3) {
      element.onmouseover = function () {
        rashirenie(270, 295);
      };
    }
  }

  if (whereLine == 3) {
    if (nomer == 0) {
      element.onmouseover = function () {
        rashirenie(565, 0);
      };
    }

    if (nomer == 1) {
      element.onmouseover = function () {
        rashirenie(420, 145);
      };
    }

    if (nomer == 2) {
      element.onmouseover = function () {
        rashirenie(270, 295);
      };
    }
    if (nomer == 3) {
      element.onmouseover = function () {
        rashirenie(135, 430);
      };
    }
  }
}
