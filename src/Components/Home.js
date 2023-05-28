import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="bigHome">
            <div className="imgHome">
                <div className="imgDiv">
                    <div className="pizzaDiv">
                        <Link to='pizza' id="pressMe">Pizza?</Link>
                    </div>
                </div>
            </div>
            <div id="inThe" className="inTheArea">
                <h2>Food Delivery in Gotham City</h2>
                <div className="optionsDiv">
                    <div className="options">
                        <img />
                        <h3>Mcdonalds</h3>
                        <p className="discription">$ - American - FastFood - Burgers</p>
                        <div className="details">
                            <div>
                                <p>20-30 MIN</p>
                            </div>
                            <div>
                                <p>$5.99 Delivery Fee</p>
                            </div>
                        </div>
                    </div>
                    <div className="options">
                        <img />
                        <h3>Sweet Green</h3>
                        <p className="discription">$ - Healthy - </p>
                        <div className="details">
                            <div>
                                <p>20-30 MIN</p>
                            </div>
                            <div>
                                <p>$5.99 Delivery Fee</p>
                            </div>
                        </div>
                    </div>
                    <div className="options">
                        <img />
                        <h3>Shake Shake</h3>
                        <p className="discription">$ - American - FastFood - Burgers</p>
                        <div className="details">
                            <div>
                                <p>20-30 MIN</p>
                            </div>
                            <div>
                                <p>$5.99 Delivery Fee</p>
                            </div>
                        </div>
                    </div>
                    <div className="options">
                        <img />
                        <h3>Starbucks</h3>
                        <p className="discription">$ - Coffee - Pasrty - </p>
                        <div className="details">
                            <div>
                                <p>20-30 MIN</p>
                            </div>
                            <div>
                                <p>$5.99 Delivery Fee</p>
                            </div>
                        </div>
                    </div>
                    <div className="options">
                        <img />
                        <h3>Birra Tacos</h3>
                        <p className="discription">$ - Taccos - Consume - </p>
                        <div className="details">
                            <div>
                                <p>20-30 MIN</p>
                            </div>
                            <div>
                                <p>$5.99 Delivery Fee</p>
                            </div>
                        </div>
                    </div>
                    <div className="options">
                        <img />
                        <h3>Corner Deli</h3>
                        <p className="discription">$ - Sandwichs - Wraps -Salads - </p>
                        <div className="details">
                            <div>
                                <p>15-20 MIN</p>
                            </div>
                            <div>
                                <p>$5.99 Delivery Fee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}