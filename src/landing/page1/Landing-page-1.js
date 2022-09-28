import React from "react";
import logo from '../../assets/logo.jpg';
import phone1 from '../../assets/phone1.png'
import './Landing-page-1.css';


export default function LandingPage1(){
    return(
        <div className="LandingPage1">
            <div className="Navigation">
                <ul className="Navigation-List">
                    <li className="Navigation-Item">
                        <a className="Navigation-Link" href="#">Service</a>
                    </li>
                    <li className="Navigation-Item">
                        <a className="Navigation-Link" href="#">Company</a>
                    </li>
                    <li className="Navigation-Item">
                        <a className="Navigation-Link" href="#">News</a>
                    </li>
                    <li className="Navigation-Item">
                        <a className="Navigation-Link" href="#">Blog</a>
                    </li>
                </ul>
                <div className="Navigation-Image">
                    <img className="Navigation-Logo" src={logo} alt="PIKABOOK LOGO"/>
                </div>
            </div>
            <div className="Container">
                <div className="Container-Image">
                    <img className="Container-Phone" src={phone1} alt="PHONE"/>
                </div>
                <div className="Title">
                    <div className="Title-Name">
                        <h2>PikaBook</h2>
                    </div>
                    <div className="Title-Script">
                        <p>Let's download our application to enjoy your book world and experience the new journey.</p>
                    </div>
                    <button className="Title-Download">
                        <a className="Title-Button" href="#">
                            <span className="Title-Button-Inner">
                                <span className="Title-Button-Inline" >Download Here</span>
                            </span>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}
