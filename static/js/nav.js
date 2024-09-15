document.addEventListener('pjax:complete', tonav);
document.addEventListener('DOMContentLoaded', tonav);

function tonav() {

    function up() {
        document.querySelector("#name-container").style.transform = "translate(-50%, 60px)";
        document.querySelector("#nav .menus_items").style.transform = "translateY(0)";
        document.querySelector("#menuTitleBox").style.zIndex = "-1";
    }

    function scrollToTop() {
        btf.scrollToDest(0, 500);
    }

    function updatePageName() {
        const pageNameElement = document.getElementById("page-name");
        if (pageNameElement) {
            pageNameElement.innerText = document.title.split(" | 鹊楠の小窝")[0];
        } else {
            const observer = new MutationObserver((mutations, observer) => {
                const pageNameElement = document.getElementById("page-name");
                if (pageNameElement) {
                    pageNameElement.innerText = document.title.split(" | 鹊楠の小窝")[0];
                    observer.disconnect();
                }
            });
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }

    up();

    let position = window.scrollY;

    window.addEventListener('scroll', function () {
        const scroll = window.scrollY;
        const nav = document.querySelector("#page-header");

        if (scroll > position) {
            document.querySelector("#name-container").style.transform = "translate(-50%, 0)";
            document.querySelector("#nav .menus_items").style.transform = "translateY(-60px)";
            document.querySelector("#menuTitleBox").style.zIndex = "1";
        } else {
            up();
        }

        // 检测下滑超过60px
        if (scroll > 60) {
            nav.classList.add('nav-fixed');
        } else {
            nav.classList.remove('nav-fixed');
        }

        position = scroll;
    });

    document.querySelector("#name-container").addEventListener("click", function () {
        scrollToTop();
    });

    updatePageName();
}
