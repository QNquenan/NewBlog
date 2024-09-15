function arrangeItems(containerSelector, itemSelector) {
    var container = document.querySelector(containerSelector);
    var items = document.querySelectorAll(itemSelector);

    if (!container || items.length === 0) return;

    var containerWidth = container.clientWidth;
    var columns = 3; // 默认列数

    if (containerWidth <= 768) {
        columns = 1; // 窗口宽度 <= 768px 时为单列布局
    } else if (containerWidth <= 1000) {
        columns = 2; // 窗口宽度 <= 1000px 时为双列布局
    }

    var columnHeights = Array(columns).fill(0); // 初始化每列高度为0
    var columnWidth = containerWidth / columns; // 计算每列宽度
    var margin = 20; // 间隔

    // 从后往前遍历 items
    items.forEach((item) => {
        var itemHeight = item.offsetHeight;

        var minHeight = Math.min(...columnHeights); // 获取最短列的高度
        var minIndex = columnHeights.indexOf(minHeight); // 获取最短列的索引

        var translateX = minIndex * columnWidth;
        var translateY = minHeight;

        var isLastColumn = (minIndex === columns - 1);

        item.style.transform = `translate(${translateX}px, ${translateY}px)`;
        item.style.width = isLastColumn ? `${columnWidth}px` : `${columnWidth - margin}px`;

        columnHeights[minIndex] += itemHeight + margin;
    });

    container.style.height = `${Math.max(...columnHeights)}px`;
}

function todo() {
    if (location.pathname.startsWith('/talk')) {
        arrangeItems('#talk-container', '.talk-wrapper');

        window.addEventListener('scroll', () => arrangeItems('#talk-container', '.talk-wrapper'));
        window.addEventListener('resize', () => arrangeItems('#talk-container', '.talk-wrapper'));
    } else if (location.pathname.startsWith('/todo')) {
        arrangeItems('#todolist', '.list_item');

        window.addEventListener('scroll', () => arrangeItems('#todolist', '.list_item'));
        window.addEventListener('resize', () => arrangeItems('#todolist', '.list_item'));
    }
}

document.addEventListener('pjax:complete', todo);
document.addEventListener('DOMContentLoaded', todo);
