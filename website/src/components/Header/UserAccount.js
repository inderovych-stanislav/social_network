import {useRef, useState} from "react";
import UseOutsideClick from "../../hooks/UseOutsideClick";

const UserAccount = () => {

    const [showSettings, setSate] = useState(false);
    const accountRef = useRef();

    UseOutsideClick(accountRef, () => {
        if (showSettings) setSate(false);
    });

    return <div className="user-account">
        <div className="user-info">
            <img src="http://via.placeholder.com/30x30" alt=""/>
            <a href="#" title="" onClick={() => setSate(!showSettings)}>John</a>
            <i className="la la-sort-down"/>
        </div>
        {showSettings && (
            <div ref={accountRef} className="user-account-settingss active">
                <h3>Setting</h3>
                <ul className="us-links">
                    <li><a href="#" title="">Account Setting</a></li>
                    <li><a href="#" title="">Privacy</a></li>
                    <li><a href="#" title="">Faqs</a></li>
                    <li><a href="#" title="">Terms & Conditions</a></li>
                </ul>
                <h3 className="tc"><a href="#" title="">Logout</a></h3>
            </div>
        )}
    </div>
}

export default UserAccount
