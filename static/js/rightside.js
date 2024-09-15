window.onscroll = percent;// 执行函数
// 页面百分比
function percent() {
    let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
        result = Math.round(a / b * 100), // 计算百分比
        up = document.querySelector("#go-up") // 获取按钮
        percentSpan = document.querySelector("#percent") // 获取显示的按钮

    if (result <= 95) {
        up.children[0].style.display = 'none'
        up.children[1].style.display = 'block'
        percentSpan.children[0].innerHTML = result;
    } else {
        up.children[1].style.display = 'none'
        up.children[0].style.display = 'block'
    }
}