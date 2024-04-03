import { useState } from "react"
import { Link } from "react-router-dom"

function Header() {
    const [isOpen, setIsOpen] = useState(true)  
    const [isActive, setIsActive] = useState(true)

    return (
        <div className="header">
            <div className="container">
                <div className="header__row">                    
                    <nav className="header__nav">
                        <Link to="/" className="header__logo">
                            <img src="src/img/Logo.svg" alt="Logo"/>
                        </Link> 

                        <ul className={`header__menu ${isOpen ? " " : "active"}`}>
                            <li className="menu__item">
                                <Link to="/menu" className="menu__link">Menu</Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/blog" className="menu__link">Blog</Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/aboutUs" className="menu__link">About Us</Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/contact" className="menu__link">Contact</Link>
                            </li>
                        </ul>                    
                    </nav>                    
                    
                    <div className="header__button">
                        <Link to="/cart" className="btn btn--shop">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="30" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </Link>
                    </div>

                    <button className={`header__burger ${isActive ? " " : "active"}`} onClick={() => {setIsOpen(!isOpen); setIsActive(!isActive)}}>
                        <span></span>
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

export default Header