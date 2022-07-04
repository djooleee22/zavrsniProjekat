import React from "react";
import "./login-page.scss"
import Illustration from '../../images/2.webp'
import Logo from '../../images/logo.png'
import Logo1 from '../../images/logo/logo-1.png';
import Logo2 from '../../images/logo/logo-2.png';
import Logo3 from '../../images/logo/logo-3.png';
import Logo4 from '../../images/logo/logo-4.png';
import Logo5 from '../../images/logo/logo-5.png';
import Logo6 from '../../images/logo/logo-6.png';
import Logo7 from '../../images/logo/logo-7.png';
import Logo8 from '../../images/logo/logo-8.png';
import Logo9 from '../../images/logo/logo-9.png';
import Logo10 from '../../images/logo/logo-10.png';


function LoginPage(props) {

    return (

    <div id="login-page">
            <h1>Welcome to the our platform!</h1>
            <div className="wrapper">
                <div className="left-box">
                    <div className="left">
                        <img className="logo" src={Logo} alt="logo"></img>
                        <h1>Welcome to the our platform, We are hiring</h1>
                        <img className="left-img" src={Illustration} alt="illustration"></img>
                    </div>
                </div>
                <form className="right-box" method="post" >
                    <div className="right">
                        <h2>Sign in</h2>
                        <div className="text-field">
                            <input type="text"/>
                            <span></span>
                            <label>Username</label>
                        </div>
                        <div className="text-field">
                            <input type="password" />
                            <span></span>
                            <label>Password</label>
                        </div>
                            
                        <div className="wrapp-btn">
                            <button className="sign-in">sign in</button>
                            <p className="parag-1">Not a member?</p>
                            <p className="parag-2">Contact <span>wiarehiring@gmail.com</span> for membership.</p>
                        </div>
                    </div>
                    <span className="hashtag">#we_are_hiring</span>
                </form>
            </div>
            <div className="footer">
                <div>Our partners:</div>
                <div className="wrapper-logo">
                    <img src={Logo1} alt="truman design"/>
                    <img src={Logo2} alt="universal tech"/>
                    <img src={Logo3} alt="roast coffee" />
                    <img src={Logo4} alt="robust"/>
                    <img src={Logo5} alt="violeta kurosawa"/>
                    <img src={Logo6} alt="hexagone"/>
                    <img src={Logo7} alt="therese leclercq"/>
                    <img src={Logo8} alt="fire tires"/>
                    <img src={Logo9} alt="david roberts"/>
                    <img src={Logo10} alt="arabica"/>

                    <img src={Logo10} alt="logo"/>
                    <img src={Logo9} alt="logo"/>
                    <img src={Logo8} alt="logo"/>
                    <img src={Logo7} alt="logo"/>
                    <img src={Logo2} alt="logo"/>
                    <img src={Logo3} alt="logo"/>
                    <img src={Logo4} alt="logo"/>
                    <img src={Logo5} alt="logo"/>
                    <img src={Logo6} alt="logo" />
                    <img src={Logo1} alt="logo"/>
                </div>  
            </div>
    </div>

)}

export default LoginPage;