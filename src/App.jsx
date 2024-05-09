import { createContext, useState, useEffect} from "react"
import { BrowserRouter} from "react-router-dom"

import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main from "./layouts/Main"

export const AppContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [cartLike, setCartLike] = useState([]);
       
  const addCartFavourite = (id) => {
    const cartLikeTmp = cartLike;
        let itemLike
        if (itemLike !== id) {
          itemLike = { id: id, favourite: true };
          // setCartLike([...cartLikeTmp]);
          // cartLikeTmp.push(cartLike);
          cartLikeTmp.push(...cartLike, itemLike);

          // localStorage.setItem('cartLike', JSON.stringify(cartLikeTmp));--
      } else { 
          itemLike = { id: id, favourite: false };
          // localStorage.setItem('cartLike', JSON.stringify(cartLikeTmp));++

      }
        //++
        localStorage.setItem('cartLike', JSON.stringify(cartLikeTmp));
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

    // useEffect(() => {
    //   const storedFavorites = JSON.parse(localStorage.getItem('cartLke'));
    //   if (storedFavorites) {
    //     setCartLike(cartLike);
    //   }
    // }, []);
    // useEffect(() => {
    //   localStorage.setItem('cartLike', JSON.stringify(cartLike));

    // }, [cartLike]);
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