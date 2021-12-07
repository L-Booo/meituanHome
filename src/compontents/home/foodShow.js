import React from 'react';
import { Rate } from 'antd';
import NavHead from "../static/navHead";

function FoodShow(props) {

    const shopsInfo = [
        { shopId: '001', shopTitle: '蝎王府羊蝎子 （北大地店）', shopStarts: 4.5, comments: 440, shopAddress: '北大地/王丰路', shopPrice: 96.9, img: 'https://p1.meituan.net/biztone/17c0168602fda2c6726ee523d125cf5d41939.jpg@214w_120h_1e_1c' },
        { shopId: '002',  shopTitle: '蝎王府羊蝎子 （北大地店）', shopStarts: 3.5, comments: 466, shopAddress: '北大地/王丰路', shopPrice: 96.9, img: 'https://p1.meituan.net/biztone/17c0168602fda2c6726ee523d125cf5d41939.jpg@214w_120h_1e_1c' },
        { shopId: '003',  shopTitle: '蝎王府羊蝎子 （北大地店）', shopStarts: 3.5, comments: 500, shopAddress: '北大地/王丰路', shopPrice: 9.9, img: 'https://p1.meituan.net/biztone/17c0168602fda2c6726ee523d125cf5d41939.jpg@214w_120h_1e_1c' },
        { shopId: '004',  shopTitle: '蝎王府羊蝎子 （北大地店）', shopStarts: 4.5, comments: 267, shopAddress: '北大地/王丰路', shopPrice: 96.9, img: 'https://p1.meituan.net/biztone/17c0168602fda2c6726ee523d125cf5d41939.jpg@214w_120h_1e_1c' },
        { shopId: '005',  shopTitle: '蝎王府羊蝎子 （北大地店）', shopStarts: 4.0, comments: 466, shopAddress: '北大地/王丰路', shopPrice: 6.9, img: 'https://p1.meituan.net/biztone/17c0168602fda2c6726ee523d125cf5d41939.jpg@214w_120h_1e_1c' },
        { shopId: '006',  shopTitle: '胡椒厨房（金源店）', shopStarts: 4.0, comments: 620, shopAddress: '远大路', shopPrice: 39.0, img: 'https://p0.meituan.net/bbia/66cb92af913477b3eadf8cad5b49e2e7197848.png@214w_120h_1e_1c' },
        { shopId: '007',  shopTitle: '胡椒厨房（金源店）', shopStarts: 4.0, comments: 600, shopAddress: '远大路', shopPrice: 39.0, img: 'https://p0.meituan.net/bbia/66cb92af913477b3eadf8cad5b49e2e7197848.png@214w_120h_1e_1c' },
        { shopId: '008',  shopTitle: '胡椒厨房（金源店）', shopStarts: 4.4, comments: 500, shopAddress: '远大路', shopPrice: 39.0, img: 'https://p0.meituan.net/bbia/66cb92af913477b3eadf8cad5b49e2e7197848.png@214w_120h_1e_1c' },
        { shopId: '009',  shopTitle: '胡椒厨房（金源店）', shopStarts: 4.2, comments: 560, shopAddress: '远大路', shopPrice: 39.0, img: 'https://p0.meituan.net/bbia/66cb92af913477b3eadf8cad5b49e2e7197848.png@214w_120h_1e_1c' },
        { shopId: '010',  shopTitle: '胡椒厨房（金源店）', shopStarts: 3.8, comments: 600, shopAddress: '远大路', shopPrice: 39.0, img: 'https://p0.meituan.net/bbia/66cb92af913477b3eadf8cad5b49e2e7197848.png@214w_120h_1e_1c' },
    ];

    return (
        <div className="home_foodBox">
            <NavHead
                title="猜你喜欢"
                contents={["为你甄选最合适的"]}
                background="#4cb7d4"
                moreHidden
            />
            <div className="foodContents">
                {
                    shopsInfo.map(v=>(
                        <div className="foodCard" key={v.shopId}>
                            <img src={v.img} alt=""/>
                            <div className={v.shopTitle}>东方名剪 （光彩店）</div>
                            <Rate disabled defaultValue={Number(v.shopStarts)} allowHalf={true} className="food-stars" /><span className="lightText">{Number(v.comments)}个评价</span>
                            <div className="lightText">{v.shopAddress}</div>
                            <div className="home-price">￥<span>{v.shopPrice}</span>起</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FoodShow;
