import { createContext, useState, useEffect} from "react"
import { BrowserRouter} from "react-router-dom"

import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main from "./layouts/Main"

export const AppContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [cartLike, setCartLike] = useState([]);
  const [favouriteCount, setFavouriteCount] = useState(0)

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('cartLke'));
    if (storedFavorites) {
      setCartLike(cartLike);
      setFavouriteCount(storedFavorites.length)
    }
  }, []);

const addCartFavourite = (item) => {
    const isFavorite = cartLike.find((itemLike) => itemLike.id === item.id)
    if (isFavorite) {
      const updateItemLikes = cartLike.filter((itemLike) => itemLike.id !== item.id)
      setCartLike(updateItemLikes)
      setFavouriteCount(updateItemLikes.length)
    } else {
      const updateItemLikes = [...cartLike, item]
      setCartLike(updateItemLikes)
      setFavouriteCount(updateItemLikes.length)
    }

    localStorage.setItem('cartLike', JSON.stringify(updateItemLikes));
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
      <AppContext.Provider value={{cart, setCart, cartAdd, cartLike, setCartLike, favouriteCount, addCartFavourite}}>
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