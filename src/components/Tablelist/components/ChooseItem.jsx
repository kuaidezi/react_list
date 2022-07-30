import React, { useState, useEffect } from 'react'
import { Tag } from 'antd';
// eslint-disable-next-line
import { useDispatch, useSelector } from 'react-redux'
import { changeItemTag } from '../../../request/api/api'
export default function ChooseList() {
    const arr = [{ name: '全部分类', id: '001', checked: true },
    { name: '开放平台', id: '002', checked: false }, { name: '项目管理', id: '003', checked: false },
    { name: '猪齿鱼', id: '004', checked: false }, { name: '海马汇', id: '005', checked: false }];

    const [ListArr, setListArr] = useState(arr);
    const itemID = useSelector(state => state.itemID);
    useEffect(() => {
        setListArr(arr)

        // eslint-disable-next-line
    }, [itemID]);
    const dispatch = useDispatch()
    //点击标签显示高亮，其他标签设为白色
    const hanldeChangeTag = (id) => {
        return () => {
            //改变标签颜色
            setListArr(() => {
                return ListArr.map(item => {
                    if (item.id === id) {
                        item = { ...item, checked: true };
                        return item;
                    } else {
                        item = { ...item, checked: false };
                        return item;
                    }
                })
            });
            // 选择tag标签，根据itemId更换展示区视频
            changeItemTag({ itemID, id }).then(res => {
                dispatch({
                    type: 'change_item_list',
                    data: res
                })
            })
        }
    }

    return (
        <>
            <span style={{ marginLeft: '5px' }}>视频分类</span>
            {ListArr.map((item) =>
            (
                <Tag key={item.id} onClick={hanldeChangeTag(item.id)} color={item.checked ? 'gold' : ''} style={{ marginLeft: '5px' }} >{item.name}</Tag>
            )
            )}
        </>
    )
}