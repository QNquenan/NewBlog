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