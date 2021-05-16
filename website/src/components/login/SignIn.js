import {useState} from "react";
import {connect} from "react-redux";
import {authActions} from "../../actions/authActions";

const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        if (email && password) {
            props.login(email, password);
        }
    };

    return <div className="sign_in_sec current">
        <h3>Sign in</h3>
        <form onSubmit={submitForm}>
            <div className="row">
                <div className="col-lg-12 no-pdd">
                    <div className="sn-field">
                        <input type="text" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value) }/>
                        <i className="la la-at"/>
                    </div>
                </div>
                <div className="col-lg-12 no-pdd">
                    <div className="sn-field">
                        <input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                        <i className="la la-lock"/>
                    </div>
                    {props.error ? props.error : ''}
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
    login: (email, password) => dispatch(authActions.loginRequest({email, password})),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)