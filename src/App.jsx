import { createContext, useState, useEffect} from "react"
import { BrowserRouter} from "react-router-dom"

import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main from "./layouts/Main"

export const AppContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [isCartLikes, setIsCartLikes] = useState()

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

    useEffect(() => {
      const cartLikes = JSON.parse(localStorage.getItem('cart') || '[]') 
      setIsCartLikes(cartLikes.includes(cart.id))
      // if (cartLikes) {
      //   setIsCartLikes(cartLikes)
      // }
  }, [])
  // useEffect(() => {
  //   localStorage.setItem('cartLike', JSON.stringify(isCartLikes))
  //   }, [isCartLikes])

  const addCartLike = () => {
    const cartLikes = JSON.parse(localStorage.getItem('cartLike') || '[]') 
    if (isCartLikes) {
      const updateLikes = cartLikes.filter(id => id !== cart.id)
      localStorage.setItem('cartLike', JSON.stringify(updateLikes))
    } else {
      localStorage.setItem('cartLike', JSON.stringify([...cartLikes, cartLikes]))
    }
    setIsCartLikes(isCartLikes)
  }

  return (
    <>
      <AppContext.Provider value={{cart, setCart, cartAdd, addCartLike}}>
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