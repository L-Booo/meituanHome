import React, { useState, } from 'react';
import { Menu } from 'antd';
import { MeituanIcon } from "../static/icons";
import { useDebounce } from "../../api";


const { SubMenu } = Menu;
const swiperImgs = [
    "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
    "https://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
    "https://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
    "https://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
    "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
];
const showSlide = ()=>{
    document.querySelectorAll('.swiper-nav')[0].style.display = "flex";
    document.querySelectorAll('.swiper-nav')[1].style.display = "flex";
};
const hideSlide = ()=>{
    document.querySelectorAll('.swiper-nav')[0].style.display = "none";
    document.querySelectorAll('.swiper-nav')[1].style.display = "none";
};

function Bannerbox(props) {

    const [category,setCategory] = useState('');
    const [imgIndex,setImgIndex] = useState(0);

    function handleMouseOver(e) {
        let id = e.target.dataset.menuId || e.target.parentNode.dataset.menuId;
        // console.log(id);
        if(id) setCategory(id.match(/sub\d+$/)[0]);
    }
    function imgCount(bool=true){
        console.log(imgIndex);
        if(bool&&imgIndex + 1 > 4){
            setImgIndex(0);
            return
        }
        if(bool===false && imgIndex-1<0){
            setImgIndex(4);
            return
        }
        setImgIndex(imgIndex + (bool?1:-1));
    }

    return (
        <div className="bannerBox">

            <div onMouseOver={useDebounce(handleMouseOver,10)} onMouseLeave={()=>setCategory('')}>
                <Menu className="banner-menu"  style={{ width: '12vw',height: '50.5vh'}} mode="vertical">
                    <h3 style={{margin: '11% 6%',fontWeight: '700'}}>全部分类</h3>
                    <SubMenu key="sub1" icon={<MeituanIcon />} className="banner-menu-li" title={<a>美食</a>}></SubMenu>
                    <SubMenu key="sub2" icon={<MeituanIcon />} className="banner-menu-li" title={<a>外卖</a>}></SubMenu>
                    <SubMenu key="sub3" icon={<MeituanIcon />} className="banner-menu-li" title={<a>酒店</a>}></SubMenu>
                    <SubMenu key="sub4" icon={<MeituanIcon />} className="banner-menu-li" title={<a>民宿</a>}></SubMenu>
                    <SubMenu key="sub5" icon={<MeituanIcon />} className="banner-menu-li" title={<a>猫眼电影</a>}></SubMenu>
                    <SubMenu key="sub6" icon={<MeituanIcon />} className="banner-menu-li" title={<span><a>火车票</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a>机票</a></span>}></SubMenu>
                    <SubMenu key="sub7" icon={<MeituanIcon />} className="banner-menu-li" title={<span><a>休闲娱乐</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a>KTV</a></span>}></SubMenu>
                    <SubMenu key="sub8" icon={<MeituanIcon />} className="banner-menu-li" title={<a>生活服务</a>}></SubMenu>
                    <SubMenu key="sub9" icon={<MeituanIcon />} className="banner-menu-li" title={<span><a>丽人</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a>美发</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a>医学美容</a></span>}></SubMenu>
                    <SubMenu key="sub10" icon={<MeituanIcon />} className="banner-menu-li" title={<span><a>结婚</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a>婚纱摄影</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a>婚宴</a></span>}></SubMenu>
                    <SubMenu key="sub11" icon={<MeituanIcon />} className="banner-menu-li" title={<span><a>亲子</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a>儿童乐园</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a>幼教</a></span>}></SubMenu>
                    <SubMenu key="sub12" icon={<MeituanIcon />} className="banner-menu-li" title={<span><a>运动健身</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a>健身中心</a></span>}></SubMenu>
                    <SubMenu key="sub13" icon={<MeituanIcon />} className="banner-menu-li" title={<span><a>家装</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a>建材</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a>家居</a></span>}></SubMenu>
                    <SubMenu key="sub14" icon={<MeituanIcon />} className="banner-menu-li" title={<span><a>学习培训</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a>音乐培训</a></span>}></SubMenu>
                    <SubMenu key="sub15" icon={<MeituanIcon />} className="banner-menu-li" title={<span><a>医疗健康</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a>宠物</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a>爱车</a></span>}></SubMenu>
                    <SubMenu key="sub16" icon={<MeituanIcon />} className="banner-menu-li" title={<span><a>酒吧</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a>密室逃脱</a></span>}></SubMenu>
                    <div className="categoryBox" style={{display: category===''?'none':''}}>
                        {
                            (function() {
                                switch (category) {
                                    case 'sub1':
                                        return (<>
                                            <div className="categoryBox_head">
                                                <h2>美食</h2><a href=""><span style={{color: '#b5b5b5',fontSize: '16px'}}>更多></span></a>
                                            </div>
                                            <hr/>
                                            <div className="categoryList">
                                                <ul style={{color: '#b5b5b5',padding: 0}}>
                                                    <li>代金券</li><li>代金券</li><li>代金券</li><li>代金券</li><li>代金券</li><li>代金券</li><li>代金券1</li>
                                                </ul>
                                            </div>
                                        </>);
                                    case 'sub2':
                                        return (<>
                                            <div className="categoryBox_head">
                                                <h2>外卖</h2><a href=""><span style={{color: '#b5b5b5',fontSize: '16px'}}>更多></span></a>
                                            </div>
                                            <hr/>
                                            <div className="categoryList">
                                                <ul style={{color: '#b5b5b5',padding: 0}}>
                                                    <li>美团外卖</li>
                                                </ul>
                                            </div>
                                        </>);
                                    case 'sub3':
                                        return (<>
                                            <div className="categoryBox_head">
                                                <h2>酒店星级</h2><a href=""><span style={{color: '#b5b5b5',fontSize: '16px'}}>更多></span></a>
                                            </div>
                                            <hr/>
                                            <div className="categoryList">
                                                <ul style={{color: '#b5b5b5',padding: 0}}>
                                                    <li>舒适</li><li>舒适</li><li>舒适</li>
                                                </ul>
                                            </div>
                                        </>);
                                    case 'sub4':
                                        return (<>
                                            <div className="categoryBox_head">
                                                <h2>热门城市</h2><a href=""><span style={{color: '#b5b5b5',fontSize: '16px'}}>更多></span></a>
                                            </div>
                                            <hr/>
                                            <div className="categoryList">
                                                <ul style={{color: '#b5b5b5',padding: 0}}>
                                                    <li>北京</li>
                                                </ul>
                                            </div>
                                            <div className="categoryBox_head">
                                                <h2>热门房源</h2><a href=""><span style={{color: '#b5b5b5',fontSize: '16px'}}>更多></span></a>
                                            </div>
                                            <hr/>
                                            <div className="categoryList">
                                                <ul style={{color: '#b5b5b5',padding: 0}}>
                                                    <li>别墅</li>
                                                </ul>
                                            </div>
                                        </>);
                                    case 'sub5':
                                        return (<>
                                            <div className="categoryBox_head">
                                                <h2>热映电影</h2><a href=""><span style={{color: '#b5b5b5',fontSize: '16px'}}>更多></span></a>
                                            </div>
                                            <hr/>
                                            <div className="categoryList">
                                                <ul style={{color: '#b5b5b5',padding: 0}}>
                                                    <li>美团外卖</li>
                                                </ul>
                                            </div>
                                        </>);
                                    case 'sub6':
                                        return (<>
                                            <div className="categoryBox_head">
                                                <h2>机票</h2><a href=""><span style={{color: '#b5b5b5',fontSize: '16px'}}>更多></span></a>
                                            </div>
                                            <hr/>
                                            <div className="categoryList">
                                                <ul style={{color: '#b5b5b5',padding: 0}}>
                                                    <li>机票</li>
                                                </ul>
                                            </div>
                                            <div className="categoryBox_head">
                                                <h2>火车票</h2><a href=""><span style={{color: '#b5b5b5',fontSize: '16px'}}>更多></span></a>
                                            </div>
                                            <hr/>
                                            <div className="categoryList">
                                                <ul style={{color: '#b5b5b5',padding: 0}}>
                                                    <li>火车票</li>
                                                </ul>
                                            </div>
                                        </>);
                                    default:
                                        return (<>
                                            <div className="categoryBox_head">
                                                <h2>{category}</h2><a href=""><span style={{color: '#b5b5b5',fontSize: '16px'}}>更多></span></a>
                                            </div>
                                        </>)
                                }
                            })()
                        }
                    </div>
                </Menu>
            </div>

            <div className="banner-center">

                <div className="banner-swiper" onMouseOver={showSlide} onMouseLeave={hideSlide}>
                    <div className="swiper-nav pre" onClick={()=>imgCount(false)}>&lt;</div>
                    <div className="swiper-nav next" onClick={()=>imgCount(true)}>&gt;</div>
                    <div className="pagationBox" >
                        {[0,1,2,3,4].map(v=>
                            v===imgIndex ?
                                (<div className="pagation active" key={v}></div>) :
                                (<div className="pagation" key={v} onClick={()=>setImgIndex(v)}></div>)
                        )}
                    </div>
                    <ul>
                        {[0,1,2,3,4].map(v=>
                            v===imgIndex ?
                                (<li className="swiper-slider" key={v+'img'}><img src={swiperImgs[v]} alt=""/></li>) :
                                (<li key={v+'img'}><img src={swiperImgs[v]} alt=""/></li>)
                        )}
                    </ul>
                </div>

                <div className="banner-center-right">
                    <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt=""/>
                </div>
                <div className="banner-center-bottom">
                    <a href="#" style={{ width: '38%', backgroundImage: 'url("http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png")'}}></a>
                    <a href="#" style={{ width: '38%', backgroundImage: 'url("http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg")'}}></a>
                    <a href="#" style={{ width: '21%', backgroundImage: 'url("http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg")'}}></a>
                </div>
            </div>

            <div className="banner-right">
                <div className="banner-user">
                    <img src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt=""/>
                    <div style={{fontSize: '16px', color: '#000'}}>Hi! 你好</div>
                    <button>注册</button>
                    <button>登录</button>
                </div>
                <div className="banner-right-bottom">
                    <img src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt=""/>
                    <div style={{marginBottom: '2%'}}>
                        <div style={{fontSize: '16px', color: '#000'}}>美团APP手机版</div>
                        <div style={{fontSize: '10px',textAlign: 'center'}}><span style={{color: 'red'}}>1元起</span>&nbsp;吃喝玩乐</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Bannerbox;
