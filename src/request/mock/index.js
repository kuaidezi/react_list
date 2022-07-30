import Mock from 'mockjs'
// 模拟数据列表

let arr = [];

for (let i = 0; i < 300; i++) {

    arr.push({
        id: '1000' + i,
        imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs11.51cto.com%2Fimages%2F202004%2F11%2F6c4b979aa3b523550315f1b35a26b167.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cm_fixed%2Cw_500%2Ch_295&refer=http%3A%2F%2Fs11.51cto.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661744447&t=86c4c8661b3209efed7777ed4ee6e9ab',
        title: '2022前端技术的发展趋势' + (1 + i),
        intro: '介绍Hzero前端开发的流程以及规范，开发助力',
        broadcastNum: 1000 + i,
        courseNum: 10 + i,
        desc: '听完我的回答，她给我说，我想分享给你一段文字，希望你看了，能够对你有所触动，慢慢从这些不好的思绪中慢慢地走出来，然后重新带着爱和希望，去拥抱这个其实还很美好的世界！',
        isTop: Math.random() > 0.95 ? 1 : 0,
        duration: '01:20:45',
    });

}

// 数据的查询删除操作

let getList = function (options) {
    return sortIsTop(arr);

}

Mock.mock('/getlist', /get|post/i, getList);

// 条件查询

let listSearch = function (options) {
    // let keyVal = options.body;
    var newArr = arr.filter(function (item) {
        var num = Math.random()
        if (1 - num > .9)
            return item
        return null
    })

    return sortIsTop(newArr)

}

Mock.mock('/listsearch', /get|post/i, listSearch);





let leftItemTitle = function () {

    const itemTitleList = [
        {
            title: '全部产品',
            id: '100',
            isCheck: true
        }, {
            title: '飞搭Feida',
            id: '101',
            isCheck: false

        },
        {
            title: '汉得协同制造软件',
            id: '102',
            isCheck: false

        },
        {
            title: '汉得智能合同管理软件',
            id: '103',
            isCheck: false

        },
        {
            title: '红珊瑚（Corallium）',
            id: '104',
            isCheck: false

        },
        {
            title: '汉得运输管理软件',
            id: '105',
            isCheck: false

        },
        {
            title: '汉得智慧财务套件软件',
            id: '106',
            isCheck: false

        },
        {
            title: '汉得运输管理软件2',
            id: '107',
            isCheck: false

        },

        {
            title: '汉得清分结算软件',
            id: '108',
            isCheck: false

        },
        {
            title: '海马汇HIPPIUS',
            id: '109',
            isCheck: false

        },
    ];

    return itemTitleList

}

Mock.mock('/titleList', /get|post/i, leftItemTitle);















let itemSort = function (options) {
    const id = Number(options.body) - 100;
    if (id === 0) {
        return sortIsTop(arr)
    } else {
        var newArr = arr.filter(item => {
            var num = Math.random()
            if (1 - num > .8)
                return item
            return null
        })
        return sortIsTop(newArr)
    }
}
Mock.mock('/itemsort', /get|post/i, itemSort);


function changeItemTag(options) {
    var { itemID, id } = JSON.parse(options.body);
    var newArr = arr.filter(item => {
        var num = Math.random()
        if (1 - num > .8)
            return item
        return null
    })
    if (itemID === 100 && id === '001') return sortIsTop(arr)
    return sortIsTop(newArr)
}


Mock.mock('/itemtag', /get|post/i, changeItemTag);








export default Mock



function sortIsTop(arr) {
    return arr.sort((a, b) => {
        return b.isTop - a.isTop
    })
}