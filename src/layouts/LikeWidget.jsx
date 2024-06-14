import { useContext, useEffect, useState } from "react"

import { AppContext } from '../App';

import { Link } from "react-router-dom"

function LikeWidget() {
    const dataTmp = JSON.parse(localStorage.getItem('cartLike')) || []
    
    const dataFavourites = dataTmp.filter(function(item) {
        if (item.favourites === true) {
            return true
        }  
    })

    return (
        <>
            <Link to="/menuFavourites/"> 
                <div className="header__buttonLike_count"><span>{dataFavourites.length}</span></div>
            </Link>
        </>
    )
}

export default LikeWidget