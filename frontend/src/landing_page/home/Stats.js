
function Stats() {
    return ( 
        <div className="container p-3">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 className="fs-2 mb-">Trust with confidence</h1>
                    <h2 className="fs-4">Customer first always</h2>
                    <p className="text-muted">Thats why 1.3+ customer trust Zerodha with  ₹3.5+ lack crores worth of equity investments</p>
                    <h2 className="fs-4">No spam or gimmicks</h2>
                    <p className="text-muted">No span gimmicks, span, "gamification", or annoying push notification high quality app that you use at you pace, the way you like</p>
                    <h2 className="fs-4">The Zerodha universe</h2>
                    <p className="text-muted">Not just an app, but a whole ecosystem, Our investment in 30+ fintech startups offered you tailored services specific to your needs</p>
                    <h2 className="fs-4">Do better with money</h2>
                    <p className="text-muted">with inititatives like Nudge kill switch , we don't just facilitate transactions, but actively help you better with your money</p>
                </div>
                <div className="col-6 p-5">
                    <img src="media/images/ecosystem.png" alt="" style={{width:"90%"}}/>
                    <div>
                        <a  className="mx-5" style={{textDecoration:"none"}} href="">Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href="" style={{textDecoration:"none"}}>Try kite <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;