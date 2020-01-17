import React from 'react';

/**
 * Testimonials
 */
function Testimonial() {
    return (
        <div className="container-fluid bg-3 text-center">    
            <h3 className="margin">Where To Find Me?</h3>
            <div className="row">
                <div className="col-sm-4">
                    <h3>Invest</h3>
                    <p>Exchange and transact Bitcoin, Ethereum, Bitcoin Cash, USD PAX, and Stellar Lumens using the world’s most trusted and secure cryptocurrency wallet..</p>
                </div>

                <div className="col-sm-4"> 
                    <h3>Explore</h3>
                    <p>Use the most popular block explorer to search and verify transactions on the Bitcoin, Ethereum, and Bitcoin Cash blockchains.</p>
                </div>

                <div className="col-sm-4"> 
                    <h3>Analyze</h3>
                    <p>Stay on top of Bitcoin and other top cryptocurrency prices, news, and market information.</p>
                </div>
            </div>
        </div>
    )
} 
export default Testimonial;