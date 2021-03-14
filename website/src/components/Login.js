import loginMainImage from "../assets/images/cm-main-img.png";


const Login = () => {
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
                                <li data-tab="tab-1" className="current"><a href="#" title="">Sign in</a></li>
                                <li data-tab="tab-2"><a href="#" title="">Sign up</a></li>
                            </ul>
                            <div className="sign_in_sec current" id="tab-1">
                                <h3>Sign in</h3>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12 no-pdd">
                                            <div className="sn-field">
                                                <input type="text" name="username" placeholder="Username"/>
                                                    <i className="la la-user"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 no-pdd">
                                            <div className="sn-field">
                                                <input type="password" name="password" placeholder="Password"/>
                                                    <i className="la la-lock"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 no-pdd">
                                            <div className="checky-sec">
                                                <div className="fgt-sec">
                                                    <input type="checkbox" name="cc" id="c1"/>
                                                        <label htmlFor="c1">
                                                            <span></span>
                                                        </label>
                                                        <small>Remember me</small>
                                                </div>
                                                <a href="#" title="">Forgot Password?</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 no-pdd">
                                            <button type="submit" value="submit">Sign in</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="sign_in_sec" id="tab-2">
                                <h3>Sign up</h3>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12 no-pdd">
                                            <div className="sn-field">
                                                <input type="text" name="name" placeholder="Full Name"/>
                                                <i className="la la-user"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 no-pdd">
                                            <div className="sn-field">
                                                <input type="text" name="country" placeholder="Country"/>
                                                <i className="la la-globe"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 no-pdd">
                                            <div className="sn-field">
                                                <select>
                                                    <option>Category</option>
                                                </select>
                                                <i className="la la-dropbox"/>
                                                <span><i className="fa fa-ellipsis-h"/></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 no-pdd">
                                            <div className="sn-field">
                                                <input type="password" name="password" placeholder="Password"/>
                                                <i className="la la-lock"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 no-pdd">
                                            <div className="sn-field">
                                                <input type="password" name="repeat-password"
                                                       placeholder="Repeat Password"/>
                                                <i className="la la-lock"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 no-pdd">
                                            <div className="checky-sec st2">
                                                <div className="fgt-sec">
                                                    <input type="checkbox" name="cc" id="c2"/>
                                                    <label htmlFor="c2">
                                                        <span></span>
                                                    </label>
                                                    <small>Yes, I understand and agree to Terms &
                                                        Conditions.</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 no-pdd">
                                            <button type="submit" value="submit">Get Started</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
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
