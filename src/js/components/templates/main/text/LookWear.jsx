import img1 from "../../../../../imges/LookWear/img1.jpg";
import img2 from "../../../../../imges/LookWear/img2.jpg";
import img3 from "../../../../../imges/LookWear/img3.jpg";


export const LookWear = () =>{

    return (

        <div className="lookwear-area">

            <div>Look Wear</div>

            <div className="lookwear-img-box">

                <div className="lookwear-img">
                    <div>
                        <div className="img-cover"></div>
                        <img src={img1} alt="" />
                    </div>
                    <div className="lookwear-text">
                        Men  <br /> Aug 29.2022
                    </div>
                </div>

                <div className="lookwear-img">
                    <div>
                        <div className="img-cover"></div>
                        <img src={img2} alt="" />
                    </div>
                    <div className="lookwear-text">
                        Women  <br /> Aug 29.2022
                    </div>
                </div>

                <div className="lookwear-img">
                    <div>
                        <div className="img-cover"></div>
                        <img src={img3} alt="" />
                    </div>
                    <div className="lookwear-text">
                        Men  <br /> Aug 29.2022
                    </div>
                </div>

            </div>

            <div className="look-wear-index">
                Look Wear Index
            </div>

        </div>
    )
}