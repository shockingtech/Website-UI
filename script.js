const closes = document.querySelectorAll(".close");
closes.forEach((close, index) => {
    close.addEventListener("click", handleOnClickClose);
});

function handleOnClickClose(e) {
    e.target.parentNode.classList.add("hide");
}


// announdement





// Do not change inputs type radio IDs
// Change the page index value to change the active menu button
var indexPage = 1;

window.addEventListener("load", handleOnLoad);
function handleOnLoad(e) {
    document.getElementById("bar-radio-" + indexPage).checked = true;
}
