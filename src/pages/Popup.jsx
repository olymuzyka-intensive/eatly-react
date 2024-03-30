import { Link } from "react-router-dom"

function Popup() {

    return (
    <div className="popup">
        <div className="container">
            <div className="popup__row">
                <div className="popup__left">
                    <div className="popup__left_logo">
                        <Link to="/" className="header__logo">
                            <img src="/src/img/Logo.svg" alt="Logo"/>
                        </Link>
                    </div>
                    <form className="popup__left_form">
                        <div className="popup__left_title">
                            Sign Up To eatly
                        </div>
                            <input className="input-name" type="text" placeholder="Full Name"></input>
                            <input className="input-email" type="email" placeholder="Email"></input>
                            <input className="input-phone" type="number" placeholder="Phone" max="15" min="1"></input>
                            <Link to="/aboutUs" className="btn btn--confirm">confirm</Link>
                    </form>
                </div>
                <div className="popup__right">
                    <div className="popup__right_title">
                        Find Foods With Love
                    </div>
                    <div className="popup__right_text">
                        Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.
                    </div>
                </div>
            </div>
        </div>
    </div>
)
  }
  
  export default Popup