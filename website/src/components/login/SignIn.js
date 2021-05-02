import {useState} from "react";
import {connect} from "react-redux";
import {authActions} from "../../actions/authActions";

const SignIn = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        if (username && password) {
            props.login(username, password);
        }
    };

    return <div className="sign_in_sec current">
        <h3>Sign in</h3>
        <form onSubmit={submitForm}>
            <div className="row">
                <div className="col-lg-12 no-pdd">
                    <div className="sn-field">
                        <input type="text" name="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value) }/>
                        <i className="la la-user"/>
                    </div>
                </div>
                <div className="col-lg-12 no-pdd">
                    <div className="sn-field">
                        <input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
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
                    {props.isLoading ? '': <button type="submit" value="submit">Sign in</button>}
                </div>
            </div>
        </form>
    </div>
}

const mapStateToProps = state => {
    return ({
        isLoading: state.auth.isLoading,
        error: state.auth.error
    })
};

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(authActions.loginRequest({username, password})),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)