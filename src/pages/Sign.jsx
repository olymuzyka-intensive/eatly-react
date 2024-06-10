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
            
          if (name && name.length > 2 ) {
            if (email && testEmail.test(email)) {
                if (phone && testPhone.test(phone)) {
                   setIsValid(true);
                   setName('');
                   setEmail('');
                   setPhone('');                  
                    
                } else {
                    setIsValid(false);
                }
                
            }
          }        
        }    

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
                        <form className="popup__left_form">
                            <div className="popup__left_title">
                                Sign Up To eatly
                            </div>
                            <input type="text" placeholder="Full Name" value={name} 
                                onChange={(e) => setName(e.target.value)}
                                // className={isValid ? 'valid' : 'novalid'}
                                style={{ borderColor: isValid || !name ? '' : '#6C5FBC' }}
                                
                                />
                            <input type="email" placeholder="Email" value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                // className={isValid ? 'valid' : 'novalid'}
                                style={{ borderColor: isValid || !email ? '' : '#6C5FBC' }}
                                />
                            <input type="tel" placeholder="+375" value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                                // className={isValid  ? 'valid' : 'novalid'}
                                style={{ borderColor: isValid || !phone ? '' : '#6C5FBC' }}
                                />
                            <button className="btn btn--confirm" onClick={handleSubmit}>confirm</button>
                              {(isValid && <div className='form__field_ok'>We will contact you as soon as possible</div>)}
                              
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