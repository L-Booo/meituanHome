import React from 'react';

function HomeBottom(props) {
    return (
        <>
            <div className="home-bottom-nav">
                <div className="home-bottom-title">美团导航</div>
                <div className="home-bottom-content">
                    <div className="contentTitle">热门城市</div>
                    <ul><li>东莞</li><li>合肥</li><li>大连</li><li>广州</li><li>沈阳</li><li>北京</li><li>深圳</li><li>贵阳</li><li>天津</li><li>成都</li><li>东莞</li><li>青岛</li><li>重庆</li><li>长沙</li><li>济南</li></ul>
                </div>
                <div className="home-bottom-content">
                    <div className="contentTitle">热门分类</div>
                    <ul>
                        <li className="hot-span"><a href="#">酒店</a></li><li><a href="#">美食</a></li><li><a href="#">休闲娱乐</a></li><li><a href="#">运动健身</a></li><li><a href="#">生活服务</a></li><li><a href="#">上门服务</a></li><li><a href="#">购物</a></li><li><a href="#">时尚购</a></li><li><a href="#">本地购物</a></li><li><a href="#">结婚</a></li>
                        <li><a href="#">摄影写真</a></li><li><a href="#">宴会</a></li><li><a href="#">丽人</a></li><li><a href="#">母婴亲子</a></li><li><a href="#">学习培训</a></li><li><a href="#">家装</a></li><li><a href="#">汽车服务</a></li><li><a href="#">医疗</a></li><li><a href="#">宠物</a></li>
                    </ul>
                </div>
                <div className="home-bottom-content">
                    <div className="contentTitle">周边热门</div>
                    <ul style={{border: 'none'}}>
                        <li><a href="#">大厂回族自...</a></li><li><a href="#">大厂回族自...</a></li><li><a href="#">大厂回族自...</a></li><li><a href="#">大厂回族自...</a></li><li><a href="#">大厂回族自...</a></li><li><a href="#">大厂回族自...</a></li><li><a href="#">大厂回族自...</a></li><li><a href="#">大厂回族自...</a></li><li><a href="#">大厂回族自...</a></li>
                        <li><a href="#">大厂回族自...</a></li><li><a href="#">大厂回族自...</a></li><li><a href="#">大厂回族自...</a></li><li><a href="#">大厂回族自...</a></li><li><a href="#">大厂回族自...</a></li><li><a href="#">大厂回族自...</a></li><li><a href="#">大厂回族自...</a></li><li><a href="#">大厂回族自...</a></li><li><a href="#">大厂回族自...</a></li>
                    </ul>
                </div>
            </div>
            <div className="division"></div>
            <div className="home-bottom-link">
                <div className="column-link">
                    <dl><dt>用户帮助</dt><dd>申请退款</dd><dd>常见问题</dd><dd>用户协议</dd><dd>隐私政策</dd><dd>发诈骗公告</dd><dd>消费者权益保障</dd></dl>
                    <dl><dt>美团服务</dt><dd>美团外卖</dd><dd>美团酒店</dd><dd>猫眼电影</dd><dd>美团配送</dd><dd>美团云</dd><dd>大众点评</dd><dd>美团民宿</dd><dd>无人配送</dd><dd>企业用餐、企业用车、企业差旅</dd></dl>
                </div>
                <div className="column-link">
                    <dl><dt>商家合作</dt><dd>美团商家入驻(非外卖)</dd><dd>美团外卖开店申请</dd><dd>美团餐饮系统</dd><dd>美团配送合作申请</dd><dd>美团餐饮培训</dd><dd>酒店商家入驻</dd><dd>境内度假商家入驻</dd><dd>综合商家入驻</dd>
                    <dd>美团民宿房东商家入驻</dd><dd>商家开票申请</dd><dd>美团智能收银机</dd><dd>美团开放平台</dd><dd>免费使用美团排队</dd><dd>快驴进货商家入驻</dd><dd>美团闪购商家入驻</dd><dd>合作/招聘</dd></dl>
                </div>
                <div className="column-link">
                    <dl><dt>合作商招募</dt><dd>美团外卖合作商招募</dd><dd>到店餐饮合作商招募</dd><dd>到店综合业务合作商招募</dd><dd>美团联盟</dd><dd>美团收银招募线上分销商</dd><dd>美团收银合作商招募</dd><dd>美团收单合作商招募</dd><dd>美团充电宝合作商招募</dd></dl>
                    <dl><dt>美团规则</dt><dd>规则中心</dd><dd>规则目录</dd><dd>规则评议院</dd></dl>
                </div>
                <div className="column-link">
                    <dl><dt>关注美团</dt><dd>美团新浪微博</dd></dl>
                    <dl><dt>公司信息</dt><dd>关于我们</dd><dd>投资者关系</dd><dd>加入我们</dd><dd>商户诚信公约及管理办法</dd><dd>保险经纪资质</dd></dl>
                    <dl><dt>廉正举报</dt><dd>廉正举报平台</dd></dl>
                    <dl><dt>知识产权</dt><dd>知识产权维权平台</dd></dl>
                </div>
                <div className="column-link">
                    <dl><dt>消费者服务热线</dt><dd>外卖消费者：10109777</dd><dd>猫眼消费者：10109777</dd><dd>其它消费者：10109777</dd></dl>
                    <dl><dt>商家服务热线</dt><dd>外卖&餐饮商家：10105557</dd><dd>休闲娱乐、丽人、ktv、教育、结婚、亲</dd><dd>子、家装等商家：10100107</dd></dl>
                    <dl><dt>投诉举报专区</dt><dd>违法和不良信息举报电话：4006018900</dd><dd>举报邮箱：tousujubao@meituan.com</dd><dd>网上有害信息举报</dd></dl>
                </div>
            </div>
        </>
    );
}

export default HomeBottom;
