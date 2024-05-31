import { useContext, useEffect, useState } from "react"

import { AppContext } from '../App';

import { Link } from "react-router-dom"

function LikeWidget() {
    const {cartLike} = useContext(AppContext)
    const [likeCount, setLikeCount] = useState(0)

    useEffect(() => {
        setLikeCount(cartLike.length);
    });

    return (
        <>
            <Link to="/menuFavourites/"> 
                <div className="header__buttonLike_count"><span>{cartLike.length}</span></div>
            </Link>
        </>
    )
}

export default LikeWidget