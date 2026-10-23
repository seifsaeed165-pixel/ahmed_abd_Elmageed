
document.addEventListener("DOMContentLoaded", function () {
    const navButtons = document.querySelectorAll(".nav-btn");
    const pages = document.querySelectorAll(".page");

    function showPage(pageId) {
        pages.forEach(function (page) {
            page.style.display = page.id === pageId ? "block" : "none";
        });

        navButtons.forEach(function (button) {
            if (button.dataset.page === pageId) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    navButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const pageId = button.dataset.page;

            if (document.getElementById(pageId)) {
                showPage(pageId);
            }
        });
    });

    const firstPage = document.querySelector(".page");

    if (firstPage) {
        showPage(firstPage.id);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".nav-btn");
    const pages = document.querySelectorAll(".page");

    function showPage(pageId) {
        const targetPage = document.getElementById(pageId);

        if (!targetPage || !targetPage.classList.contains("page")) {
            return;
        }

        pages.forEach(function (page) {
            page.classList.toggle("active", page.id === pageId);
        });

        buttons.forEach(function (button) {
            button.classList.toggle(
                "active",
                button.dataset.page === pageId
            );
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            showPage(button.dataset.page);
        });
    });

    showPage("home");
});
