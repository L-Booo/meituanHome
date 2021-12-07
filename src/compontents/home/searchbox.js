import React from 'react';
import { Input } from 'antd';


const { Search } = Input;
const onSearch = value => console.log(value);

function Searchbox(props) {
    return (
        <div className="search">
            <div className="logo">
                <img src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" alt=""/>
                <span>美团</span>
            </div>
            <Search className="search-input" placeholder="搜索商家或地点"  onPressEnter={onSearch} onSearch={onSearch} enterButton />
            <div className="search-nav">
                <ul><li><a href="#">美团外卖</a></li><li><a href="#"><span>猫眼电影</span></a></li><li><a href="#"><span>美团酒店</span></a></li>
                    <li><a href="#">民宿 / 公寓</a></li><li><a href="#">商家入驻</a></li><li><a href="#"><span>美团公益</span></a></li></ul>
            </div>
        </div>
    );
}

export default Searchbox;
