// Código em Ascenção

// Get the modal
var modal = document.getElementById('meuModal');

function opened() {
  modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("fech")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onload = function (){ mostrarSlides();}
document.getElementsByClassName("buscar")[0].onclick = function() {};


var slideIndice = 0;

function mostrarSlides() {
  var nums = ["screen.png", "screenblackson@2x.png", "screenreverse2@2x.png",
   "screencluedo@2x.png", "screennani2@2x.png", "screenwatashi@2x.png", "screenpernalta@2x.png",
   "screenkimyona@2x.png"]
  var path = "";
  var slider = document.getElementById("inicio")
  
  if (slideIndice >= nums.length) {
    slideIndice = 0;
  }
  path = "url('./CARTOONS/img/covers/" + nums[slideIndice] + "')"
  slider.style.background = path + "center top repeat-x";
  slider.style.backgroundSize = "cover";
  slideIndice++;
  setTimeout(mostrarSlides, 3000);
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btnclicke");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("ativo");
    current[0].className = current[0].className.replace(" ativo", "");
    this.className += " ativo";
  });
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("myBtnContainer");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }}

  var animes = ["Blackson", "Kymiona Sekai", "Pernalta", "Nervous", "Cleudo", "Reverse Reality", "Reverse Reality2", "Nani Osaka", "Nani Osaka2", "Watashi No Kagaku", "Watashi No Kagaku2"]
  function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });

    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

autocomplete(document.getElementById("buscar-texto"), animes);
document.getElementsByClassName("btnLer")[0].onclick = function (){Loading("BlackSon-Capítulo 1", 0);}
document.getElementsByClassName("btnLer")[1].onclick = function (){Loading("KS 01_Piloto", 1);}
document.getElementsByClassName("btnLer")[2].onclick = function (){Loading("PERNALTA ( origem 1 )cap 1", 2);}
document.getElementsByClassName("btnLer")[3].onclick = function (){Loading("Nervus cap 01", 3);}
document.getElementsByClassName("btnLer")[4].onclick = function (){Loading("Cluedo+-+Capítulo+01", 4);}
document.getElementsByClassName("btnLer")[5].onclick = function (){Loading("Realidade+Reversa+Cap+01", 5);}
document.getElementsByClassName("btnLer")[6].onclick = function (){Loading("R2_cap_2", 6);}
document.getElementsByClassName("btnLer")[7].onclick = function (){Loading("NANI_OSAKA 01", 7);}
document.getElementsByClassName("btnLer")[8].onclick = function (){Loading("Nani_Osaka 02", 8);}
document.getElementsByClassName("btnLer")[9].onclick = function (){Loading("wnkPiloto", 9);}
document.getElementsByClassName("btnLer")[10].onclick = function (){Loading("WNK_2", 10);}

function Loading(manga, valor) {
  var capitulo = ["BlackSon-Capítulo 1.pdf_page_", "KS 01_Piloto.pdf_page_", "PERNALTA ( origem 1 )cap 1.pdf_page_", "Nervus cap 01.pdf_page_",
   "Cluedo+-+Capítulo+01.pdf_page_", "Realidade+Reversa+Cap+01.pdf_page_",
    "R2_cap_2.pdf_page_", "NANI_OSAKA 01.pdf_page_", "Nani_Osaka 02.pdf_page_", "wnkPiloto.pdf_page_", "WNK_2.pdf_page_"]
    let pagNumb = [26, 19, 35, 24, 44, 35, 16, 21, 20, 44, 22]
  var pag = []
  var count = 1;
  while (pag.length <= pagNumb[valor]) {
    if (count >= 10) {
      pag[count-1] = capitulo[valor] + count + ".png"
    } else {
      pag[count-1] = capitulo[valor] + "0" + count + ".png"
    }
    count++;
  }
  document.getElementById("screenModalLabel").innerHTML = animes[valor];
  var divs1 = []
  var divs2 = []
  var divs3 = []
  var imgs1 = []
  var imgs2 = []

  for (let c = 0; c < pag.length; c++) {
    imgs1[c] = document.createElement("img");        
    imgs1[c].style.width = "100%";
    imgs1[c].setAttribute("src", "../img/covers/" + manga + "/" + pag[c]);
    imgs1[c].setAttribute("alt", pag[c]);  }

  for (let d = 0; d < pag.length; d++) {
    divs2[d] = document.createElement("div"); 
    divs2[d].setAttribute("class", "numbertext");     
  }

  for (let e = 0; e < pag.length; e++) {
    divs1[e] = document.createElement("div"); 
    divs1[e].setAttribute("class", "meuSlides");
    divs1[e].appendChild(divs2[e]);
    divs1[e].appendChild(imgs1[e]);
  }
  
  for (let b1 = 0; b1 < pag.length; b1++) {
    imgs2[b1] = document.createElement("img");  
    imgs2[b1].setAttribute("class", "demo cursor");   
    imgs2[b1].style.width = "100px";
    imgs2[b1].setAttribute("src", "../img/covers/" + manga + "/" + pag[b1]);
    imgs2[b1].setAttribute("alt", pag[b1]);
    imgs2[b1].onclick = function(){currentSlide(b1+1);}
    }

  for (let a1 = 0; a1 < pag.length; a1++) {
    divs3[a1] = document.createElement("td");
    divs3[a1].setAttribute("class", "coluna");
    divs3[a1].appendChild(imgs2[a1]);
    }
  
    var linha = document.createElement("tr");
    var linha1 = document.createElement("div");
    linha.setAttribute("class", "linha")
    linha1.setAttribute("class", "linha1")

    for (let b2 = 0; b2 < pag.length; b2++) {
      linha.appendChild(divs3[b2]);
    }

  var pai = document.getElementsByClassName("contentor")[0];
  var myrow = document.createElement("div")
  myrow.setAttribute("class", "tabelas");
  var tables = document.createElement("table");
  tables.appendChild(linha);
  myrow.appendChild(tables);
  
  for (let p1 = 0; p1 < pag.length; p1++) {
    linha1.appendChild(divs1[p1]);
  }
  
  var parag = document.createElement("p");

  parag.setAttribute("id", "caption");
  var contParag = document.createElement("div");
  contParag.setAttribute("class", "caption-contentor");
  contParag.appendChild(parag);
  var bc = document.createElement("a");
  bc.setAttribute("class", "prev")
  bc.innerHTML = "&#10094;"
  bc.onclick = function(){plusSlides(-1);}
  var bd = document.createElement("a");
  bd.setAttribute("class", "next")
  bd.onclick = function(){plusSlides(1);}
  bd.innerHTML = "&#10095;"
  pai.appendChild(linha1);
  pai.appendChild(bc);
  pai.appendChild(bd);
  pai.appendChild(contParag);
  pai.appendChild(myrow);
}

