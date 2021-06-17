import React from 'react';
import Curtains from '../../../assets/images/curtains.png';

const ShopBanner = () => {
    return (
        <div className="shopbanner-wrapper">
            <img alt="shop by" src={Curtains} />
            <button type="button">Shop Curtains</button>
        </div>
    )
}

export default ShopBanner
