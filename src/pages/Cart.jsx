import Header from "../laouts/Header"
import Footer from "../laouts/Footer"
import { useState } from "react"
import { Link } from "react-router-dom"

function Cart() {
    const [discount, setDiscount] = useState('')
    
    return (
        <>
        <Header/>
        <div className="shopping">
        <div className="container">
            <div className="shopping__row">
                <img className="shopping__cards_decor-1" src="/src/img/decor8.svg" alt="decor"/>
                <ul className="shopping__cards">
                    <li className="shopping__item shopping__item_info">
                        <div className="shopping__item_info-1">
                            <div className="shopping__item_subtitle"> Chicken Hell</div>
                            <div className="shopping__item_price">$ 12<span className="shopping__item_price">.99</span></div>
                        </div>
                        <div className="shopping__item_info-2">
                            <div className="shopping__item_counter">
                                <button className="shopping__item_counter-lower" type="button"></button>
                                <input className="shopping__item_counter-count" type="number" max="9999" min="1" defaultValue="1"></input>
                                <button className="shopping__item_counter-raise" type="button"></button>
                            </div>
                            <div className="shopping__item_price shopping__item_price-total">$ 12<span className="shopping__item_price shopping__item_price-total">.99</span></div>  
                        </div>
                    </li>
                    <li className="shopping__item  shopping__item_info">
                        <div className="shopping__item_info-1">
                            <div className="shopping__item_subtitle"> Swe Dish</div>
                            <div className="shopping__item_price">$ 19<span className="shopping__item_price">.99</span></div>
                        </div>   
                        <div className="shopping__item_info-2">
                            <div className="shopping__item_counter">
                                <button className="shopping__item_counter-lower" type="button"></button>
                                <input className="shopping__item_counter-count" type="number" max="9999" min="1" defaultValue="1"></input>
                                <button className="shopping__item_counter-raise" type="button"></button>
                            </div> 
                            <div className="shopping__item_price shopping__item_price-total">$ 19<span className="shopping__item_price shopping__item_price-total">.99</span></div>   
                        </div>     
                    </li>                        
                </ul>
                
                <div>
                    <form className="shopping__form">
                        <input type="text" placeholder="Apply Coupon" value={discount} onChange={e => setDiscount(e.target.value)} />
                        <button onClick={() => setDiscount(3.99)} type="submit" className="btn btn--apply-coupon">Apply</button>
                    </form>
                </div>    
                
                <div className="shopping__list">
                    <ul className="shopping__pay">
                        <li className="shopping__pay_item">
                            <div className="shopping__price_sub">Subtotal</div> 
                            <div className="shopping__price_sub">$ 32<span className="shopping__price_sub">.98</span></div>  
                        </li>
                        <li className="shopping__pay_item">
                            <div className="shopping__price_sub">Delivery</div>   
                            <div className="shopping__price_sub">$ 3<span className="shopping__price_sub">.59</span></div>
                        </li>
                        <li className="shopping__pay_item">
                            <div className="shopping__price_sub">Discount</div>   
                            <div className="shopping__price_sub">$ 0<span className="shopping__price_sub">.00</span></div>
                        </li>
                        <li className="shopping__pay_item">
                            <div className="shopping__price_total">Total</div> 
                            <div className="shopping__price_total">$ 36<span className="shopping__price_total">.57</span></div>  
                        </li>
                    </ul>
                    <Link to="/popup"  className="btn btn--payment">Buy</Link>
                    <img className="shopping__cards_decor-2" src="/src/img/decor12.svg" alt="decor"/>
                    <img className="shopping__cards_decor-3" src="/src/img/decor12.svg" alt="decor"/>
                </div>
            </div>
        </div>
      </div>

        <Footer/>
        </>
    )
}

export default Cart