import { useContext, useEffect, useState } from "react"

import { AppContext } from '../App';

import { Link } from "react-router-dom"

function LikeWidget() {
    const {cartLike} = useContext(AppContext)
    const [likeCount, setLikeCount] = useState(0);
    let count = 0;
    const getQuantityLike = () => {
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
                <div className="header__buttonLike_count"><span>{likeCount}</span></div>
            </Link>
        </>
    )
}

export default LikeWidget


// работает кажется также, странно
// cartLike.forEach(item => {     
//     if (item === id) {
//         count++;
//     } else {
//         count--
//     }  
// }