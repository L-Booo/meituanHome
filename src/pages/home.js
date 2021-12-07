import React from 'react';
import Header from "../compontents/home/header";
import Searchbox from "../compontents/home/searchbox";
import Bannerbox from "../compontents/home/bannerbox";
import SwiperMovies from "../compontents/home/swiperMovies";
import SwiperHotel from "../compontents/home/swiperHotel";
import FoodShow from "../compontents/home/foodShow";
import HomeBottom from "../compontents/home/homeBottom";

function Home(props) {
    return (
        <>
         <Header/>
         <Searchbox/>
         <div className="body">
             <Bannerbox/>
             <SwiperMovies />
             <SwiperHotel />
             <FoodShow />
             <HomeBottom/>
         </div>
        </>
    );
}

export default Home;
