import React, { useEffect, useState } from 'react'
import { getLeftItemTitle, getLeftSingleItem } from '../../request/api/api';
import { useDispatch } from 'react-redux'

import './index.css'

export default function LeftItemList() {
    const dispatch = useDispatch()
    const [itemTitle, setItemTitle] = useState([])
    useEffect(() => {
        getLeftItemTitle().then(res => {
            setItemTitle(() => res)
        }).catch(e => console.log(e))
    }, []);

    const hanldeClickChange = (id) => {
        return () => {
            //改变tag颜色状态
            setItemTitle(() => {
                return itemTitle.map(item => {
                    if (item.id === id) {

                        item = { ...item, isCheck: true };
                        return item;
                    } else {
                        item = { ...item, isCheck: false };
                        return item;
                    }
                })
            })
            // 获取该tag标签的产品视频
            getLeftSingleItem(id).then(res => {
                dispatch({
                    type: 'change_item_list',
                    data: res
                })
            }).catch(e => console.log(e))
            // 改变全局的itemID
            dispatch({
                type: 'change_item_ID',
                data: id
            })
        }
    }


    return (
        <div id='LeftItemList'>
            {
                itemTitle.map(item => {
                    return (
                        <div key={item.id} className='itemt_title' style={{ color: item.isCheck ? '#FF8A2B' : '#666666', borderLeft: item.isCheck ? '3px solid #FF8A2B' : '3px solid white' }}>

                            <div onClick={hanldeClickChange(item.id)}>
                                {item.title}
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}
