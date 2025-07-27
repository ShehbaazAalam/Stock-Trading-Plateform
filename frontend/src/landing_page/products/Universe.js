import React from 'react';

function Universe() {
    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>
            </div>

            <div className="row text-center">
                <div className="col-4 p-3 mt-5">
                    <img src="/media/images/smallcaseLogo.png" alt="Smallcase" style={{ width: "150px", height: "auto" }} />
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="/media/images/streakLogo.png" alt="Streak" style={{ width: "150px", height: "auto" }} />
                    <p className="text-small text-muted">Algo and strategy platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="/media/images/sensibullLogo.svg" alt="Sensibull" style={{ width: "150px", height: "auto" }} />
                    <p className="text-small text-muted">Options Trading Platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="/media/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse" style={{ width: "150px", height: "auto" }} />
                    <p className="text-small text-muted">Asset Management</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="/media/images/goldenpiLogo.png" alt="GoldenPi" style={{ width: "150px", height: "auto" }} />
                    <p className="text-small text-muted">Bonds Trading Platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="/media/images/dittoLogo.png" alt="Ditto" style={{ width: "150px", height: "auto" }} />
                    <p className="text-small text-muted">Insurance</p>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"18%", margin: "0 auto"}}>Signup Now</button>
                </div>

            </div>
        </div>
    );
}

export default Universe;
