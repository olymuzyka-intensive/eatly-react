import { createContext, useState, useEffect, useContext} from "react"
import { BrowserRouter} from "react-router-dom"

import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main, { MainContext } from "./layouts/Main"

export const AppContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [cartLike, setCartLike] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false)
  const data = useContext(MainContext)
  const objLike = data
  
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('cartLke'));
    if (storedFavorites) {
      setCartLike(storedFavorites);
    }
    console.log('компонент обновился')

  }, []);

  useEffect(() => {
    localStorage.setItem('cartLike', JSON.stringify(cartLike))
  }, [cartLike])

  // 1
// const addCartFavourite = (itemLike) => {
//   const storedFavorites = JSON.parse(localStorage.getItem('cartLke')) || [];
//   storedFavorites.push(itemLike)
//   localStorage.setItem('cartLike', JSON.stringify(storedFavorites))
//   console.log('товар добавлен в избранное')
//   }

// 2
// const addCartFavourite = (itemId) => {
//      objLike.find(item => {
//       if (item.id === itemId) {
//         item.favourites = true;
//       }
//       console.log('товар добавлен в избранное')
//     })
//   }

// 3
// const addCartFavourite = (item) => {
// const updateLike = [...cartLike, item]
// setCartLike(updateLike);
// localStorage.setItem('cartLike', JSON.stringify(updateLike))
// console.log('компонент обновился')
//   }

// 4
    const addCartFavourite = (id) => {
      const cartTmp = cart;
      let item = cartTmp.find((item) => {
        return +item.id == +id;
      });      
      if (item) {
        item.favourite = true;
      } else { 
          item = { id: id, favourite: false };
          cartTmp.push(item);
      }
      setLikeCart([...cartTmp]);    
      localStorage.setItem('cartLike', JSON.stringify(updateLike))
      console.log('компонент обновился')
    }

    const cartAdd = (id) => {
        const cartTmp = cart;
        
        let item = cartTmp.find((item) => {
            return +item.id == +id;
        });

        if (item) {
            item.quantity = ++item.quantity;
        } else { 
            item = { id: id, quantity: 1 };
            cartTmp.push(item);
        }

        setCart([...cartTmp]);
        localStorage.setItem('cart', JSON.stringify(cartTmp));
        console.log('товар добавлен')
    }

    useEffect(() => {
        if (cart.length == 0) {
            let cartDataLocal = localStorage.getItem('cart');
            cartDataLocal = JSON.parse(cartDataLocal);

            if (cartDataLocal && cartDataLocal.length > 0) setCart([...cartDataLocal]);
        }
        
    }, [cart])

  return (
    <>
      <AppContext.Provider value={{cart, setCart, cartAdd, cartLike, setCartLike, addCartFavourite}}>
        <BrowserRouter>
          <Header/>
          <Main/>
          <Footer/>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  )
}

export default App


// {
//   useEffect(() => {
//     const storedFavorites = localStorage.getItem('cartLke');
//     if (storedFavorites) {
//       setCartLike(JSON.parse(storedFavorites))
//       setLikeCount(JSON.parse(storedFavorites).length)
//     }
//     console.log('компонент обновился')
//   }, []);


// const addCartFavourite = (item) => {
//   const updateLike = [...cartLike, item]
//   setCartLike(updateLike);
//   setLikeCount(updateLike.length)
//   localStorage.setItem('cartLIke', JSON.stringify(updateLike))
//   console.log('компонент обновился')

//   // data = data.map(item => {
//   //   if (item.id === id) {
//   //     return {...item, isFavorite: true}
//   //   }
//   //   return item
//   // })
//   // const cartLikeTmp = cartLike.includes(id)
//   // ? cartLike.filter((itemLike) => itemLike === id)
//   // : [...cartLike, id]
//   // setCartLike([...cartLike]);
//   // setCartLike(cartLikeTmp);
//   // setIsFavorite(!isFavorite)   

// //   const cartLikeTmp = cartLike;
// //   let itemLike = cartLikeTmp.find((item) => {
    
// //     if (item === id) {
// //       // item = { id: id, favourite: true };
// //       // cartLikeTmp.push(...cartLike, item);
// //       console.log('add')
// // }    

//     // const cartLikeTmp = cartLike;
//     //     let itemLike = cartLikeTmp.find((item) => {
          
//     //       if (item !== id) {
//     //         item = { id: id, favourite: true };
//     //         cartLikeTmp.push(...cartLike, itemLike);
//     //         console.log('add')
//     //   }    
//     // })
// //     localStorage.setItem('cartLike', JSON.stringify(cartLike));
//       // localStorage.setItem('cartLike', JSON.stringify(cartLikeTmp));

//   }

// }