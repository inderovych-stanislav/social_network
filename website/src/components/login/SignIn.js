
const SignIn = () =>
    <div className="sign_in_sec current">
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

export default SignIn;