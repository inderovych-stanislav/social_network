
const SignUp = () =>
    <div className="sign_in_sec current" >
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

export default SignUp;