import { useContext, useEffect, useState } from "react"

import { AppContext } from '../App';

import { Link } from "react-router-dom"

function LikeWidget() {
    const {favouriteCount} = useContext(AppContext)

    return (
        <>
            <Link to="/menuFavourites/"> 
                <div className="header__buttonLike_count"><span>{favouriteCount}</span></div>
            </Link>
        </>
    )
}

export default LikeWidget