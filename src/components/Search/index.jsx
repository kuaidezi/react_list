import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Pagination } from 'antd';

import Item from './components/Item'
import { listSearch } from '../../request/api/api'
import './index.css'
export default function About() {
    const searchKey = useSelector(state => state.searchKey);
    const [itemList, setItemList] = useState([])
    const [pageNum, setPageNum] = useState(1)
    useEffect(() => {
        listSearch(searchKey).then(res => {
            setItemList(res);
        })
    }, [searchKey])
    var showList = itemList.slice((pageNum - 1) * 6, 6 * pageNum);

    var handleChangeNum = (val) => {
        setPageNum(val)
    }


    return (
        <div className='search_div'>
            <div className='list_Item'>
                {showList.map(item => {
                    return (
                        <Item key={item.id}{...item}></Item>
                    )
                })}
                <div className='pagination'>
                    <Pagination onChange={handleChangeNum} current={pageNum} total={itemList.length} pageSize={9} pageSizeOptions={[9]} />
                </div>
            </div>
        </div>
    )
}

