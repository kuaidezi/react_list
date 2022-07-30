import React from 'react'
import { PlayCircleFilled } from '@ant-design/icons'

import './index.css'
export default function Item(props) {
    const { title, courseNum, broadcastNum, imgUrl, desc } = props
    const titleFront = title.slice(0, 4);
    const titlH = title.slice(4)
    return (
        <div id='search_item'>
            <div className='item_txt_img'>
                <div className='item_txt_divimg'>
                    <img src={imgUrl} alt="图片丢失" />
                    <div style={{ textAlign: 'left' }}><PlayCircleFilled className='ItemVdieo_icon' />{broadcastNum}</div>
                </div>
            </div>
            <div className="item_txt">
                <div className='item_txt_top'>
                    <span ><span style={{ color: 'gold' }}> {titleFront}</span>{titlH}</span>
                    <span style={{ color: 'grey', fontSize: '12px' }}>{courseNum}节</span>
                </div>
                <div className='item_txt_bottom'>{desc}</div>
            </div>
        </div>
    )
}
