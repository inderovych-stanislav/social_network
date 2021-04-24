import loginMainImage from "../../assets/images/cm-main-img.png";
import {useState} from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const SIGN_IN_TAB = 'sign-in';
const SIGN_UP_TAB = 'sign-up';

const Login = () => {
    const [activeTab, setActiveTab] = useState(SIGN_IN_TAB);

    return <div className="sign-in sign-in-page">
        <div className="signin-popup">
            <div className="signin-pop">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="cmp-info">
                            <div className="cm-logo">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.</p>
                            </div>
                            <img src={loginMainImage} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="login-sec">
                            <ul className="sign-control">
                                <li className={activeTab === SIGN_IN_TAB ? 'current' : ''}  onClick={() => setActiveTab(SIGN_IN_TAB)}><a href="#" title="">Sign in</a></li>
                                <li className={activeTab === SIGN_UP_TAB ? 'current' : ''}  onClick={() => setActiveTab(SIGN_UP_TAB)}><a href="#" title="">Sign up</a></li>
                            </ul>
                            {activeTab === SIGN_IN_TAB ? <SignIn/> : <SignUp/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footy-sec">
            <div className="container">
                <ul>
                    <li><a href="#" title="">Help Center</a></li>
                    <li><a href="#" title="">Privacy Policy</a></li>
                    <li><a href="#" title="">Community Guidelines</a></li>
                    <li><a href="#" title="">Cookies Policy</a></li>
                    <li><a href="#" title="">Language</a></li>
                    <li><a href="#" title="">Copyright Policy</a></li>
                </ul>
                <p>Copyright 2021</p>
            </div>
        </div>
    </div>
}

export default Login;
