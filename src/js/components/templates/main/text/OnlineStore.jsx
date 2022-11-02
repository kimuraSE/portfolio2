import img1 from "../../../../../imges/OnlineStore/img1.jpg";
import img2 from "../../../../../imges/OnlineStore/img2.jpg";
import img3 from "../../../../../imges/OnlineStore/img3.jpg";
import img4 from "../../../../../imges/OnlineStore/img4.jpg";
import img5 from "../../../../../imges/OnlineStore/img5.jpg";
import img6 from "../../../../../imges/OnlineStore/img6.jpg";


export const OnlineStore = () => {


    return (

        <div className="online-store-area">

            <div className="text-onlinestore">Online Store</div>

            <div className="online-store-nav">
                <div>All</div>
                <div>Women</div>
                <div>Men</div>
                <div>Kids</div>
                <div>Living</div>
                <div>Cafe</div>
                <div>Rich</div>
            </div>


            <div className="online-store-img-area">

                <div className="img-box1">

                    <div className="img1">
                        <div className="img-cover"></div>
                        <div className="img-cover-text-on-img"></div>
                        <div>$170.0</div>
                        <img src={img1} alt="" />
                    </div>

                    <div className="img-2-3-box">

                        <div className="img2">
                            <div className="img-cover"></div>
                            <div className="img-cover-text-on-img"></div>
                            <div>$100.0</div>
                            <img src={img2} alt="" />
                        </div>

                        <div className="img3">
                            <div className="img-cover"></div>
                            <div className="img-cover-text-on-img"></div>
                            <div>$120.0</div>
                            <img src={img3} alt="" />
                        </div>

                    </div>

                </div>
                <div className="img-box2">

                    <div className="img-4-5-box">

                        <div className="img4">
                            <div className="img-cover"></div>
                            <div className="img-cover-text-on-img"></div>
                            <div>$270.0</div>
                            <img src={img4} alt="" />
                        </div>

                        <div className="img5">
                            <div className="img-cover"></div>
                            <div className="img-cover-text-on-img"></div>
                            <div>$70.0</div>
                            <img src={img5} alt="" />
                        </div>

                    </div>

                    <div className="img6">
                        <div className="img-cover"></div>
                        <div className="img-cover-text-on-img"></div>
                        <div>$90.0</div>
                        <img src={img6} alt="" />
                    </div>

                </div>
            </div>

            <div className="text-onlineshoptop">Online Shop Top</div>

        </div>
    )
}




