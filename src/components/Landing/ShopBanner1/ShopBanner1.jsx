import React from 'react';
import Cushions from '../../../assets/images/cushions.JPG';

const ShopBanner1 = () => {
    return (
        <div className="shopbanner1-wrapper">
            <ul className="bannerlist-wrapper">
                <li>
                    <div className="shopbanner1-content">
                        <img alt="shop by" src={Cushions} />
                        <button type="button">Shop Curtains</button>
                    </div>
                </li>
                <li className="d-flex align-items-center justify-content-center">
                    Under the endless sky and warm sun, what we are is a big family
                </li>
                <li>
                    <div className="shopbanner1-content">
                        <img alt="shop by" src={Cushions} />
                        <button type="button">Shop Curtains</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ShopBanner1
