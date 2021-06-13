import React from 'react';
import MainBanner from './MainBanner/MainBanner';
import ShopBanner from './ShopBanner/ShopBanner';
import ShopBanner1 from './ShopBanner1/ShopBanner1';
import WriteTous from './WriteTous/WriteTous';

const Landing = () => {
    return (
        <section className="landing-wrapper">
            <MainBanner/>
            <div className="landing-quote-wrapper">
                Under the endless sky and warm sun, what we are is a big family
            </div>
            <ShopBanner/>
            <ShopBanner1/>
            <ShopBanner/>
            <div className="landing-quote-wrapper">
                Under the endless sky and warm sun, what we are is a big family
            </div>
            <WriteTous/>
        </section>
    )
}

export default Landing;