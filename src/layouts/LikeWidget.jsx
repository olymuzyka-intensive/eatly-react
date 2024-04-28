import { useContext, useEffect, useState } from "react"

import { AppContext } from '../App';
import { MainContext } from "../layouts/Main";

import { Link } from "react-router-dom"

function LikeWidget(cart) {
    const [likeCount, setLikeCount] = useState([]);

    // const [cartListFavourites, setCartListFavourites] = useState([]);

    useEffect(() => {
        const cartLike = JSON.parse(localStorage.getItem('dataLike') || '[]')
        setLikeCount(cartLike.length)
    }, [cart])

    return (
        <>
            <Link to="/menuFavourites/"> 
                <div className="header__button_likeCount"><span>{likeCount}</span></div>
            </Link>
        </>
    )
}

export default LikeWidget

    // const {cart} = useContext(AppContext)
    // const [likeCount, setLikeCount] = useState(0);
    // const [cartListFavourites, setCartListFavourites] = useState([]);

    // const cartLike = JSON.parse(localStorage.getItem('dataLike') || '[]')
    // const likeCount = cartLike.length

    // useEffect(() => {
    //     // const cartLike = JSON.parse(localStorage.getItem('dataLike')|| '[]')
    //     if (cartLike) {
    //         setCartListFavourites(cartLike)
    //     }
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem('dataLike', JSON.stringify(cartListFavourites))
        
    // }, [])





//    // const [cartListFavourites, setCartListFavourites] = useState([]);
    // const [likeCount, setLikeCount] = useState(0);

    // useEffect (() => {
    //     const saveCartFavourites = localStorage.getItem('dataFavourites');
    //     if (saveCartFavourites) {
    //         setCartListFavourites(JSON.parse(saveCartFavourites));
    //         setLikeCount(JSON.parse(saveCartFavourites).lenght)
    //     }
    // }, [])

    // const addFavourite = (cart) => {
    //     const updateFavourite = [...cartListFavourites, cart]
    //     setCartListFavourites(updateFavourite)
    //     setLikeCount(updateFavourite.length)
    //     localStorage.setItem('dataFavourites', JSON.stringify(updateFavourite))
    // }
    // const getLikeQuantity = () => {
    //     let likeCount = 0;
    //     cart.forEach(item => {
    //         likeCount += item.likeCount;
    //     });

    //     setCartListFavourites([...cartListFavourites]);
    //     localStorage.setItem('dataFavourites', JSON.stringify(cartListFavourites));
    //     setLikeCount(getLikeQuantity());
    //     return likeCount
    // };
    
    
    // useEffect(() => {
    //     // setLikeCount(getLikeQuantity());
    // }, [cartListFavourites]);
