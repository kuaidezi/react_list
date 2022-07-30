import React, { Component } from 'react'
import store from '../../redux/store'
import { withRouter } from 'react-router-dom';
import { Input } from 'antd';
import './index.css'
const { Search } = Input;


class Topsearch extends Component {
    handleSearch = (keyVal) => {
        if (keyVal.length === 0) return
        store.dispatch({
            type: 'change_search_key',
            data: keyVal
        })
        if (this.props.history.location.pathname === '/search')
            return;
        this.props.history.push({ pathname: '/search' })
    }
    render() {
        return (
            <div id='Topsearch'>
                <h2>视频中心</h2>
                <h5>帮你快速了解汉得产品，助力交付使用全流程</h5>
                <div className='search'>
                    <Search
                        placeholder="请搜索类别/视频名称"
                        allowClear
                        enterButton="搜索"
                        size="large"
                        onSearch={this.handleSearch}
                    />
                </div>
            </div>
        )
    }
}





export default withRouter(Topsearch)