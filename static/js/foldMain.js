document.querySelectorAll('.collapsible').forEach((button) => {
    button.addEventListener('click', function () {
        const details = this.parentElement;
        const content = details.querySelector('.content');

        // 切换 active 类
        details.classList.toggle('active');

        if (details.classList.contains('active')) {
            // 展开时，设置 max-height 为内容高度
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            // 收起时，重置 max-height
            content.style.maxHeight = null;
        }
    });
});

// 页面加载时，为已展开的内容添加 active 类并设置 max-height
document.querySelectorAll('.details[open]').forEach((details) => {
    details.classList.add('active');
    const content = details.querySelector('.content');
    content.style.maxHeight = content.scrollHeight + "px";
});