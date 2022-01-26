import React from 'react';
import Header from '../../Shared/Header/Header';
const Banner = () => {
    return (
        <div>
            <div className="">
                <Header />
                <img style={{marginTop: '-57px', maxHeight: "650px"}} className="w-100 justify-items-center" src="https://i.ibb.co/hdgvkfq/banner.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;