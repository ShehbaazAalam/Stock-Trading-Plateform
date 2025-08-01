import React from 'react'

function Pricing() {
    return ( 
        <div className='container mb-5'>
            <div className="row">
                <div className="col-4">
                    <h1 className='mb-3 fs-2'>Unbeatable Pricing</h1>
                    <p>we pioneered the concept of discount broking and price transparency in india. Flat fees and no hidden charges</p>
                     <a  className="mx-5" style={{textDecoration:"none"}} href="">See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6 ">
                    <div className="row text-center">
                        <div className="col p-2 border">
                            <h1 className='mb-3'>₹0</h1>
                            <p>free equity delivery and <br /> mutuatl funds</p>
                        </div>
                        <div className="col p-2 border">
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;