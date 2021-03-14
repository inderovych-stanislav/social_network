import homeIcon from "../../assets/images/icon1.png";
import UserAccount from "./UserAccount";
import route from "../../route/";

const Header = () => {

    return <header>
        <div className="container">
            <div className="header-data">
                <div className="logo">
                    <a href={route('home')} title=""><img src="http://via.placeholder.com/34x34" alt=""/></a>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href={route('home')} title=""  >
                                <span><img src={homeIcon} alt=""/></span>
                                Home
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="menu-btn">
                    <a href="#" title=""><i className="fa fa-bars"/></a>
                </div>
                <UserAccount/>
            </div>
        </div>
    </header>
}
export default Header;
