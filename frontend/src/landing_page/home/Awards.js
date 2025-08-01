
function Awards () {
    return (  
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" alt="" />
                </div>
                <div className="col-6 p-5 mt-3">
                    <h1>Largest stock broker in India</h1>
                    <p className="mb-5">2+ million Zerodha clients contribute over 15%  of all retail order volumes in india daily by traiding and investing in</p>
                    <div className="row">
                        <div className="col-6">
                             <ul>
                        <li>
                            <p>Future and options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency derivatives</p>
                        </li>
                    </ul>
                        </div>
                        <div className="col-6">
                        <ul>
                            <li>
                                <p>Stocks and IPOs</p>
                            </li>
                            <li>
                                <p>Direct mutual funds</p>
                            </li>
                            <li>
                                <p>Bonds and governments securities</p>
                            </li>
                        </ul>
                        </div>
                    </div>
                   <img src="media/images/pressLogos.png" alt="" style={{width:"90%"}} />
                </div>
            </div>
        </div>
    );
}

export default Awards;