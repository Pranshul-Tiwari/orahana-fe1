import React from 'react';
import { Link } from 'react-router-dom';
import { UncontrolledCollapse } from 'reactstrap';
import ReactSlider from 'react-slider';

const ApplyFilters = () => {
    return (
        <div className="applyfilters-wrapper">

            {/* <!--category-productsr--> */}
            <div className="category-products">
                <h2>Category</h2>
                <div className="cp-wrapper cp-section-one">
                    <button type="button" id="sportsWear">
                        Sportswear
                        <i className="fa fa-chevron-right"></i>
                    </button>
                    <UncontrolledCollapse className="cp-sublist" toggler="#sportsWear">
                        <ul>
                            <li><Link to="">Nike </Link></li>
                            <li><Link to="">Under Armour </Link></li>
                            <li><Link to="">Adidas </Link></li>
                            <li><Link to="">Puma</Link></li>
                            <li><Link to="">ASICS </Link></li>
                        </ul>
                    </UncontrolledCollapse>
                </div>
                <div className="cp-wrapper cp-section-two">
                    <button type="button" id="mensWear">
                        Mens
                        <i className="fa fa-chevron-right"></i>
                    </button>
                    <UncontrolledCollapse className="cp-sublist" toggler="#mensWear">
                        <ul>
                            <li><Link to="">Fendi</Link></li>
                            <li><Link to="">Guess</Link></li>
                            <li><Link to="">Valentino</Link></li>
                            <li><Link to="">Dior</Link></li>
                            <li><Link to="">Versace</Link></li>
                            <li><Link to="">Armani</Link></li>
                            <li><Link to="">Prada</Link></li>
                            <li><Link to="">Dolce and Gabbana</Link></li>
                            <li><Link to="">Chanel</Link></li>
                            <li><Link to="">Gucci</Link></li>
                        </ul>
                    </UncontrolledCollapse>
                </div>
                <div className="cp-wrapper cp-section-three">
                    <button type="button" id="womensWear">
                        Womens
                        <i className="fa fa-chevron-right"></i>
                    </button>
                    <UncontrolledCollapse className="cp-sublist" toggler="#womensWear">
                        <ul>
                            <li><Link to="">Fendi</Link></li>
                            <li><Link to="">Guess</Link></li>
                            <li><Link to="">Valentino</Link></li>
                            <li><Link to="">Dior</Link></li>
                            <li><Link to="">Versace</Link></li>
                        </ul>
                    </UncontrolledCollapse>
                </div>
                <div className="cp-wrapper cp-section-three">
                    <button type="button" id="kidsWear">
                        Kids
                    </button>
                </div>
                <div className="cp-wrapper cp-section-three">
                    <button type="button" id="fashionWear">
                        Fashion
                    </button>
                </div>
                <div className="cp-wrapper cp-section-four">
                    <button type="button" id="householdWear">
                        Households
                    </button>
                </div>
                <div className="cp-wrapper cp-section-five">
                    <button type="button" id="interiorWear">
                        Interiors
                    </button>
                </div>
                <div className="cp-wrapper cp-section-six">
                    <button type="button" id="clothingWear">
                        Clothing
                    </button>
                </div>
                <div className="cp-wrapper cp-section-seven">
                    <button type="button" id="bagsWear">
                        Bags
                    </button>
                </div>
                <div className="cp-wrapper cp-section-eight">
                    <button type="button" id="shoeWear">
                        Shoes
                    </button>
                </div>
            </div>
            {/* <!--/category-productsr--> */}
            
            {/* <!--brands_products--> */}
            <div className="brands-products">
                <h2>Brands</h2>
                <div className="brands-name">
                    <ul>
                        <li><button type="button"> <span className="pull-right">(50)</span>Acne</button></li>
                        <li><button type="button"> <span className="pull-right">(56)</span>Grüne Erde</button></li>
                        <li><button type="button"> <span className="pull-right">(27)</span>Albiro</button></li>
                        <li><button type="button"> <span className="pull-right">(32)</span>Ronhill</button></li>
                        <li><button type="button"> <span className="pull-right">(5)</span>Oddmolly</button></li>
                        <li><button type="button"> <span className="pull-right">(9)</span>Boudestijn</button></li>
                        <li><button type="button"> <span className="pull-right">(4)</span>Rösch creative culture</button></li>
                    </ul>
                </div>
            </div>
            {/* <!--/brands_products--> */}
            
            {/* <!--price-range--> */}
            <div className="price-range">
                <h2>Price Range</h2>
                <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    defaultValue={[0, 50000]}
                    ariaLabel={['Lower thumb', 'Upper thumb']}
                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                    pearling
                    minDistance={10}
                />
            </div>
            {/* <!--/price-range--> */}
        </div>
    )
}

export default ApplyFilters
