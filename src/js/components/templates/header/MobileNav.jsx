import React from "react";
import search from "../../../../imges/glasses.png";
import logo from "../../../../imges/example.png";
import login from "../../../../imges/login.png";
import bag from "../../../../imges/bag.png";
import { useContext } from "react";
import { ClassContext } from "../../../provider/ClassProvider";


export const MobileNav = () => {

    const { menuOpenFlag,setMenuOpenFlag }=useContext(ClassContext);

    const useClassAddMenuOpen= () =>{

        setMenuOpenFlag(!menuOpenFlag);

    }

    return (
        <>
            <header className="mobile-header">
                <div className="header-icon1-box">
                    <div className="header-btn-box">
                        <button onClick={useClassAddMenuOpen}>
                        <div></div>
                        <div></div>
                        </button>
                    </div>
                    <div className="header-search-icon-box">
                        <img src={search} alt="" />
                    </div>
                </div>
                <div className="header-icon2-box">
                        <img src={logo} alt="" />
                </div>
                <div className="header-icon3-box">
                    <div className="header-login-icon-box">
                        <img src={login} alt="" />
                    </div>
                    <div className="header-bag-icon-box">
                        <img src={bag} alt="" />
                    </div>
                </div>
            </header>
            <div className="mobile-nav">
                <nav>
                    <ul>
                        <div><li><a href="">Philpsophy</a></li></div>
                        <div><li><a href="">News</a></li></div>
                        <div><li><a href="">Look Book</a></li></div>
                        <div><li><a href="">Journal</a></li></div>
                        <div><li><a href="">Store</a></li></div>
                        <div><li><a href="">Cafe Menu</a></li></div>
                        <div><li><a href="">Omline Store</a></li></div>
                    </ul>
                </nav>
            </div>
        </>

    )
}