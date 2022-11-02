import React from "react";
import glasses from "../../../../imges/glasses.png";
import login from "../../../../imges/login.png";
import bag from "../../../../imges/bag.png";
import example from "../../../../imges/example.png";



export const ExampleHeader = () =>{

    return(
        <header className="desktop-header">
            <div className="header-icon-menu">
                <div className="header-icon-box">
                    <img className="header-icon" src={glasses} alt="" />
                </div>
                <div className="header-icon-box">
                    <img className="header-icon" src={login} alt="" />
                </div>
                <div className="header-icon-box">
                <img className="header-icon" src={bag} alt="" />
                </div>
            </div>

            <div className="header-logo">
                <img src={example} alt="" />
            </div>

            <div className="header-nav">
                <nav>
                    <ul>

                        <div><li><a href="">Philpsophy</a></li></div>
                        <div><li><a href="">News</a></li></div>
                        <div><li><a href="">Look Book</a></li></div>
                        <div><li><a href="">Journal</a></li></div>
                        <div><li><a href="">Store</a></li></div>
                        <div><li><a href="">Cafe Menu</a></li></div>
                        <div><li><a href="">Online Store</a></li></div>

                    </ul>
                </nav>
            </div>


        </header>
    )
}