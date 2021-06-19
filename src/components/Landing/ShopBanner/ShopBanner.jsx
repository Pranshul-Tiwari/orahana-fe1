import React from 'react';
import { Link } from 'react-router-dom';
import Curtains from '../../../assets/images/curtains.png';

const ShopBanner = () => {
    return (
        <div className="shopbanner-wrapper">
            <img alt="shop by" src={Curtains} />
            <button type="button">
                <Link to="/products-filter">go to my surveys</Link>
            </button>
        </div>
    )
}

export default ShopBanner
