import React from 'react';
import ApplyFilters from './ApplyFilters/ApplyFilters';
import ProductsShow from './ProductsShow/ProductsShow';

const ProductsFilter = () => {
    return (
        <section className="filterspage-wrapper">
            <div className="fp-left">
                <ApplyFilters></ApplyFilters>
            </div>
            <div className="fp-right">
                <ProductsShow></ProductsShow>
            </div>
        </section>
    )
}

export default ProductsFilter
