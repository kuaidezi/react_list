const defaultState = {
    itemID: '100',
    searchKey: '',
    itemList: [],
}

// eslint-disable-next-line
export default function (state = defaultState, action) {
    const { type, data } = action;
    switch (type) {
        case 'get_list':
            return { ...state, itemList: data }
        case 'change_item_list':
            return { ...state, itemList: data }
        case 'change_item_ID':
            return { ...state, itemID: data }
        case 'change_search_key':
            console.log(data);
            return { ...state, searchKey: data }
        default:
            return state

    }
}












// eslint-disable-next-line
// export default (state, action) => {
//     switch (action.type) {
//         case 'aaa':
//             console.log(action);
//             return action.payload   // 获取发送过来的数据

//         default:
//             return '默认值'
//     }
// }
