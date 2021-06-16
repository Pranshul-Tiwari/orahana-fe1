import React from 'react';
import Cushions from '../../../assets/images/cushions.JPG';

const ShopBanner1 = () => {
    return (
        <div className="shopbanner1-wrapper">
            <div className="row">
                <div className="col-4">
                    <div className="shopbanner1-content">
                        <img alt="shop by" src={Cushions} />
                        <button type="button">Shop Curtains</button>
                    </div>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-center">
                    Under the endless sky and warm sun, what we are is a big family
                </div>
                <div className="col-4">
                    <div className="shopbanner1-content">
                        <img alt="shop by" src={Cushions} />
                        <button type="button">Shop Curtains</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopBanner1
