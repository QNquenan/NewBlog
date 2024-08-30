document.querySelectorAll('.collapsible').forEach((button) => {
    var heightTimeOut;
    button.addEventListener('click', function () {
        const details = this.parentElement;
        const content = details.querySelector('.content');
        const contentTranTime = parseFloat(window.getComputedStyle(content).transitionDuration) * 1000;

        // 切换 open 属性
        if (details.hasAttribute('open')) {

            if (heightTimeOut) {
                clearTimeout(heightTimeOut)
            }

            content.style.height = content.scrollHeight + "px";
            setTimeout(() => {
                details.removeAttribute('open');
                content.style.height = 0 + "px"; // 收起时，重置 max-height
            }, 1)
        } else {
            details.setAttribute('open', '');
            content.style.height = content.scrollHeight + "px"; // 展开时，设置 max-height 为内容高度
            heightTimeOut = setTimeout(() => {
                content.style.height = "auto";
            }, contentTranTime)
        }
    });
});

// 页面加载时，为已展开的内容设置 max-height
document.querySelectorAll('.details[open]').forEach((details) => {
    const content = details.querySelector('.content');
    content.style.height = "auto";
});