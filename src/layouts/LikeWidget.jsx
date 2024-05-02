import { useContext, useEffect, useState } from "react"

import { AppContext } from '../App';
import { MainContext } from "../layouts/Main";

import { Link } from "react-router-dom"

function LikeWidget(cartLike) {
    const [likeCount, setLikeCount] = useState([]);


    useEffect(() => {
        const cartLike = JSON.parse(localStorage.getItem('cartLike') || '[]')
        setLikeCount(cartLike.length)
    }, [cartLike])

    return (
        <>
            <Link to="/menuFavourites/"> 
                <div className="header__button_likeCount"><span>{likeCount}</span></div>
            </Link>
        </>
    )
}

export default LikeWidget