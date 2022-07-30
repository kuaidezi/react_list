import React from 'react'
import { PlayCircleFilled } from '@ant-design/icons'
import './ItemVdieo.css'
export default function ItemVdieo(props) {
    // eslint-disable-next-line
    const { id, title, courseNum, broadcastNum, imgUrl, intro, duration, isTop } = props
    return (
        <div id='ItemVdieo'>
            <div className='ItemVdieo_img'>
                <img src={imgUrl} alt="图片丢失" />
                <div className='ItemVdieo_tag tag' style={{ display: isTop === 1 ? 'block' : 'none' }} >
                    置顶
                </div>
                <div className='ItemVdieo_tag duration'>
                    {duration}
                </div>
            </div>
            <div className='ItemVdieo_txt'>
                <div className='ItemVdieo_title'>{title}</div>
                <div className='ItemVdieo_intro'>{intro}</div>
                <div className='ItemVdieo_bottom'>
                    <div><PlayCircleFilled className='ItemVdieo_icon' /> {broadcastNum}次播放</div> <div >{courseNum}节</div>
                </div>
            </div>
        </div>
    )
}
