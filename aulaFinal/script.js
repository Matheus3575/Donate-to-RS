document.addEventListener("scroll", function() {
    var scrollTop = document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - window.innerHeightHeight;
    var scrollPercentage = scrollTop / scrollHeight;

    var waterHeight = (1 - scrollPercentage) * 100;
    var waterSides = document.querySelectorAll(".water-side");

    waterSides.forEach(function(side) {
        side.style.height = waterHeight - "%";
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));