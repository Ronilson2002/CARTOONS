document.getElementsByClassName("btnCloser")[0].onclick = function (){removeFilho();}
document.getElementsByClassName("btnCloser")[1].onclick = function (){removeFilho();}

var slideIndex = 1;
showSlide(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlide(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlide(slideIndex = n);
}
function showSlide(n) {
  var ir;
  var slide = document.getElementsByClassName("meuSlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slide.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slide.length}
  for (ir = 0; ir < slide.length; ir++) {
    slide[ir].style.display = "none";
  }
  for (ir = 0; ir < dots.length; ir++) {
    dots[ir].className = dots[ir].className.replace(" ativado", "");
  }
  slide[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " ativado";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function removeFilho(){
    var pai = document.getElementsByClassName("contentor")[0];
    pai.removeChild(document.getElementsByClassName("tabelas")[0]);
    pai.removeChild(document.getElementsByClassName("caption-contentor")[0]);
    pai.removeChild(document.getElementsByClassName("linha1")[0]);
    pai.removeChild(document.getElementsByClassName("prev")[0]);
    pai.removeChild(document.getElementsByClassName("next")[0]);
    
    // var filho = document.getElementsByClassName("meuSlides");
    // console.log(filho.length);
    // for (let l = 0; l < filho.length; l++) {
    //   pai.removeChild(filho[l])  
    // }
}


