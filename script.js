//const title = document.querySelector("#title");
/*title.innerHTML = "Hi from Js";
title.style.color = "red";
console.dir(document);*/

/*function clickHandler() {

    title.style.color = "red";
}

//title.addEventListener("click", clickHandler);



*/


/*if ("10" === 10) {
    console.log("Hi");
} else if ("10" === "10") {
    console.log("DADADAD");
} else {
    console.log("pokapoka");
}*/

/*if (20 < 5 || "Anton" === "Anton") {
    console.log("da");
} else {
    console.log("nonono");
}
*/

/*const age = prompt("Napishite swoj wozrast");

if (age >= 18 && age < 21) {
    console.log("u can by");
} else if (age > 21) {
    console.log("go buhat");
}
else {
    console.log(" go sleep");
}
*/
const title = document.querySelector("#title");
const BASE_COLOUR = "rgb(118, 218, 25)";
const OTHER_COLOUR = "#8e44ad";

function clickHandler() {
    const currentColour = title.style.color;
    if (currentColour === BASE_COLOUR) {
        title.style.color = OTHER_COLOUR;
    } else {
        title.style.color = BASE_COLOUR;
    }

}

function init() {
    title.style.color = BASE_COLOUR;
    title.addEventListener("click", clickHandler);
}

init();

function offlineHandler() {
    console.log("bybyby");
}
function onlineHandler() {
    console.log("hihihi");
}


window.addEventListener("offline", offlineHandler);
window.addEventListener("online", onlineHandler);








