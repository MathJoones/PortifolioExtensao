const slides = document.querySelectorAll('.slides li');
let slideIndex = 0;

function showSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = 'none';
}

window.onscroll = function() {
    const goBackBtn = document.getElementById("goBackBtn")
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goBackBtn.style.display = 'block';
    } else {
        goBackBtn.style.display = 'none';
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", initSlide);

function initSlide() {
    if(slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
    }
}

function showSlide() {
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    initSlide();
}

function nextSlide() {
    slideIndex++;

    if(slideIndex >= slides.length) {
        slideIndex = 0;
    }

    showSlide();
}

function prevSlide() {
    slideIndex--;

    if(slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    
    showSlide(slideIndex);
}