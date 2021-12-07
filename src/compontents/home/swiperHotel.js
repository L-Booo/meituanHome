import React,{ useState }from 'react';
import NavHead from "../static/navHead";

function SwiperHotel(props) {

    const [ placeIndex, setPlaceIndex ] = useState(0);

    const getPlace = (function(){
        let index = Number(placeIndex);
        switch(index){
            case (0):
                return 'tianjin';
            case (1):
                return 'jinan';
            case (2):
                return 'dalian';
            case (3):
                return 'taiyuan';
            default:
                return 'tianjin';
        }
    })();
    const hotelMessage = {
        tianjin: [
            { img: 'https://img.meituan.net/phoenix/bc2d90e10d058aab0a29a51f1e43368a83312.jpg@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/57571b60be84088dd22f651d8841de1428472.jpg@200w_200h_1e_1c', title: '森林逸城ins\n近海公寓', tags: '整套一居室·可住2人\n|\n开发区', price: 99 },
            { img: 'https://img.meituan.net/phoenix/bc2d90e10d058aab0a29a51f1e43368a83312.jpg@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/57571b60be84088dd22f651d8841de1428472.jpg@200w_200h_1e_1c', title: '森林逸城ins\n近海公寓', tags: '整套一居室·可住2人\n|\n开发区', price: 99 },
            { img: 'https://img.meituan.net/phoenix/bc2d90e10d058aab0a29a51f1e43368a83312.jpg@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/57571b60be84088dd22f651d8841de1428472.jpg@200w_200h_1e_1c', title: '森林逸城ins\n近海公寓', tags: '整套一居室·可住2人\n|\n开发区', price: 99 },
            { img: 'https://img.meituan.net/phoenix/bc2d90e10d058aab0a29a51f1e43368a83312.jpg@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/57571b60be84088dd22f651d8841de1428472.jpg@200w_200h_1e_1c', title: '森林逸城ins\n近海公寓', tags: '整套一居室·可住2人\n|\n开发区', price: 99 },
            { img: 'https://img.meituan.net/phoenix/bc2d90e10d058aab0a29a51f1e43368a83312.jpg@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/57571b60be84088dd22f651d8841de1428472.jpg@200w_200h_1e_1c', title: '森林逸城ins\n近海公寓', tags: '整套一居室·可住2人\n|\n开发区', price: 99 },
            { img: 'https://img.meituan.net/phoenix/bc2d90e10d058aab0a29a51f1e43368a83312.jpg@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/57571b60be84088dd22f651d8841de1428472.jpg@200w_200h_1e_1c', title: '森林逸城ins\n近海公寓', tags: '整套一居室·可住2人\n|\n开发区', price: 99 },
        ],
        jinan: [
            { img: 'https://img.meituan.net/phoenix/bdf029e9c7b348191fcd65b22bfee0584111908.jpg@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/e4b77fedab69dcd601a98d12e0a8745518272.jpg@200w_200h_1e_1c', title: '《漫游》《若初》坚果投影/大明湖/火车站/芙蓉街/趵突泉', tags: '整套一居室·可住2人\n|\n大明湖/大明湖站', price: 188 },
            { img: 'https://img.meituan.net/phoenix/bdf029e9c7b348191fcd65b22bfee0584111908.jpg@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/e4b77fedab69dcd601a98d12e0a8745518272.jpg@200w_200h_1e_1c', title: '《漫游》《若初》坚果投影/大明湖/火车站/芙蓉街/趵突泉', tags: '整套一居室·可住2人\n|\n大明湖/大明湖站', price: 188 },
            { img: 'https://img.meituan.net/phoenix/bdf029e9c7b348191fcd65b22bfee0584111908.jpg@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/e4b77fedab69dcd601a98d12e0a8745518272.jpg@200w_200h_1e_1c', title: '《漫游》《若初》坚果投影/大明湖/火车站/芙蓉街/趵突泉', tags: '整套一居室·可住2人\n|\n大明湖/大明湖站', price: 188 },
            { img: 'https://img.meituan.net/phoenix/bdf029e9c7b348191fcd65b22bfee0584111908.jpg@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/e4b77fedab69dcd601a98d12e0a8745518272.jpg@200w_200h_1e_1c', title: '《漫游》《若初》坚果投影/大明湖/火车站/芙蓉街/趵突泉', tags: '整套一居室·可住2人\n|\n大明湖/大明湖站', price: 188 },
            { img: 'https://img.meituan.net/phoenix/bdf029e9c7b348191fcd65b22bfee0584111908.jpg@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/e4b77fedab69dcd601a98d12e0a8745518272.jpg@200w_200h_1e_1c', title: '《漫游》《若初》坚果投影/大明湖/火车站/芙蓉街/趵突泉', tags: '整套一居室·可住2人\n|\n大明湖/大明湖站', price: 188 },
            { img: 'https://img.meituan.net/phoenix/bdf029e9c7b348191fcd65b22bfee0584111908.jpg@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/e4b77fedab69dcd601a98d12e0a8745518272.jpg@200w_200h_1e_1c', title: '《漫游》《若初》坚果投影/大明湖/火车站/芙蓉街/趵突泉', tags: '整套一居室·可住2人\n|\n大明湖/大明湖站', price: 188 },
        ],
        dalian: [
            { img: 'http://p0.meituan.net/iphoenix/57900f06f0a60a5f04266006464387d83138828.jpg@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/7c13dbff6076017a3c5073cf9f464ad113567.jpg@200w_200h_1e_1c', title: '温馨大床房 星海广场欣达公寓，其他房型可与店主联系', tags: '整套一居室·可住2人\n|\n星海广场、大连森林动物园', price: 91 },
            { img: 'http://p0.meituan.net/iphoenix/57900f06f0a60a5f04266006464387d83138828.jpg@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/7c13dbff6076017a3c5073cf9f464ad113567.jpg@200w_200h_1e_1c', title: '温馨大床房 星海广场欣达公寓，其他房型可与店主联系', tags: '整套一居室·可住2人\n|\n星海广场、大连森林动物园', price: 91 },
            { img: 'http://p0.meituan.net/iphoenix/57900f06f0a60a5f04266006464387d83138828.jpg@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/7c13dbff6076017a3c5073cf9f464ad113567.jpg@200w_200h_1e_1c', title: '温馨大床房 星海广场欣达公寓，其他房型可与店主联系', tags: '整套一居室·可住2人\n|\n星海广场、大连森林动物园', price: 91 },
            { img: 'http://p0.meituan.net/iphoenix/57900f06f0a60a5f04266006464387d83138828.jpg@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/7c13dbff6076017a3c5073cf9f464ad113567.jpg@200w_200h_1e_1c', title: '温馨大床房 星海广场欣达公寓，其他房型可与店主联系', tags: '整套一居室·可住2人\n|\n星海广场、大连森林动物园', price: 91 },
            { img: 'http://p0.meituan.net/iphoenix/57900f06f0a60a5f04266006464387d83138828.jpg@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/7c13dbff6076017a3c5073cf9f464ad113567.jpg@200w_200h_1e_1c', title: '温馨大床房 星海广场欣达公寓，其他房型可与店主联系', tags: '整套一居室·可住2人\n|\n星海广场、大连森林动物园', price: 91 },
            { img: 'http://p0.meituan.net/iphoenix/57900f06f0a60a5f04266006464387d83138828.jpg@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/7c13dbff6076017a3c5073cf9f464ad113567.jpg@200w_200h_1e_1c', title: '温馨大床房 星海广场欣达公寓，其他房型可与店主联系', tags: '整套一居室·可住2人\n|\n星海广场、大连森林动物园', price: 91 },
        ],
        taiyuan: [
            { img: 'http://p0.meituan.net/phxpdg/d60838759762540e467f6f5c343002861640053.png@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/96244dd6f51de2b967cabccf9f9937f732651.jpeg@200w_200h_1e_1c', title: '【美团民宿】一出门就是公园房~滨河公园森林公园，近在咫尺', tags: '整套一居室·可住2人\n|\n大同路', price: 108 },
            { img: 'http://p0.meituan.net/phxpdg/d60838759762540e467f6f5c343002861640053.png@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/96244dd6f51de2b967cabccf9f9937f732651.jpeg@200w_200h_1e_1c', title: '【美团民宿】一出门就是公园房~滨河公园森林公园，近在咫尺', tags: '整套一居室·可住2人\n|\n大同路', price: 108 },
            { img: 'http://p0.meituan.net/phxpdg/d60838759762540e467f6f5c343002861640053.png@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/96244dd6f51de2b967cabccf9f9937f732651.jpeg@200w_200h_1e_1c', title: '【美团民宿】一出门就是公园房~滨河公园森林公园，近在咫尺', tags: '整套一居室·可住2人\n|\n大同路', price: 108 },
            { img: 'http://p0.meituan.net/phxpdg/d60838759762540e467f6f5c343002861640053.png@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/96244dd6f51de2b967cabccf9f9937f732651.jpeg@200w_200h_1e_1c', title: '【美团民宿】一出门就是公园房~滨河公园森林公园，近在咫尺', tags: '整套一居室·可住2人\n|\n大同路', price: 108 },
            { img: 'http://p0.meituan.net/phxpdg/d60838759762540e467f6f5c343002861640053.png@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/96244dd6f51de2b967cabccf9f9937f732651.jpeg@200w_200h_1e_1c', title: '【美团民宿】一出门就是公园房~滨河公园森林公园，近在咫尺', tags: '整套一居室·可住2人\n|\n大同路', price: 108 },
            { img: 'http://p0.meituan.net/phxpdg/d60838759762540e467f6f5c343002861640053.png@740w_416h_1e_1c', avatar: 'https://img.meituan.net/avatar/96244dd6f51de2b967cabccf9f9937f732651.jpeg@200w_200h_1e_1c', title: '【美团民宿】一出门就是公园房~滨河公园森林公园，近在咫尺', tags: '整套一居室·可住2人\n|\n大同路', price: 108 },
        ],
    };

    return (
        <div className="swiper-hotel">
            <NavHead
                title="推荐民宿"
                contents={['天津','济南','大连','太原','石家庄','秦皇岛','呼和浩特','潍坊','唐山','泰安']}
                handleEvent={index=>setPlaceIndex(index)}
            />
            <div className="hotel-box">
                <ul>
                    {
                        hotelMessage[getPlace] ? hotelMessage[getPlace].map((v,i)=>(
                            <li key={i} className="hotel-card">
                                <img src={v.img} alt=""/>
                                <div className="hotel-title">{v.title}</div>
                                <div className="hotel-tags">{v.tags}</div>
                                <div className="home-price">￥<span>{v.price}</span></div>
                                <div className="hotel-card-head">
                                    <img src={v.avatar} alt=""/>
                                </div>
                            </li>
                        )): null
                    }
                </ul>
            </div>
        </div>
    );
}

export default SwiperHotel;
