const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function clickHandler() {
    title.classList.toggle(CLICKED_CLASS);
    /*const hasClicked = title.classList.contains(CLICKED_CLASS);

    if (!hasClicked) {

        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }*/
}

function init() {
    title.addEventListener("click", clickHandler);
}

init();








