var header = document.getElementById("secondHeader");

header.removeChild(header.firstElementChild);

var firstHeader = document.getElementById("firstBanner");

function HandleClick() {
    alert("I have been clicked!");
}

firstHeader.addEventListener("click", HandleClick, false);


$(document).ready(function () {
    $("p").each(function () {
        $(this).css("font-size", "24px");
    });
});