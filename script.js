var menu_ul_li = document.querySelectorAll(".menu_ul_li");
var line = document.querySelector(".menu_line");

var main = document.querySelectorAll(".divmain");

var description_content = document.querySelectorAll(".description_content");
var list_content_text = document.querySelectorAll(".list_content_text");
var color_line = document.querySelectorAll(".color_line");

var picture = document.getElementById("image");

var whereLine = 0;
var whataname = 0;
console.log(description_content);

function listremove(string, colline, nomer) {
  string.onmouseover = function () {
    colline.classList.add("main");
  };

  string.onmouseout = function () {
    if (whataname != nomer) {
      colline.classList.remove("main");
    }
  };

  string.onclick = function () {
    if (nomer != whataname) {
      description_content[whataname].classList.remove(
        "description_content_active"
      );

      list_content_text[whataname].classList.remove("list_content_main");
      list_content_text[whataname].classList.add("list_content_semi");
      color_line[whataname].classList.remove("main");

      string.classList.remove("list_content_semi");
      string.classList.add("list_content_main");
      colline.classList.add("main");
      description_content[nomer].classList.add("description_content_active");

      picture.src = "pic" + nomer + ".png";

      whataname = nomer;
    }
  };
}

for (var i = 0; i < list_content_text.length; i++) {
  listremove(list_content_text[i], color_line[i], i);
}

function line1(linia, nomer) {
  if (nomer == 0) {
    linia.onmouseover = function () {
      if (whereLine) {
        line.style.width = "380px";
        line.style.marginLeft = "45px";
      }
    };

    linia.onmouseout = function () {
      if (whereLine) {
        line.style.marginLeft = "340px";
        line.style.width = "90px";
      }
    };

    linia.onclick = function () {
      if (whereLine) {
        line.style.marginLeft = "45px";
        line.style.width = "100px";
        main[1].classList.remove("visible");
        main[0].classList.add("visible");
        main[0].style.backgroundColor = "#FFFFFF";
        whereLine = 0;
      }
    };
  }

  if (nomer == 2) {
    linia.onmouseover = function () {
      if (!whereLine) {
        line.style.width = "380px";
      }
    };

    linia.onmouseout = function () {
      if (!whereLine) {
        line.style.width = "100px";
      }
    };

    linia.onclick = function () {
      if (!whereLine) {
        line.style.marginLeft = "340px";
        line.style.width = "90px";
        main[0].classList.remove("visible");
        main[1].classList.add("visible");
        main[1].style.backgroundColor = "#F0F0F0";
        whereLine = 1;
      }
    };
  }
}

for (var i = 0; i < menu_ul_li.length; i++) {
  line1(menu_ul_li[i], i);
}
