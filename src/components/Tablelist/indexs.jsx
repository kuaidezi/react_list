import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Pagination } from 'antd';
import { useDispatch } from 'react-redux'
import { getList } from '../../request/api/api'
import './index.css'

import ChooseItem from './components/ChooseItem'
import ItemVdieo from './components/ItemVdieo'
export default function Tablelist() {

    const dispatch = useDispatch()
    useEffect(() => {
        getList().then(res => {
            dispatch({
                type: 'get_list',
                data: res
            })
        })
    }, [dispatch])


    const [pageNum, setPageNum] = useState(1)
    const itemList = useSelector(state => state.itemList);

    var showList = itemList.slice((pageNum - 1) * 9, 9 * pageNum);


    //切换产品种类时将页码变回1
    useEffect(() => {
        setPageNum(() => 1)
    }, [itemList])

    // 翻页
    const handleChangeNum = (num) => {
        setPageNum(() => num)
    }


    return (
        <div id='Tablelist'>
            <ChooseItem />
            <div id='ItemVdieoList'>
                {
                    showList.map((item) => {
                        return (
                            <ItemVdieo {...item} key={item.id} />
                        )
                    })
                }
            </div>
            <div className='pagination'>
                <Pagination onChange={handleChangeNum} current={pageNum} total={itemList.length} pageSize={9} pageSizeOptions={[9]} />
            </div>

        </div>
    )
}
