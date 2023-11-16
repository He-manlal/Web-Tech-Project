import React from 'react';
import SideBar from './SideBar';

const Product = () => {
    return (
        <div style={{ display: 'flex' }}>
            <SideBar />
            <div style={{ flex: 1 }}>
                <h1> commodo sit amet vehicula quis, venenatis sit amet nisi. Morbi et lorem bibendum, feugiat augue vitae, efficitur arcu. Donec viverra nisl ut sollicitudin convallis. Vivamus finibus mi non est scelerisque, nec finibus dolor aliquam. In scelerisque nulla in iaculis faucibus. Vestibulum et orci venenatis, rhoncus neque vitae, consectetur ipsum. Quisque non erat velit. Suspendisse consequat maximus rhoncus. Quisque a hendrerit dui. Duis lacinia pellentesque sem.</h1>
                {/* Other content for the product page */}
            </div>
        </div>

    );
};

export default Product;

