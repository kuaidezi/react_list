import $http from '../index'
// 获取全部产品列表
export function getList() {
    return $http({
        url: "/getlist",
        method: "GET",
    })
}
// 搜索框输入进行搜索
export function listSearch(data) {
    return $http({
        url: "/listsearch",
        method: "POST",
        data,
    })
}
//获取左侧产品列表
export function getLeftItemTitle() {
    return $http({
        url: "/titleList",
        method: "GET",
    })
}


//获取左侧产品列表中某个品牌的产品
export function getLeftSingleItem(data) {
    return $http({
        url: "/itemsort",
        method: "POST",
        data
    })
}

// 根据tag和itemID更换内容
export function changeItemTag(data) {
    return $http({
        url: "/itemtag",
        method: "POST",
        data
    })
} 