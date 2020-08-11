var menu_list_element = document.querySelectorAll(".menu_list_element");
var menu_line = document.querySelector(".menu_line");

var main = document.querySelectorAll(".divmain");

var description_item = document.querySelectorAll(".description_item");
var list_content_text = document.querySelectorAll(".list_content_text");
var color_line = document.querySelectorAll(".color_line");
var picture_img = document.querySelectorAll(".picture_img");

var whereLine = 0;
var whataname = 0;

color_line[0].style.width = "100%";

function listremove(string, colline, nomer) {
  string.onmouseover = function () {
    colline.style.width = "100%";
  };

  string.onmouseout = function () {
    if (whataname != nomer) {
      colline.style.width = "0";
    }
  };

  string.onclick = function () {
    if (nomer != whataname) {
      /*лИНИЯ*/
      list_content_text[whataname].classList.remove("list_content_main");
      list_content_text[whataname].classList.add("list_content_semi");
      color_line[whataname].style.width = "0";
      /*тЕКСТ И ЛИНИЯ*/
      string.classList.remove("list_content_semi");
      string.classList.add("list_content_main");
      color_line[nomer].style.width = "100%";
      //description_content[nomer].classList.add("description_content_active");

      /*бЛОК*/
      description_item[whataname].classList.remove("description_item_active");
      description_item[nomer].classList.add("description_item_active");
      /*кАРТИНКА*/
      picture_img[2 - whataname].classList.remove("picture_img_active");
      picture_img[2 - nomer].classList.add("picture_img_active");

      whataname = nomer;
    }
  };
}

for (var i = 0; i < list_content_text.length; i++) {
  listremove(list_content_text[i], color_line[i], i);
}

whereLine = 0;
repit();
function repit() {
  for (var i = 0; i < menu_list_element.length; i++) {
    navedenie(menu_list_element[i], i);
    otvedenie(menu_list_element[i]);
    click(menu_list_element[i], i);
  }
}

function visibleAddiRemove(kuda) {
  main[whereLine].classList.remove("visible");
  main[kuda].classList.add("visible");
  if (kuda == 0) {
    main[kuda].style.backgroundColor = "#ffffff";
  } else {
    main[kuda].style.backgroundColor = "#F0F0F0";
  }
  whereLine = kuda;
  repit();
}

function linechange(margin, width) {
  menu_line.style.marginLeft = margin + "px";
  menu_line.style.width = width + "px";
}

function click(element, nomer) {
  element.onclick = function () {
    if (nomer == 0) {
      linechange(20, 100);
      visibleAddiRemove(0);
    }

    if (nomer == 1) {
      linechange(165, 110);
      visibleAddiRemove(1);
    }

    if (nomer == 2) {
      linechange(315, 90);
      visibleAddiRemove(2);
    }

    if (nomer == 3) {
      linechange(450, 135);
      visibleAddiRemove(3);
    }
  };
}

function otvedenie(element) {
  if (whereLine == 0) {
    element.onmouseout = function () {
      linechange(20, 100);
    };
  }
  if (whereLine == 1) {
    element.onmouseout = function () {
      linechange(165, 110);
    };
  }
  if (whereLine == 2) {
    element.onmouseout = function () {
      linechange(315, 90);
    };
  }
  if (whereLine == 3) {
    element.onmouseout = function () {
      linechange(450, 135);
    };
  }
}

function navedenie(element, nomer) {
  if (whereLine == 0) {
    if (nomer == 1) {
      element.onmouseover = function () {
        linechange(20, 255);
      };
    }

    if (nomer == 2) {
      element.onmouseover = function () {
        linechange(20, 385);
      };
    }

    if (nomer == 3) {
      element.onmouseover = function () {
        linechange(20, 565);
      };
    }
  }

  if (whereLine == 1) {
    if (nomer == 0) {
      element.onmouseover = function () {
        linechange(20, 255);
      };
    }

    if (nomer == 1) {
      element.onmouseover = function () {
        linechange(165, 110);
      };
    }

    if (nomer == 2) {
      element.onmouseover = function () {
        linechange(165, 240);
      };
    }
    if (nomer == 3) {
      element.onmouseover = function () {
        linechange(165, 420);
      };
    }
  }

  if (whereLine == 2) {
    if (nomer == 0) {
      element.onmouseover = function () {
        linechange(20, 385);
      };
    }

    if (nomer == 1) {
      element.onmouseover = function () {
        linechange(165, 240);
      };
    }

    if (nomer == 2) {
      element.onmouseover = function () {
        linechange(315, 90);
      };
    }
    if (nomer == 3) {
      element.onmouseover = function () {
        linechange(315, 270);
      };
    }
  }

  if (whereLine == 3) {
    if (nomer == 0) {
      element.onmouseover = function () {
        linechange(20, 565);
      };
    }

    if (nomer == 1) {
      element.onmouseover = function () {
        linechange(165, 420);
      };
    }

    if (nomer == 2) {
      element.onmouseover = function () {
        linechange(315, 270);
      };
    }
    if (nomer == 3) {
      element.onmouseover = function () {
        linechange(450, 135);
      };
    }
  }
}
