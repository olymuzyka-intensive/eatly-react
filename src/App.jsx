import { createContext, useState, useEffect, useContext} from "react"
import { BrowserRouter} from "react-router-dom"

import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main, { MainContext } from "./layouts/Main"

export const AppContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [cartLike, setCartLike] = useState([]);
  // const data = JSON.parse(localStorage.getItem('data'))    
  // console.log (data) //проверка проходит

  // useEffect(() => {
  //   const storedFavorites = JSON.parse(localStorage.getItem('cartLike'));
  //   if (storedFavorites) {
  //     setCartLike(cartLike);
  //   }
  //   console.log('компонент отрисовался')
  //   // console.log(storedFavorites)
  //   // console.log(cartLike)

  // }, []);

  useEffect(() => {
    localStorage.setItem('cartLike', JSON.stringify(cartLike));
    console.log('компонент обновился')

  }, [cartLike]);

// const addCartFavourite = (id) => {
//     const cartLikeTmp = cartLike;
//         let itemLike = cartLikeTmp.find((item) => {
//           if (item !== id) {
//             item = { id: id, favourite: true };
//             cartLikeTmp.push(...cartLike, itemLike);
//       }    
//       console.log(cartLike)
//     })
//     localStorage.setItem('cartLike', JSON.stringify(cartLike));
//   }

const addCartFavourite = (id) => {
  const cartLikeTmp = JSON.parse(localStorage.getItem('data'))
  // console.log(cartLikeTmp) //проверка проходит

  if (cartLikeTmp && cartLikeTmp.length > 0) {
      const isFavorite = cartLikeTmp.find(item => item.id === id)
        if (isFavorite) {
          const updateLike = cartLikeTmp.filter(item => item.id !== id)
          setCartLike(updateLike)          
          console.log('yes', id)
        } else {
          console.log('no', isFavorite)
        }
       
  }
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