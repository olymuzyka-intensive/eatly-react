import { useContext, useEffect, useState } from "react"

import { AppContext } from '../../App';

import { Link } from "react-router-dom"

function CartWidget() {
    const {cart} = useContext(AppContext)
    const [cartCount, setCartCount] = useState(0);

    const getQuantity = () => {
        let count = 0;

        cart.forEach(item => {
            count += item.quantity;
        });

        return count;
    };

    useEffect(() => {
        setCartCount(getQuantity());
    }, [cart]);

    return (
        <div className="header__cart">
            <span className="header__cart_count">{cartCount}</span>&nbsp;
            <Link to="/cart/">My Cart</Link>
        </div>
    )
}

export default CartWidget