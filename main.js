let moreList = document.getElementById("MoreListNow");
let moreButton = document.getElementById("MoreBut");


moreButton.onclick = function () {
    moreList.classList.remove("NoneDisplay")
}


let SpecialDark = document.getElementById("SpecialDark")

SpecialDark.onclick = function () {
    document.body.classList.toggle("Dark-mode");
}