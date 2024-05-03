import { useContext, useEffect, useState } from "react"

import { AppContext } from '../App';

import { Link } from "react-router-dom"

function LikeWidget() {
    const {cartLike} = useContext(AppContext)
    const [likeCount, setLikeCount] = useState(0);

    const getQuantityLike = () => {
        let count = 0;

        cartLike.forEach(item => {
            count++;
        });

        return count;
    };

    useEffect(() => {
        setLikeCount(getQuantityLike());
    }, [cartLike]);

    return (
        <>
            <Link to="/menuFavourites/"> 
                <div className="header__button_likeCount"><span>{likeCount}</span></div>
            </Link>
        </>
    )
}

export default LikeWidget