import React,{ useState } from 'react';
import NavHead from "../static/navHead";

function SwiperMovies(props) {

    const [imgIndex, setImgIndex] = useState(0);
    const imgMessage1 = [
        {url: 'https://p0.meituan.net/movie/f84bef670a5534d9249409f921e2f33d4421909.jpg@214w_297h_1e_1c', score: 7.9, title: '007：无暇赴死'},
        {url: 'https://p0.meituan.net/movie/f84bef670a5534d9249409f921e2f33d4421909.jpg@214w_297h_1e_1c', score: 7.9, title: '007：无暇赴死'},
        {url: 'https://p0.meituan.net/movie/69d5cb67e5e457a87a3d6405bd33a6011190745.jpg@214w_297h_1e_1c', score: 7.6, title: '007：不老奇事'},
        {url: 'https://p0.meituan.net/movie/f84bef670a5534d9249409f921e2f33d4421909.jpg@214w_297h_1e_1c', score: 7.7, title: '007：无暇赴死'},
        {url: 'https://p0.meituan.net/movie/f84bef670a5534d9249409f921e2f33d4421909.jpg@214w_297h_1e_1c', score: 8.9, title: '007：无暇赴死'},
        {url: 'https://p0.meituan.net/movie/69d5cb67e5e457a87a3d6405bd33a6011190745.jpg@214w_297h_1e_1c', score: 7.9, title: '不老奇事'},
        {url: 'https://p0.meituan.net/movie/f84bef670a5534d9249409f921e2f33d4421909.jpg@214w_297h_1e_1c', score: 8.9, title: '007：无暇赴死'},
        {url: 'https://p0.meituan.net/movie/f84bef670a5534d9249409f921e2f33d4421909.jpg@214w_297h_1e_1c', score: 7.9, title: '007：无暇赴死'},
        {url: 'https://p0.meituan.net/movie/f84bef670a5534d9249409f921e2f33d4421909.jpg@214w_297h_1e_1c', score: 6.9, title: '007：无暇赴死'},
        {url: 'https://p0.meituan.net/movie/f84bef670a5534d9249409f921e2f33d4421909.jpg@214w_297h_1e_1c', score: 7.9, title: '007：无暇赴死'},
    ];
    const imgMessage2 = [
        {url: 'https://p0.meituan.net/movie/69d5cb67e5e457a87a3d6405bd33a6011190745.jpg@214w_297h_1e_1c', heat: 90763, title: '不老奇事', preSole: true},
        {url: 'https://p0.meituan.net/movie/69d5cb67e5e457a87a3d6405bd33a6011190745.jpg@214w_297h_1e_1c', heat: 90763, title: '不老奇事', preSole: true},
        {url: 'https://p0.meituan.net/movie/69d5cb67e5e457a87a3d6405bd33a6011190745.jpg@214w_297h_1e_1c', heat: 90763, title: '不老奇事', preSole: false},
        {url: 'https://p0.meituan.net/movie/69d5cb67e5e457a87a3d6405bd33a6011190745.jpg@214w_297h_1e_1c', heat: 90763, title: '不老奇事', preSole: true},
        {url: 'https://p0.meituan.net/movie/69d5cb67e5e457a87a3d6405bd33a6011190745.jpg@214w_297h_1e_1c', heat: 90763, title: '不老奇事', preSole: true},
        {url: 'https://p0.meituan.net/movie/ad773cefa3891d7f7b7fb809662a161f2613459.jpg@214w_297h_1e_1c', heat: 86454, title: '猪迪克之蓝海奇缘', preSole: true},
        {url: 'https://p0.meituan.net/movie/69d5cb67e5e457a87a3d6405bd33a6011190745.jpg@214w_297h_1e_1c', heat: 90763, title: '不老奇事', preSole: false},
        {url: 'https://p0.meituan.net/movie/69d5cb67e5e457a87a3d6405bd33a6011190745.jpg@214w_297h_1e_1c', heat: 90763, title: '不老奇事', preSole: false},
        {url: 'https://p0.meituan.net/movie/69d5cb67e5e457a87a3d6405bd33a6011190745.jpg@214w_297h_1e_1c', heat: 90763, title: '不老奇事', preSole: true},
        {url: 'https://p0.meituan.net/movie/69d5cb67e5e457a87a3d6405bd33a6011190745.jpg@214w_297h_1e_1c', heat: 90763, title: '不老奇事', preSole: true},
    ];

    return (
        <div className="swiper-movie"
             onMouseOver={(e)=>{e.currentTarget.querySelectorAll('.img-slider')[0].style.display = 'flex';e.currentTarget.querySelectorAll('.img-slider')[1].style.display = 'flex';}}
             onMouseLeave={(e)=>{e.currentTarget.querySelectorAll('.img-slider')[0].style.display = 'none';e.currentTarget.querySelectorAll('.img-slider')[1].style.display = 'none';}}>
            <NavHead
                title="猫眼电影"
                contents={['正在热映','即将上映']}
                background="#fc4258"
                handleEvent={index=>setImgIndex(Number(index))}
            />
            <div className="swiper-movie-box">
                <ul className="imgBox">
                    {
                        imgIndex === 0 ?
                            imgMessage1.map((v,i)=>(<li key={i}>
                                <img src={v.url} alt=""/>
                                <div className="imgSpan">观众评&nbsp;<span>{v.score}</span><br/><div className="imgTitle">{v.title}</div></div>
                                <div className="img-buyTicket">购票</div>
                            </li>))  :
                            imgMessage2.map(v=>(<li>
                                <img src={v.url} alt=""/>
                                <div className="imgSpan"><span>{v.heat}</span>&nbsp;人想看<br/><div className="imgTitle">{v.title}</div></div>
                                <div className="img-buyTicket" style={{display: v.preSole===true?'block':'none'}}>预售</div>
                            </li>))
                    }
                </ul>
                <span className="img-slider" onClick={(e)=>{e.currentTarget.parentNode.querySelector('.imgBox').style.transform="translate(0)"}}>&lt;</span>
                <span className="img-slider img-slider-right" onClick={(e)=>{e.currentTarget.parentNode.querySelector('.imgBox').style.transform="translate(-98%,0)"}}>&gt;</span>
            </div>
        </div>
    );
}

export default SwiperMovies;
