// Kategorier //

var g1 = document.getElementsByClassName('g1');
var info1 = document.getElementsByClassName('g1info');
var g2 = document.getElementsByClassName('g2');
var info2 = document.getElementsByClassName('g2info');
var g3 = document.getElementsByClassName('g3');
var info3 = document.getElementsByClassName('g3info');
var g4 = document.getElementsByClassName('g4');
var info4 = document.getElementsByClassName('g4info');
var gridC = document.getElementsByClassName('grid-category');
var g1p = document.getElementById("g1p");
var g2p = document.getElementById("g2p");
var g3p = document.getElementById("g3p");
var g4p = document.getElementById("g4p");

// Slideshow //

var br = document.getElementById('r-button');
var bl = document.getElementById('l-button');
var img = document.getElementsByClassName('gs-img');
var h2 = document.getElementsByClassName('gs-h2');



// Övrigt //



function grill(){
  gridC[0].style.gridTemplateRows = "repeat(5, 1fr)";
  g1[0].style.WebkitAnimation = "fadein 1.2s"; g2[0].style.WebkitAnimation = "fadein 1.2s"; 
  g3[0].style.WebkitAnimation = "fadein 1.2s"; g4[0].style.WebkitAnimation = "fadein 1.2s";
  g4[0].style.gridColumnStart = "1"; g4[0].style.gridColumnEnd = "3"; g4[0].style.gridRowStart = "5"; g4[0].style.gridRowEnd = "6";
  g3[0].style.gridColumnStart = "1"; g3[0].style.gridColumnEnd = "3"; g3[0].style.gridRowStart = "4"; g3[0].style.gridRowEnd = "5";
  g2[0].style.gridColumnStart = "1"; g2[0].style.gridColumnEnd = "3"; g2[0].style.gridRowStart = "3"; g2[0].style.gridRowEnd = "4";
  g1[0].style.gridColumnStart = "1"; g1[0].style.gridColumnEnd = "3"; g1[0].style.gridRowStart = "1"; g1[0].style.gridRowEnd = "3";
  window.scrollTo({
  top: 1580,
  left: 0,
  behavior: 'smooth'
  });    
}

function green(){
  gridC[0].style.gridTemplateRows = "repeat(5, 1fr)";
  g1[0].style.WebkitAnimation = "fadein 1.2s"; g2[0].style.WebkitAnimation = "fadein 1.2s"; 
  g3[0].style.WebkitAnimation = "fadein 1.2s"; g4[0].style.WebkitAnimation = "fadein 1.2s";
  g4[0].style.gridColumnStart = "1"; g4[0].style.gridColumnEnd = "3"; g4[0].style.gridRowStart = "5"; g4[0].style.gridRowEnd = "6";
  g3[0].style.gridColumnStart = "1"; g3[0].style.gridColumnEnd = "3"; g3[0].style.gridRowStart = "4"; g3[0].style.gridRowEnd = "5";
  g1[0].style.gridColumnStart = "1"; g1[0].style.gridColumnEnd = "3"; g1[0].style.gridRowStart = "3"; g1[0].style.gridRowEnd = "4";
  g2[0].style.gridColumnStart = "1"; g2[0].style.gridColumnEnd = "3"; g2[0].style.gridRowStart = "1"; g2[0].style.gridRowEnd = "3";
  window.scrollTo({
  top: 1580,
  left: 0,
  behavior: 'smooth'
  });    
}

function gather(){
  gridC[0].style.gridTemplateRows = "repeat(5, 1fr)";
  g1[0].style.WebkitAnimation = "fadein 1.2s"; g2[0].style.WebkitAnimation = "fadein 1.2s"; 
  g3[0].style.WebkitAnimation = "fadein 1.2s"; g4[0].style.WebkitAnimation = "fadein 1.2s";
  g4[0].style.gridColumnStart = "1"; g4[0].style.gridColumnEnd = "3"; g4[0].style.gridRowStart = "5"; g4[0].style.gridRowEnd = "6";
  g2[0].style.gridColumnStart = "1"; g2[0].style.gridColumnEnd = "3"; g2[0].style.gridRowStart = "4"; g2[0].style.gridRowEnd = "5";
  g1[0].style.gridColumnStart = "1"; g1[0].style.gridColumnEnd = "3"; g1[0].style.gridRowStart = "3"; g1[0].style.gridRowEnd = "4";
  g3[0].style.gridColumnStart = "1"; g3[0].style.gridColumnEnd = "3"; g3[0].style.gridRowStart = "1"; g3[0].style.gridRowEnd = "3";
  window.scrollTo({
  top: 1580,
  left: 0,
  behavior: 'smooth'
  });    
}

function games(){
  gridC[0].style.gridTemplateRows = "repeat(5, 1fr)";
  g1[0].style.WebkitAnimation = "fadein 1.2s"; g2[0].style.WebkitAnimation = "fadein 1.2s"; 
  g3[0].style.WebkitAnimation = "fadein 1.2s"; g4[0].style.WebkitAnimation = "fadein 1.2s";
  g3[0].style.gridColumnStart = "1"; g3[0].style.gridColumnEnd = "3"; g3[0].style.gridRowStart = "5"; g3[0].style.gridRowEnd = "6";
  g2[0].style.gridColumnStart = "1"; g2[0].style.gridColumnEnd = "3"; g2[0].style.gridRowStart = "4"; g2[0].style.gridRowEnd = "5";
  g1[0].style.gridColumnStart = "1"; g1[0].style.gridColumnEnd = "3"; g1[0].style.gridRowStart = "3"; g1[0].style.gridRowEnd = "4";
  g4[0].style.gridColumnStart = "1"; g3[0].style.gridColumnEnd = "3"; g3[0].style.gridRowStart = "1"; g3[0].style.gridRowEnd = "3";
  window.scrollTo({
  top: 1580,
  left: 0,
  behavior: 'smooth'
  });    
}

function sl1() {
  
  bl.style.display = "none";
  img[0].src = "https://cdn.glitch.com/faf3ad22-2287-4b30-9c78-d1142bf8ad43%2FMorot%2002.png?v=1620390479825";
  img[0].style.WebkitAnimation = "fadein 1.2s"; 
  h2[0].innerHTML = "Elias Digging Dogs";
  
}

function sl2() {
  
  br.style.display = "none";
  img[0].src = "https://cdn.glitch.com/faf3ad22-2287-4b30-9c78-d1142bf8ad43%2FMorot%2002.png?v=1620390479825";
  img[0].style.WebkitAnimation = "fadein 1.2s"; 
  h2[0].innerHTML = "Elias Digging Dogs";
  
}