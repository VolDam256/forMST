var menu__link = document.querySelectorAll(".menu__link");
var menu_line = document.querySelector(".menu__line");
var main = document.querySelectorAll(".divmain");

var asidemenu__link = document.querySelectorAll(".aside-menu__link");
var description__semitext = document.querySelectorAll(
  ".description__semi-text"
);
var description__item = document.querySelectorAll(".description__item");
var description__navigacia_firstnumber = document.querySelector(
  ".description__navigacia-firstnumber"
);
var picture__slaider = document.querySelectorAll(".picture__slaider");

var whataname = 0;

for (var i = 0; i < asidemenu__link.length; i++) {
  listremove(asidemenu__link[i], i);
}

var e = document.createElement("a");
e.href = "#";
e.textContent = "...";
e.classList.add("description__semi-link");

asidemenu__link[0].classList.add("aside-menu__link--active");

description__item[0].classList.add("description__item--active");

picture__slaider[5].classList.add("picture__slaider--active");

addblackbox(description__semitext, 0);

function addblackbox(text, nomer) {
  var text_new = text[nomer].textContent;
  var forslice;
  while (text_new.length > 130) {
    text_new = text_new.trim();
    forslice = text_new.lastIndexOf(" ");
    text_new = text_new.slice(0, forslice);
  }
  description__semitext[nomer].textContent = text_new;
  description__semitext[nomer].appendChild(e);
}

function listremove(string, nomer) {
  string.onclick = function () {
    if (nomer != whataname) {
      /*лИНИЯ*/
      asidemenu__link[whataname].classList.remove("aside-menu__link--active");
      string.classList.add("aside-menu__link--active");
      //description_content[nomer].classList.add("description_content_active");

      /*бЛОК*/
      description__item[whataname].classList.remove(
        "description__item--active"
      );
      description__item[nomer].classList.add("description__item--active");
      var navi = nomer + 1;
      description__navigacia_firstnumber.textContent = navi;
      /*кАРТИНКА*/
      picture__slaider[5 - whataname].classList.remove(
        "picture__slaider--active"
      );
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
  for (var i = 0; i < menu__link.length; i++) {
    navedenie(menu__link[i], i);
    otvedenie(menu__link[i]);
    click(menu__link[i], i);
  }
}

function visibleAddiRemove(kuda) {
  main[whereLine].classList.remove("divmain--active");
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
      rashirenie(110, 135);
      visibleAddiRemove(1);
      whereLine = nomer;
    }

    if (nomer == 2) {
      rashirenie(85, 285);
      visibleAddiRemove(2);
      whereLine = nomer;
    }

    if (nomer == 3) {
      rashirenie(130, 410);
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
      rashirenie(110, 136);
    };
  }
  if (whereLine == 2) {
    element.onmouseout = function () {
      rashirenie(85, 285);
    };
  }
  if (whereLine == 3) {
    element.onmouseout = function () {
      rashirenie(130, 410);
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
        rashirenie(245, 0);
      };
    }

    if (nomer == 2) {
      element.onmouseover = function () {
        rashirenie(370, 0);
      };
    }

    if (nomer == 3) {
      element.onmouseover = function () {
        rashirenie(540, 0);
      };
    }
  }

  if (whereLine == 1) {
    if (nomer == 0) {
      element.onmouseover = function () {
        rashirenie(245, 0);
      };
    }

    if (nomer == 1) {
      element.onmouseover = function () {
        rashirenie(110, 135);
      };
    }

    if (nomer == 2) {
      element.onmouseover = function () {
        rashirenie(235, 135);
      };
    }
    if (nomer == 3) {
      element.onmouseover = function () {
        rashirenie(405, 135);
      };
    }
  }

  if (whereLine == 2) {
    if (nomer == 0) {
      element.onmouseover = function () {
        rashirenie(370, 0);
      };
    }

    if (nomer == 1) {
      element.onmouseover = function () {
        rashirenie(230, 140);
      };
    }

    if (nomer == 2) {
      element.onmouseover = function () {
        rashirenie(85, 285);
      };
    }
    if (nomer == 3) {
      element.onmouseover = function () {
        rashirenie(255, 285);
      };
    }
  }

  if (whereLine == 3) {
    if (nomer == 0) {
      element.onmouseover = function () {
        rashirenie(540, 0);
      };
    }

    if (nomer == 1) {
      element.onmouseover = function () {
        rashirenie(400, 140);
      };
    }

    if (nomer == 2) {
      element.onmouseover = function () {
        rashirenie(255, 285);
      };
    }
    if (nomer == 3) {
      element.onmouseover = function () {
        rashirenie(130, 410);
      };
    }
  }
}
