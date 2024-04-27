import { useContext, useEffect, useState } from "react"

import { AppContext } from '../App';

import { Link } from "react-router-dom"

function LikeWidget() {
    const {cart} = useContext(AppContext)
    const [likeCount, setLikeCount] = useState(0);

    const getLikeQuantity = () => {
        let count = 0;

        cart.forEach(item => {
            count += count;
        });

        return count;
    };

    useEffect(() => {
        setLikeCount(getLikeQuantity());
    }, [cart]);

    return (
        <>
            <Link to="/cart/"> 
                <span className="header__button_count">{likeCount}</span>&nbsp;
            </Link>
        </>
    )
}

export default LikeWidget