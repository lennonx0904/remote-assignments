
const coverTitle = document.querySelector(".coverTitle");

function coverClicked() {
    coverTitle.innerHTML = "Have a Good Time!";
}

const closeBtn = document.querySelector(".closeBtn");
const navList = document.querySelector(".navList");

function openMenu() {
    closeBtn.style.display = "block";
    navList.style.display = "block";
}

function closeMenu() {
    closeBtn.style.display = "none";
    navList.style.display = "none";
}

const hiddenRow = document.querySelectorAll(".hiddenRow");
const flexRow = document.querySelector(".flexRow");

function openRow() {
    for (var i = 0; i < hiddenRow.length; i++){
        hiddenRow[i].style.display = "flex";
    } 
}