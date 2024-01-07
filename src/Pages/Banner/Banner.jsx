import React from 'react';
import bannerImg from "../../assets/shrimp1.jpeg"

const Banner = () => {

    const bannerBg = {
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',
        // backgroundPosition: 'center',
        height: '600px',
        
    };
    return (
        <div>
            <div className="hero" style={bannerBg}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 w-[500px] text-5xl font-bold">Smart AcquaCulture System</h1>
                        <p className="mb-5">You can monitor Your Shrimp Farming Aquaculture through this System.</p>
                        <button className="btn btn-primary">Let Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;