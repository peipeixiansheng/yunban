/**
 * 自己封装模块
 * common.js的语法
 * 
 */

// 功能逻辑 封装 promise对象
// 传递具体的参数
// 参数是一个对象 属性名跟下面的属性名一致即可
function myPro(options) {
    /**
     * 实例化Pormsie时 传入的是回调函数
     * 外层的回调函数
     * 会在我们调用Promise对象时 自动执行 .then
     * resolve 跟reject 也是 回调函数
     * resolve 成功
     * reject 失败
     */
    return new Promise(function (resolve, reject) {
        // 异步操作
        wx.request({
            url: options.url || '',
            data: options.data || {},
            header: options.header || {
                'content-type': 'json'
            }, // 设置为json的目的是为了获取豆瓣数据
            method: options.method || 'GET',
            dataType: options.dataType || 'json',
            responseType: options.responseType || 'text',
            success: (result) => {
                // 成功回调
                resolve(result)
            },
            fail: () => {
                // 失败回调
                reject('数据获取失败');
            },
            complete: () => {}
        });
    })
}

// 星星算法
function makeStar(average) {
    // 根据当前电影的评分计算星星
    let starNum = average / 2;

    // 获取整数位
    let intNum = Math.floor(starNum);
    // 获取小数位
    let floatNum = starNum - intNum;

    // 根据startNum计算出星星数组

    // 设置一个数组 长度为 5
    // 星星约定 实星 1 空星 2 半星 3
    let starArr = [];
    for (let i = 0; i < 5; i++) {
        // 整数位都是满的星星
        if (i < intNum) {
            starArr[i] = 1;
        } else if (i == intNum) {
            // console.log('小数位比较');
            // 比.5小
            if (floatNum == 0) {
                starArr[i] = 2;
            } else if (floatNum < .5) {
                // 一半
                starArr[i] = 3
            } else {
                starArr[i] = 1;
            }
            // 比 .5 大
        } else {
            // 一定是空星
            starArr[i] = 2;
        }
    }
    // 返回星星数组
    return starArr;
}

// 暴露出去
module.exports = {
    // es6的快速赋值 等同于 myPro:myPro
    myPro,
    makeStar,
    baseUrl: 'https://douban.uieee.com/v2'
}