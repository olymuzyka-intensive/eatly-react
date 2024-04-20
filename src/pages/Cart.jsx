// import Header from "../laouts/Header"
// import Footer from "../laouts/Footer"
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import GetSupersale from "../laouts/GetSupersale "

const PromoCode = ({applyCoupon}) => {
    const [promoCode, setPromoCode] = useState('')
    // const [codeAccept, setCodeAccept] = useState(false)

    const handleApplyCoupon = (e) => {
        e.preventDefault()
        applyCoupon(promoCode)
    }

    return (
        <div>
            <form className="shopping__form">
                <input type="text" placeholder="Apply Coupon" value={promoCode} onChange={e => setPromoCode(e.target.value)} />
                <button onClick={handleApplyCoupon} className="btn btn--apply-coupon" >Apply</button>
            </form>
        </div>                   
    )
} ;


import { AppContext } from "../App";
import { MainContext } from "../laouts/Main";

function Cart() {
    const {cart, setCart} = useContext(AppContext)

    const data = useContext(MainContext);

    const [cartList, setCartList] = useState([]);

    const [total, setTotal] = useState(0)

    const changeQuantity = (id, value) => {
        if (+value == 0) {
            remove(id);
            return;
        }

        const cartItem = cart.find((item) => item.id == id)

        if (cartItem) {
            cartItem.quantity = +value;

            const cartTmp = cart;

            setCart([...cartTmp]);
            localStorage.setItem('cart', JSON.stringify(cartTmp));
        }
    }
    const [price, setPrice] = useState(total)
    const [discount, setDiscount] = useState(0);

    const delivery = parseFloat(299/100)

    const applyCoupon = (PromoCode) => {
        if (PromoCode === "sale50") {
            setDiscount(50)
        }
    }
    
    useEffect(() => {
        const cartListTmp = data.filter((product) => {
            const cartItem = cart.find((item) => {
                product.quantity = item.quantity;
                return item.id == product.id;
            });

            if (cartItem) return product;
        });

        if (cartListTmp && cartListTmp.length > 0) setCartList([...cartListTmp])
    }, [cart])

    useEffect(() => {
        let totalTmp = 0;
        cartList.forEach((item) => {
            totalTmp += (Math.floor(item.price) + Math.round(item.pricesub) / 100)* item.quantity
        });
        totalTmp = totalTmp.toFixed(2);
        setTotal(totalTmp);
        
    }, [cartList])

    useEffect(() => {
        const discountPrice = total * (discount/100);
        const price =  total - discountPrice + delivery;
        setPrice(price);
    }, [discount])

    return (
        <>
        {/* <Header/>         */}
        <div className="shopping">
            <div className="container">
                <div className="shopping__row">
                    <img className="shopping__cards_decor-1" src="/src/img/decor8.svg" alt="decor"/>
                    <ul className="shopping__cards">
                    {cartList.map((item, index) => {
                            return (
                        <li key={index} className="shopping__item shopping__item_info">
                            <div className="shopping__item_info-1">
                                <img src={item.image} className="shopping__item_img" alt='dish'/>
                                <div className="shopping__item_subtitle"> {item.subtitle}</div>
                                <div className="shopping__item_price">$ {item.price}<span className="shopping__item_price">.{item.pricesub}</span></div>
                            </div>
                            <div className="shopping__item_info-2">
                                <div className="shopping__item_counter">
                                    <button className="shopping__item_counter-lower" type="button"></button>
                                    <input className="shopping__item_counter-count" type="number" max="9999" min="1" onChange={(event) => { changeQuantity(item.id, event.target.value, event.target) }} defaultValue={item.quantity}></input>
                                    <button className="shopping__item_counter-raise" type="button"></button>
                                </div>
                                <div className="shopping__item_price shopping__item_price-total">$ {(Math.floor(item.price) + Math.round(item.pricesub)/100)* item.quantity}</div>  
                            </div>
                        </li>
                        )
                        })}
                    </ul>
                    <div>
                        <PromoCode applyCoupon={applyCoupon}/>
                    </div>                   
                    
                    <div className="shopping__list">
                        <ul className="shopping__pay">
                            <li className="shopping__pay_item">
                                <div className="shopping__price_sub">Subtotal</div> 
                                <div className="shopping__price_sub">$ {total} </div>  
                            </li>
                            <li className="shopping__pay_item">
                                <div className="shopping__price_sub">Delivery</div>   
                                <div className="shopping__price_sub">$ {delivery}</div>
                            </li>
                            <li className="shopping__pay_item">
                                <div className="shopping__price_sub">Discount</div>   
                                <div className="shopping__price_sub">$ {total * discount/100} </div>
                            </li>
                            <li className="shopping__pay_item">
                                <div className="shopping__price_total">Total</div> 
                                <div className="shopping__price_total">$ {price} </div>  
                            </li>
                        </ul>
                        <Link to="/popup"  className="btn btn--payment">Buy</Link>
                        <img className="shopping__cards_decor-2" src="/src/img/decor12.svg" alt="decor"/>
                        <img className="shopping__cards_decor-3" src="/src/img/decor12.svg" alt="decor"/>
                    </div>
                </div>
            </div>
        </div>
        <GetSupersale/>
        {/* <Footer/> */}
        </>
    )
}

export default Cart
