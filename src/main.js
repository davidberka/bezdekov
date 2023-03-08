const menuHandler = () => {
    if (window.innerWidth > 992) return;

    const burgerMenu = document.querySelector(".burger-menu");
    const navbar = document.querySelector(".navbar");

    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("open");
        navbar.classList.toggle("open");
    });
};

menuHandler();
