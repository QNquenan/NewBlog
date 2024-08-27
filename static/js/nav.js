document.addEventListener('pjax:complete', tonav);
document.addEventListener('DOMContentLoaded', tonav);

function tonav() {

    function up() {
        document.querySelector("#name-container").style.top = "60px";
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
            // 使用 MutationObserver 监听 DOM 变化，确保元素加载后更新标题
            const observer = new MutationObserver((mutations, observer) => {
                const pageNameElement = document.getElementById("page-name");
                if (pageNameElement) {
                    pageNameElement.innerText = document.title.split(" | 鹊楠の小窝")[0];
                    observer.disconnect();  // 元素找到后停止观察
                }
            });

            // 开始观察整个文档
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }

    up();

    var position = window.scrollY;

    window.addEventListener('scroll', function () {
        var scroll = window.scrollY;

        if (scroll > position) {
            document.querySelector("#name-container").style.top = "0";
            document.querySelector("#nav .menus_items").style.transform = "translateY(-60px)";
            document.querySelector("#menuTitleBox").style.zIndex = "1";
        } else {
            up();
        }

        position = scroll;
    });

    document.querySelector("#name-container").addEventListener("click", function () {
        scrollToTop();
    });

    updatePageName(); // 调用更新页面标题的函数
}
