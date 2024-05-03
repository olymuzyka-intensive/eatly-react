import { useContext, useEffect, useState } from 'react';

// import { useParams } from "react-router-dom"

import { MainContext } from "./Main"
import { AppContext } from '../App';

function DishesFavourites() {
    const data = useContext(MainContext);
    const [isFavorite, setIsFavorite] = useState(false)
    const [activeItem, setActiveItem] = useState('')

    const dataLike = data.filter(function(item) {
        if (item.favourites == true) {  
            return true
        } 
    })

//     useEffect(() => {
//       const favorites = JSON.parse(localStorage.getItem('dataLike') || '[]') 
//     //   setIsCartLikes(cartLikes.includes(item.id))
//       if (cartLikes) {
//         setIsCartLikes(cartLikes)
//       }
//   }, [])
    // useEffect(() => {
    //     localStorage.setItem('dataLike', JSON.stringify(...dataLike, item))
    // }, [])

    const addCartLike = () => {
        
        dataLike.find(item => {
            if (item.id === itemId) {
                item.favorite = true
            }
            localStorage.setItem('dataLike', JSON.stringify(...dataLike, item));

        })
        setIsFavorite([isFavorite]);

    }
    return (
        <div className={isFavorite ? 'dishes__item_like-active' : 'dishes__item_like'} onClick={addCartLike}>
        <svg viewBox="0 0 12.00 12.00" enableBackground="new 0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5C4EAE"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8.5,1C7.5206299,1,6.6352539,1.4022217,6,2.0504761C5.3648071,1.4022827,4.4793701,1,3.5,1 C1.5670166,1,0,2.5670166,0,4.5S2,8,6,11c4-3,6-4.5670166,6-6.5S10.4329834,1,8.5,1z"></path></g></svg>                                    
    </div>

    )
  }
  
  export default DishesFavourites


