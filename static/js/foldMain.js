// 初始状态设置
document.querySelectorAll('.details').forEach((details) => {
    if (details.hasAttribute('open')) {
        details.classList.add('active');
        const content = details.querySelector('.content');
        content.style.maxHeight = content.scrollHeight + "px";
    }
});

// 添加点击事件
document.querySelectorAll('.collapsible').forEach((button) => {
    button.addEventListener('click', function () {
        const details = this.parentElement;
        toggleDetails(details);
    });
});

function toggleDetails(details) {
    details.classList.toggle('active');
    const content = details.querySelector('.content');

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = (content.scrollHeight + 20) + "px";
    }
}