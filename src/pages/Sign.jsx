import React, { useState } from 'react';
import { Link } from "react-router-dom"


function Sign() {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const [isValid, setIsValid] = useState(false);
      
        const handleSubmit = (e) => {
          e.preventDefault();
          const testEmail = /\S+@\S+\.\S+/;
          const testPhone = /^\+?(375)\s?\-?\(?(29|25|44|33|17)\)?\s?-?[0-9]\s?-?[0-9]\s?-?[0-9]\s?-?[0-9]\s?-?[0-9]\s?-?[0-9]\s?-?[0-9]$/g;
  
          if (name && email && phone) {
            if ((testEmail.test(email)) && (testPhone.test(phone))) {
                setIsValid(true);
            }
                        
            setName('');
            setEmail('');
            setPhone('');
          } else {
            setIsValid(false);
          }
        };
    

    return (
    <>
        <div className="popup">
            <div className="container">
                <div className="popup__row">
                    <div className="popup__left">
                        <div className="popup__left_logo">
                            <Link to="/" className="header__logo">
                                <img src="/src/img/Logo.svg" alt="Logo"/>
                            </Link>
                        </div>
                        <form className="popup__left_form" onSubmit={handleSubmit}>
                            <div className="popup__left_title">
                                Sign Up To eatly
                            </div>
                            <input type="text" placeholder="Full Name" value={name} required
                                onChange={(e) => setName(e.target.value)}
                                style={{ borderColor: isValid || !name ? 'none' : '#6C5FBC' }}/>
                            <input type="email" placeholder="Email" value={email} required
                                onChange={(e) => setEmail(e.target.value)} 
                                style={{ borderColor: isValid || !email ? 'none' : '#6C5FBC' }}/>
                            <input type="tel" placeholder="Phone" value={phone} required
                                onChange={(e) => setPhone(e.target.value)} 
                                style={{ borderColor: isValid || !phone ? 'none' : '#6C5FBC' }}/>
                            <button className="btn btn--confirm">confirm</button>
                              {isValid && <div className='form__field'>We will contact you as soon as possible</div>}
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
    </>
    )
}
export default Sign