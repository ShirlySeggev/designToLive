'use strict';

// for the dropdown mobile
var dropdown = document.getElementsByClassName("dropbtn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function continueReading(numPhoto) {
    document.querySelector('.modal').style.display = 'flex';
    document.querySelector('.modal-conatiner').style.backgroundImage = `url("./images/00${numPhoto}.jpg")`;
}

function onCloseModal() {
    document.querySelector('.modal').style.display = 'none';
}