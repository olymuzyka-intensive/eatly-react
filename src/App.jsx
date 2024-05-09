import { createContext, useState, useEffect} from "react"
import { BrowserRouter} from "react-router-dom"

import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main from "./layouts/Main"

export const AppContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [cartLike, setCartLike] = useState([]);
  
       
  useEffect(() => {
    const storeFavourite = JSON.parse(localStorage.getItem('data'))
    if (!storeFavourite) {
      setCartLike(storeFavourite)
    }
  }, [])

  // toggle
  const addCartFavourite = (id) => {
    const cartLikeTmp = cartLike
    if (cartLikeTmp.includes(id)) {
      setCartLike(cartLikeTmp.filter(item => item !== id))
    } else {
      setCartLike([...cartLikeTmp, id])
    }
      localStorage.setItem('dataLike', JSON.stringify(cartLikeTmp));
  }
  
  useEffect(() => {
    localStorage.setItem('dataLike', JSON.stringify(cartLike));
  }, [cartLike])

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