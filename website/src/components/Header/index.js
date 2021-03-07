import homeIcon from "../../assets/images/icon1.png";
import UserAccount from "./UserAccount";

const Header = () => {

    return <header>
        <div className="container">
            <div className="header-data">
                <div className="logo">
                    <a href="#" title=""><img src="http://via.placeholder.com/34x34" alt=""/></a>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#" title=""  >
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
