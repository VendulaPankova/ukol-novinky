// Novinky

// Pomocí document.querySelector vyberte element body a uložte si jej do proměnné bodyElement. 
// Pomocí této proměnné nastavte barvu pozadí elementu na hodnotu #e9e9e9.
const bodyElement = document.querySelector("body")
bodyElement.style.backgroundColor = "#e9e9e9"

// Do jiné proměnné vyberte element s třídou news a nastavte mu barvu pozadí na bílou a maximální šířku na 60rem.

const newsElement = document.querySelector(".news")
newsElement.style.backgroundColor = "white"
newsElement.style.width = "60rem"

// Vyberte element h1 a nastavte mu (v JavaScriptu) třídu na news__title. 
// Nadpis by měl změnit styl. Nastavte také obsah nadpisu na text Aktuální novinky.

const h1Element = document.querySelector("h1")
h1Element.className = "news__title"
h1Element.textContent ="Aktuální novinky"

// Pomocí atributu id vyberte element obsahující první zprávu. 
// Přidejte do jeho atributu class třídu post--main. První zpráva by tak měla mírně změnit svůj styl.

const firstPost = document.getElementById("zprava1")
firstPost.classList.add("post--main")

// Pomocí CSS selektoru vyberte obrázek ve třetí zprávě (id zprávy je zprava3) a změňte jeho atribut src na obrázek images/zprava3-novy.jpg.

const thirdPost = document.querySelector("#zprava3 .post__picture")
thirdPost.src = "images/zprava3-novy.jpg"



