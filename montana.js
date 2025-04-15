window.addEventListener("scroll", function () {
    const header = document.getElementById("header_container");

    header.style.backgroundColor = ""; // clear inline first

    if (window.innerWidth > 768) {
        if (window.scrollY > 20) {
            header.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
        } else {
            header.style.backgroundColor = "transparent";
        }
    }
});

