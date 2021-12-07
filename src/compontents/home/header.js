import React,{ useState } from 'react';


function Header(props) {

    const [index,setIndex] = useState(0);

    return (
        <div className="header">
            <div className="leftHeader">
                <svg t="1635261878789" className="icon-header" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="2436" width="16" height="16">
                    <path
                        d="M511.954463 250.971985c-73.709769 0-133.669372 58.877969-133.669372 131.23288 0 72.339562 59.959603 131.157155 133.669372 131.157155 73.707722 0 133.639696-58.817594 133.639696-131.157155C645.594159 309.84893 585.662185 250.971985 511.954463 250.971985M511.954463 455.252555c-40.97625 0-74.311473-32.779567-74.311473-73.078389 0-40.284495 33.334199-73.077366 74.311473-73.077366 40.945551 0 74.278727 32.79287 74.278727 73.077366C586.23319 422.472987 552.900014 455.252555 511.954463 455.252555"
                        p-id="2437" fill="#999999"></path>
                    <path
                        d="M824.811914 401.684522c0-169.441087-140.347468-307.277362-312.857451-307.277362-172.479283 0-312.768423 137.836275-312.768423 307.277362 0 132.88552 192.606693 400.645866 275.461749 509.584997 8.724709 11.492752 22.683628 18.321274 37.305651 18.321274 14.5903 0 28.580942-6.828522 37.334303-18.321274C632.11517 802.331411 824.811914 534.602787 824.811914 401.684522M516.887822 864.759229l-4.933359 6.557346-4.934382-6.557346C350.606705 656.92881 253.370103 479.470119 253.370103 401.684522c0-140.062989 115.979478-254.012228 258.58436-254.012228 142.575206 0 258.552637 113.949238 258.552637 254.012228C770.537799 479.499795 673.36055 656.92881 516.887822 864.759229"
                        p-id="2438" fill="#999999"></path>
                </svg>
                <span>北京</span>&nbsp;
                <a className="replace" href="/changecity">切换地区</a>&nbsp;
                <div>[&nbsp;
                    <a href="#">门头沟区</a>&nbsp;&nbsp;
                    <a href="#">廊坊</a>&nbsp;&nbsp;
                    <a href="#">大厂回族自治县</a>&nbsp;]
                </div>&emsp;&emsp;
                <a href="#" ><span style={{color: '#fe8c00'}}>立即登录</span></a>&emsp;
                <a href="#">注册</a>&emsp;
            </div>
            <div className="rightHeader">
                <p onMouseEnter={e=>{setIndex(1);}} style={{display: index===1?'none':'block'}}>我的美团</p>
                <div className="dropdown dropdown-border dropdown-position" style={{display: index===1?'flex':'none'}} onMouseLeave={()=>{setIndex(0);}}>
                    <a href="#">我的美团</a><a href="#">我的订单</a><a href="#">我的收藏</a><a>抵用券</a><a href="#">账户设置</a>
                </div>
                <p><a href="#">手机APP</a></p>
                <p onMouseEnter={e=>{setIndex(3);}} style={{display: index===3?'none':'block'}}>商家中心</p>
                <div className="dropdown dropdown-position" style={{display: index===3?'flex':'none'}} onMouseLeave={()=>{setIndex(0);}}>
                    <a className="dropdown-head cursor-text">商家中心</a>
                    <div className="dropdown business-dropdown">
                        <a href="#">美团餐饮客户中心</a><a href="#">登录商家中心</a><a href="#">美团智能收银</a><a href="#">我要合作</a><a href="#">手机免费开店</a>
                        <a href="#">到店综合业务招募</a><a href="#">餐饮合作商招募</a><a href="#">商家申请开票</a><a href="#">免费合作美团排队</a>
                    </div>
                </div>
                <p onMouseEnter={e=>{setIndex(4);}} style={{display: index===4?'none':'block'}}>美团规则</p>
                <div className="dropdown dropdown-border dropdown-position" style={{display: index===4?'flex':'none'}} onMouseLeave={()=>{setIndex(0);}}><a style={{color: '#fe8c00'}}>美团规则</a><a href="#">规则中心</a><a href="#">规则目录</a><a href="#">规则评议院</a></div>
                <p onMouseEnter={e=>{setIndex(5);}} style={{display: index===5?'none':'block'}}>网站导航</p>
                <div className="dropdown dropdown-position" style={{display: index===5?'flex':'none',zIndex: 9}} onMouseLeave={()=>{setIndex(0);}}>
                    <a className="dropdown-head cursor-text">网站导航</a>
                    <div className="dropdown-web-nav dropdown-border">
                        <div className="dropdown-card">
                            <h2 className="dropdown-title">酒店旅游</h2>
                            <div className="dropdown-card-contents" style={{ gridTemplateColumns: 'auto auto auto'}}>
                                <a>国际机票</a><a>国际机票</a><a>国际机票</a><a>国际机票</a><a>国际机票</a><a>国际机票</a><a>国际机票</a><a>国际机票</a>
                            </div>
                        </div>
                        <div className="dropdown-card">
                            <h2 className="dropdown-title">吃美食</h2>
                            <div className="dropdown-card-contents" style={{ gridTemplateColumns: 'auto auto'}}>
                                <a>国际机票</a><a>国际机票</a><a>国际机票</a><a>国际机票</a><a>国际机票</a><a>国际机票</a><a>国际机票</a><a>国际机票</a>
                            </div>
                        </div>
                        <div className="dropdown-card" style={{transform: 'translate(-25%,0)'}}>
                            <h2 className="dropdown-title">看电影</h2>
                            <div className="dropdown-card-contents" style={{ gridTemplateColumns: 'auto'}}>
                                <a>国际机票</a><a>国际机票</a><a>国际机票</a><a>国际机票</a><a>国际机票</a><a>国际机票</a><a>国际机票</a>
                            </div>
                        </div>
                        <div className="dropdown-card" style={{transform: 'translate(-20%,0)'}}>
                            <h2 className="dropdown-title">手机应用</h2>
                            <div className="dropdown-card-app">
                                <a href="#"><img src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" alt=""/></a>
                                <a href="#"><img src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" alt=""/></a>
                                <a href="#"><img src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" alt=""/></a>
                                <a href="#"><img src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" alt=""/></a>
                                <a href="#"><img src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
