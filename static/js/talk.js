function arrangeItems() {
    const container = document.querySelector('#talk-container');
    const items = document.querySelectorAll('.talk-wrapper');

    let columns = 3; // 默认列数
    const containerWidth = container.clientWidth;

    if (containerWidth <= 768) {
        columns = 1; // 窗口宽度 <= 768px 时为单列布局
    } else if (containerWidth <= 1000) {
        columns = 2; // 窗口宽度 <= 1000px 时为双列布局
    }

    const columnHeights = Array(columns).fill(0); // 初始化每列高度为0
    const columnWidth = containerWidth / columns; // 计算每列宽度
    const margin = 20; // 间隔

    items.forEach((item, index) => {
        // 获取当前元素的高度
        const itemHeight = item.offsetHeight;

        const minHeight = Math.min(...columnHeights); // 获取最短列的高度
        const minIndex = columnHeights.indexOf(minHeight); // 获取最短列的索引

        // 计算transform位置
        const translateX = minIndex * columnWidth;
        const translateY = minHeight;

        // 判断是否为最后一列
        const isLastColumn = (minIndex === columns - 1);

        // 设置transform位置
        item.style.transform = `translate(${translateX}px, ${translateY}px)`;
        item.style.width = isLastColumn ? `${columnWidth}px` : `${columnWidth - margin}px`; // 最后一列不减去间隔

        // 更新列高度
        columnHeights[minIndex] += itemHeight + margin; // 加上底部间距
    });

    // 更新容器的高度以适应所有列
    container.style.height = `${Math.max(...columnHeights)}px`;
}

document.addEventListener('pjax:complete', arrangeItems);

window.onload = arrangeItems();

// 滚动后重新布局
window.addEventListener('scroll', arrangeItems)

// 当窗口大小改变时重新布局
window.addEventListener('resize', arrangeItems);
