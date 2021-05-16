import {useState} from "react";
import {authActions} from "../../actions/authActions";
import {connect} from "react-redux";

const SignUp = (props) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        if (email && name && password && passwordConfirmation) {
            props.register({email, name, password, passwordConfirmation});
        }
    };

    return <div className="sign_in_sec current">
        <h3>Sign up</h3>
        <form onSubmit={submitForm}>
            <div className="row">
                <div className="col-lg-12 no-pdd">
                    <div className="sn-field">
                        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value) }/>
                        <i className="la la-at"/>
                    </div>
                </div>
                <div className="col-lg-12 no-pdd">
                    <div className="sn-field">
                        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value) }/>
                        <i className="la la-user"/>
                    </div>
                </div>
                <div className="col-lg-12 no-pdd">
                    <div className="sn-field">
                        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value) }/>
                        <i className="la la-lock"/>
                    </div>
                </div>
                <div className="col-lg-12 no-pdd">
                    <div className="sn-field">
                        <input type="password"
                               placeholder="Confirm Password" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value) }/>
                        <i className="la la-lock"/>
                    </div>
                </div>
                <div className="col-lg-12 no-pdd">
                    {props.isLoading ? '': <button type="submit" value="submit">Get Started</button>}
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
    register: (user) => dispatch(authActions.registerRequest(user)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)
