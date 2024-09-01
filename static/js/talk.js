function arrangeItems() {
    var container = document.querySelector('#talk-container');
    var items = document.querySelectorAll('.talk-wrapper');

    if (container && items) {
        var columns = 3; // 默认列数
        var containerWidth = container.clientWidth;

        if (containerWidth <= 768) {
            columns = 1; // 窗口宽度 <= 768px 时为单列布局
        } else if (containerWidth <= 1000) {
            columns = 2; // 窗口宽度 <= 1000px 时为双列布局
        }

        var columnHeights = Array(columns).fill(0); // 初始化每列高度为0
        var columnWidth = containerWidth / columns; // 计算每列宽度
        var margin = 20; // 间隔

        items.forEach((item, index) => {
            // 获取当前元素的高度
            var itemHeight = item.offsetHeight;

            var minHeight = Math.min(...columnHeights); // 获取最短列的高度
            var minIndex = columnHeights.indexOf(minHeight); // 获取最短列的索引

            // 计算transform位置
            var translateX = minIndex * columnWidth;
            var translateY = minHeight;

            // 判断是否为最后一列
            var isLastColumn = (minIndex === columns - 1);

            // 设置transform位置
            item.style.transform = `translate(${translateX}px, ${translateY}px)`;
            item.style.width = isLastColumn ? `${columnWidth}px` : `${columnWidth - margin}px`; // 最后一列不减去间隔

            // 更新列高度
            columnHeights[minIndex] += itemHeight + margin; // 加上底部间距
        });

        // 更新容器的高度以适应所有列
        container.style.height = `${Math.max(...columnHeights)}px`;
    } else {
        return
    }
}

if (location.pathname.startsWith('/talk')) {
    window.onload = arrangeItems();

    // 滚动后重新布局
    window.addEventListener('scroll', arrangeItems)

    // 当窗口大小改变时重新布局
    window.addEventListener('resize', arrangeItems);
}
