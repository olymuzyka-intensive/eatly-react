import { createContext, useState, useEffect, useContext} from "react"
import { BrowserRouter} from "react-router-dom"

import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main, { MainContext } from "./layouts/Main"

export const AppContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [cartLike, setCartLike] = useState([]);
  // const data = useContext(MainContext)
  let objects = JSON.parse(localStorage.getItem('data'))
       
  useEffect(() => {
    const storeFavourite = JSON.parse(localStorage.getItem('dataLike'))
    if (storeFavourite) {
      setCartLike(storeFavourite)
    }
  }, [])

  // toggle
  const addCartFavourite = (id) => {
    objects = objects.filter(obj => {
      if (obj.id === id) {
        return { ...obj, favourites: true}
      }
      return obj
    })
    localStorage.setItem('dataLike', JSON.stringify(objects));

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




