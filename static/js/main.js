// 按键防抖

let TT = null; // 防抖全局计时器
/**
 * 防抖函数
 * @param {逻辑} fn 
 * @param {防抖时间} time 
 */
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

// 按键防抖 end --


// 检测事件并弹窗

document.onkeydown = function (e) {
    // 复制
    if (e.ctrlKey && e.key === 'c') {
        debounce(function () {
            Snackbar.show({
                text: '复制成功啦🌞若要转载最好保留原文链接!',
                pos: 'top-right',
                actionText: '版权声明',
                actionTextColor: '#FF8599',
                onActionClick: function () {
                    location.assign('/privacy');
                }
            })
        }, 300)
    }

    // 打开控制台
    if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) {
        debounce(function () {
            Snackbar.show({
                text: '开发者模式已打开🍟记住要遵循GPL协议吖!',
                pos: 'top-right',
                showAction: false
            })
        }, 300);
    }
};

// 检测事件并弹窗 end --

// 首页封面样式

window.addEventListener('scroll', function () {
    // 获取当前页面滚动的高度
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // 获取90%视口高度，即页面90vh对应的像素值
    const thresholdHeight = window.innerHeight * 0.8;

    // 计算scrollTop占thresholdHeight的比例，并限制在0-1之间
    let scrollPercentage = scrollTop / thresholdHeight;
    if (scrollPercentage > 1) {
        scrollPercentage = 1;
    } else if (scrollPercentage < 0) {
        scrollPercentage = 0;
    }

    // 输出或使用这个scrollPercentage值
    console.log(scrollPercentage);

    // 将这个值应用于其他操作，例如CSS变量
    document.documentElement.style.setProperty('--process', scrollPercentage);
});

// 首页封面样式 end --