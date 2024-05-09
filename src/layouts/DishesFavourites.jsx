import { useContext } from 'react';

import { AppContext } from '../App';
import { MainContext } from './Main';
import DishesLike from './DishesLike';


function DishesFavourites() {
    const {cartAdd} = useContext(AppContext)
    const dataFavourite = useContext(MainContext)

    return (
        <div className="dishes">
            <div className="container">
                <div className="dishes__row">
                    {/* <h2 className="dishes__title">Our <span>Dishes</span></h2> */}
                    <ul className="dishes__cards">
                        {dataFavourite.map((item, index) => {
                            return (
                            <li key={index} className="dishes__item" >
                                <div className="dishes__category_card">
                                    <DishesLike />
                                    <img src={item.image} className="dishes__item_img" alt='dish'/>
                                    <h4 className="dishes__category dishes__category_1">{item.subcategory}</h4>
                                    <div className="dishes__subtitle">{item.title}</div>
                                    <div className="dishes__comment">{item.timing} •<span className="dishes__comment_star">
                                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.9993 21.687C17.7033 22.6197 19.2019 21.4893 18.876 19.511L18.2909 15.9589L20.7696 13.4433C22.1482 12.0443 21.5786 10.2111 19.6708 9.92245L16.2453 9.40421L14.7209 6.18842C13.867 4.38709 12.013 4.36771 11.1575 6.17244L9.62555 9.40421L6.19999 9.92245C4.29484 10.2107 3.72066 12.0423 5.10119 13.4433L7.57994 15.9589L6.99479 19.511C6.66935 21.4865 8.16507 22.621 9.87149 21.687L12.9354 20.01L15.9993 21.687Z" fill="#6C5FBC"/>
                                        </svg></span><span>{item.star}</span>   
                                    </div>
                                    <div className="dishes__price">$ {Math.floor(item.price)}<span className="dishes__price_sub">.{(item.price.toString().split('.')[1])}</span>
                                        <div className="dishes__add" onClick={() => { cartAdd(item.id) }}>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            )
                        })}
                    </ul>
                    {/* <div className="dishes__button">
                        <Link to="/menuAll" className="btn btn--view-all">View All <span> <img src="/src/img/arrow.png" alt="arrow"/> </span></Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
  }

  
  export default DishesFavourites



  //setIsFavorite(!isFavorite)
// ++ work
//   const addCartLike = (id) => {
//     const cartLikeTmp = cartLike;
    
//     let item = cartLike.find((item) => {
//         return +item.id == +id;
//     });

//     if (item) {
//         // item.favourite = true;
//         item = { id: id, favourites: true };
//     } else { 
//         item = { id: id, favourites: false };
//         cartLikeTmp.push(cartLike);
        
//     }
//     setIsFavorite([isFavorite]);
//     setCartLike([...cartLikeTmp]);
//     // localStorage.setItem('cartLike', JSON.stringify(cartLikeTmp));     
// }



// const [cartLikeList, setCartLikeList] = useState([]);

//     useEffect(() => {
//         const cartlikeList = data.filter((product) => {
//             const cartItem = cartLike.find((item) => {
//                 product.favourites = item.favourites;
//                 return item.id == product.id;
//             });

//             if (cartItem) return product;
//         });

//         if (cartlikeList && cartLikeList.length > 0) setCartLikeList([...cartlikeList])
//     }, [cartLike])

    // useEffect(() => {
        
    //     cartList.forEach((item) => {
    //         totalTmp += item.price * item.quantity
    //     });

    //     setCartLike(priceTmp)

    // }, [cartLikeList])

    // const dataLike = data.filter(function(item) {
    //     if (item.favourites == true) {  
    //         return true
    //     } 
    // })

//     useEffect(() => {
//       const favorites = JSON.parse(localStorage.getItem('dataLike') || []) 
//     //   setIsCartLikes(cartLikes.includes(item.id))
//       if (cartLike) {
//         setCartLike(cartLike)
//       }
//   }, [])

    // useEffect (() => {
    //     const saveCartLike = localStorage.getItem('cartLike' || '[]);
    //     if (saveCartLike) {
    //         const parsedCartLike = JSON.parse(saveCartLike);
    //         setCartLike(parsedCartLike)            
    //     }
    // }, [])





    //     const addCartLike = (id) => {
    //     data.forEach(item => {
    //         if (item.id === id) {
    //             item.favourites = true
    //         }
    //         setIsFavorite([!isFavorite]);
    //     })  
        
    // }
    // const removeCartLike = (id) => {
    //     data.forEach(item => {
    //         if (item.id === id) {
    //             item.favourites = false
    //         }
    //         setIsFavorite([!isFavorite]);
    //     })  
    // }



        // useEffect (() => {
    //     const saveCartFavourite = localStorage.getItem('cartFavourite');
    //     if (saveCartFavourite) {
    //         const parsedCartFavourite = JSON.parse(saveCartFavourite);
    //         setCartLike(parsedCartFavourite)
    //     }
    // }, [])


        // useEffect(() => {
    //     if (cartLike.length == 0) {
    //         let cartLikeDataLocal = localStorage.getItem('cartLike') ;
    //         cartLikeDataLocal = JSON.parse(cartLikeDataLocal);

    //         if (cartLikeDataLocal && cartLikeDataLocal.length > 0) setCartLike([...cartLikeDataLocal]);

    //         localStorage.setItem('cartLike', JSON.stringify(cartLike));
    //     }

    // }, [cartLike])
