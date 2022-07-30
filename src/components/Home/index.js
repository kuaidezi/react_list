import React, { Component } from 'react'
import LeftItemList from '../LeftItemList'
import Tablelist from '../Tablelist/indexs'
import './index.css'
export default class Home extends Component {
    render() {
        return (
            <div className='MiddleItem'>
                <LeftItemList />
                <Tablelist />
            </div>
        )
    }
}
