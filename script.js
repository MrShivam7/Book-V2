var i = 0;
var txt1 =
  "15, Saal ki umar me Jo Tumse milar Khoya tha usse Phir se Paana chahta  < Par aaj mai Tumhe kho Kr, Apne aap ko phir se Pana chahta hu. < Hath chord Rha hu taaki Phir se kaabil ban saku. < Or Apni bhi zindagi me knud Puri tarah Shaamil ho saku < itna Pyar lutaya hai tum Pr, ki shayad kisi or ko kuch dene ke liye bacha hi na ho. < Par ab Jo tuum badal gaye ho, isko narandaaz karu ye koi wajah bhi nahi < Jao mubarak ho tumhe Apni ye bin mangi azaadi Yehi Kehna chahta hu < Par sach to ye hi hai, ki mai aaj bhi ek baar Phir tumse Pehli baar milna chahta hu  < Adat nahi ibadat hai tu meri < bas chahat nahi meri, Pehli or akhiri Mohabbat hai tu meri < Aaoge to is baar Puri shiddat se aana Or ek ajnabi sa khwaab ban kr ek baar Phir Apna naam or Penchan btana < Aaj tumse bas yehi Kehna chahta hu Sach to ye hai, mai aaj ek baar Phir Tumse Phir pehle baar milna chahta hu";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

let currentPage = 1;

function toggleClass(e, toggleClassName) {
  if (e.className.includes(toggleClassName)) {
    e.className = e.className.replace(" " + toggleClassName, "");
  } else {
    e.className += " " + toggleClassName;
  }
}

function movePage(e, page) {
  if (page == currentPage) {
    currentPage += 2;
    toggleClass(e, "left-side");
    toggleClass(e.nextElementSibling, "left-side");
  } else if ((page = currentPage - 1)) {
    currentPage -= 2;
    toggleClass(e, "left-side");
    toggleClass(e.previousElementSibling, "left-side");
  }
}