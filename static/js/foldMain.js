// 初始状态设置
document.querySelectorAll('.details').forEach((details) => {
    if (details.hasAttribute('open')) {
        details.classList.toggle('active');
        const content = details.querySelector('.content');
        content.style.height = (content.scrollHeight - 40) + "px";
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

    if (content.style.height) {
        content.style.height = null;
    } else {
        content.style.height = (content.scrollHeight + 50) + "px";
    }
}