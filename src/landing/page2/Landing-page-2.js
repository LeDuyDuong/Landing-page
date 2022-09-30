import React from "react";
import './Landing-page-2.css'
import phone2 from "../../assets/phone2.png"

export default function LandingPage2(){
    return(
        <div className="LandingPage2">
            <div className="Navigation2">
                <div className="Navigation2-Menu">
                    <rect className="Navigation2-Menu-Vector" id="Position1"></rect>
                    <rect className="Navigation2-Menu-Vector" id="Position2" ></rect>
                    <rect className="Navigation2-Menu-Vector" id="Position3" ></rect>
                    <button className="Navigation2-Menu-Button">
                        Menu
                    </button>
                </div>
            </div>
            <div className="Container2">
                <div className="Container2-Image">
                    <img className="Container2-Phone" src={phone2} alt="PHONE"/>
                </div>
                <div className="Title2">
                    <div className="Title2-Name">
                        <h2>Matching</h2>
                    </div>
                    <div className="Title2-Script">
                        <p>Join our community to share and discuss your insight with bookmates</p>
                    </div>
                    <button className="Title2-Download">
                        <a className="Title2-Button" href="#">
                            <span className="Title2-Button-Inner">
                                <span className="Title2-Button-Inline" >Download Here</span>
                            </span>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}