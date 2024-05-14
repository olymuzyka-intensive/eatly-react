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
    if (cartLike.length == 0) {
      let cartDataLocal = localStorage.getItem('cartLike');
      cartDataLocal = JSON.parse(cartDataLocal);

      if (cartDataLocal && cartDataLocal.length > 0) setCartLike([...cartDataLocal]);
  }
    // localStorage.setItem('cartLike', JSON.stringify(cartLike));
    console.log('компонент обновился')
  }, [cartLike]);

const addCartFavourite = (id) => {
    const cartLikeTmp = JSON.parse(localStorage.getItem('data'))
        let itemLike = cartLikeTmp.find((item) => {
          if (item === id) {
            item = { id: id, favourites: true };
      }    
    })
    // cartLikeTmp.push(...cartLike, itemLike);
    localStorage.setItem('cartLike', JSON.stringify(cartLike));
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