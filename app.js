
var angieButton = document.querySelector("#angieBtn");
var bonnieButton = document.querySelector("#bonnieBtn");
var claudiaButton = document.querySelector("#claudiaBtn");
var fredButton = document.querySelector("#fredBtn");
var jamesButton = document.querySelector("#jamesBtn");
var karlaButton = document.querySelector("#karlaBtn");
var lisaButton = document.querySelector("#lisaBtn");
var lizButton = document.querySelector("#lizBtn");
var miguelButton = document.querySelector("#miguelBtn");
var premilaButton = document.querySelector("#premilaBtn");
var robButton = document.querySelector("#robBtn");
var tinaButton = document.querySelector("#tinaBtn");
var voteButton = document.querySelector("#voteBtn");


let angieEl = document.querySelector("#Angie-div");
let bonnieEl = document.querySelector("#Bonnie-div");
let claudiaEl = document.querySelector("#Claudia-div");
let fredEl = document.querySelector("#Fred-div");
let jamesEl = document.querySelector("#James-div");
let karlaEl = document.querySelector("#Karla-div");
let lisaEl = document.querySelector("#Lisa-div");
let lizEl = document.querySelector("#Liz-div");
let miguelEl = document.querySelector("#Miguel-div");
let premilaEl = document.querySelector("#Premila-div");
let robEl = document.querySelector("#Rob-div");
let tinaEl = document.querySelector("#Tina-div");
let voteEl = document.querySelector("#survey-div");

function reset () {
    angieEl.style.display="none";
    bonnieEl.style.display="none";
    claudiaEl.style.display="none";
    fredEl.style.display="none";
    jamesEl.style.display="none";
    karlaEl.style.display="none";
    lisaEl.style.display="none";
    lizEl.style.display="none";
    miguelEl.style.display="none";
    premilaEl.style.display="none";
    robEl.style.display="none";
    tinaEl.style.display="none";
    voteEl.style.display="none";
}

reset ()

angieButton.addEventListener ("click", function() {
    reset()
    angieEl.style.display="block";
});

bonnieButton.addEventListener ("click", function() {
    reset()
    bonnieEl.style.display="block";
});

claudiaButton.addEventListener ("click", function() {
    reset()
    claudiaEl.style.display="block";
});

fredButton.addEventListener ("click", function() {
    reset()
    fredEl.style.display="block";
});

jamesButton.addEventListener ("click", function() {
    reset()
    jamesEl.style.display="block";
});

karlaButton.addEventListener ("click", function() {
    reset()
    karlaEl.style.display="block";
});

lisaButton.addEventListener ("click", function() {
    reset()
    lisaEl.style.display="block";
});

lizButton.addEventListener ("click", function() {
    reset()
    lizEl.style.display="block";
});

miguelButton.addEventListener ("click", function() {
    reset()
    miguelEl.style.display="block";
});

premilaButton.addEventListener ("click", function() {
    reset()
    premilaEl.style.display="block";
});

robButton.addEventListener ("click", function() {
    reset()
    robEl.style.display="block";
});

tinaButton.addEventListener ("click", function() {
    reset()
    tinaEl.style.display="block";
});

voteButton.addEventListener ("click", function() {
    reset()
    voteEl.style.display="block";
});


