document.addEventListener('pjax:complete', tonav);
document.addEventListener('DOMContentLoaded', tonav);

function up() {
    document.querySelector("#name-container").style.top = "60px";
    document.querySelector("#nav.hide-menu .menus_items").style.transform = "translateY(0)";
    document.querySelector("#menuTitleBox").style.zIndex = "-1";
}

function scrollToTop() {
    btf.scrollToDest(0, 500);
}

function tonav() {
    up();

    var position = window.scrollY;

    window.addEventListener('scroll', function () {
        var scroll = window.scrollY;

        if (scroll > position) {
            document.querySelector("#name-container").style.top = "0";
            document.querySelector("#nav.hide-menu .menus_items").style.transform = "translateY(-60px)";
            document.querySelector("#menuTitleBox").style.zIndex = "1";
        } else {
            up();
        }

        position = scroll;
    });

    document.querySelector("#name-container").addEventListener("click", function () {
        scrollToTop();
    })

    document.getElementById("page-name").innerText = document.title.split(" | 鹊楠の小窝")[0];
}
