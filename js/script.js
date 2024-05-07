document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section1, .section2, .section3');
    let currentSectionIndex = 0;

    function showSection(index) {
        sections[currentSectionIndex].classList.remove('active');
        sections[index].classList.add('active');
        currentSectionIndex = index;
    }

    // Activate section 1 instantly because it's the landing page
    sections[0].classList.add('active');

    function findCurrentSectionIndex() {
        let index = 0;
        sections.forEach((section, i) => {
            const rect = section.getBoundingClientRect();
            const scrollY = window.scrollY || window.pageYOffset;
            const windowHeight = window.innerHeight;
            const sectionHeight = rect.bottom - rect.top;
            const offsetTop = rect.top + scrollY;

            if (scrollY >= offsetTop - (windowHeight / 2) && scrollY < offsetTop + sectionHeight - (windowHeight / 2)) {
                index = i;
            }
        });
        return index;
    }

    function scrollHandler() {
        const index = findCurrentSectionIndex();
        if (index !== currentSectionIndex) {
            showSection(index);
        }
    }

    window.addEventListener('scroll', scrollHandler);
});

document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.getElementById("menuIcon"); 
    var myLinks = document.getElementById("myLinks"); 
    menuIcon.addEventListener("click", function () {
        if (myLinks.style.display === "block") {
            myLinks.style.display = "none"; 
        } else {
            myLinks.style.display = "block"; 
        }
    });
});