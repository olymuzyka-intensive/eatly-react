import { createContext, useState, useEffect} from "react"
import { BrowserRouter} from "react-router-dom"
import ScrollToTop from './layouts/ScrollToTop'

import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main from "./layouts/Main";

export const AppContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [cartLike, setCartLike] = useState([]);
  // const [cartLikeCount, setCartLikeCount] = useState(0)

  useEffect(() => {
    if (cartLike.length == 0) {
      let cartLikeDataLocal = localStorage.getItem('cartLike');
      // cartLikeDataLocal = JSON.parse(cartLikeDataLocal);

      if (cartLikeDataLocal && cartLikeDataLocal.length > 0) setCartLike([...cartLikeDataLocal]);
  }
    // console.log('компонент обновился')
    // console.log(cartLike)
  }, [cartLike]);

    const addCartFavourite = (id) => {
        // const cartLikeTmp = JSON.parse(localStorage.getItem('data')) //для проверки
        // // console.log(cartLikeTmp)

        // let itemLike = cartLikeTmp.find((itemFavourite) => itemFavourite.id === id)
        //   if (itemLike) {
            
        //      // Логика, если элемент найден
        //      const saveFavourites = cartLike.filter((itemFavourite) => itemFavourite.id !== id)
        //      setCartLike(saveFavourites)
        //      localStorage.setItem('cartLike', JSON.stringify(cartLike));
        //     //  setCartLikeCount(saveFavourites.length)
        //   }  else {  
        //   // Логика, если элемент не найден
        //     const saveFavourites = [...cartLike, id]
        //     setCartLike(saveFavourites)
        //     // setCartLikeCount(saveFavourites.length)
        //   }
        //   // localStorage.setItem('cartLike', JSON.stringify(itemLike));  
        const cartLikeTmp = cartLike;
        
        let itemLike = cartLikeTmp.find((itemFav) => {
            return itemFav.id == id;
        });

        if (!itemLike) {
            itemLike = { id: +id, favourites: true };
            cartLikeTmp.push(itemLike);

        } 
        else {
          itemLike.favourites = false;
          
          // setCartLike(cartLike.filter(item => item.id !== id))
          // cartLikeTmp.splice(id,1);
          localStorage.removeItem('cartLike')
        } 
        setCartLike([...cartLikeTmp]);
        localStorage.setItem('cartLike', JSON.stringify(cartLikeTmp));
    }

    const cartAdd = (id) => {
        const cartTmp = cart;
        
        let item = cartTmp.find((item) => {
            return item.id == id;
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
            // cartDataLocal = JSON.parse(cartDataLocal);

            if (cartDataLocal && cartDataLocal.length > 0) setCart([...cartDataLocal]);
        }
        
    }, [cart])

  return (
    <>
      <AppContext.Provider value={{cart, setCart, cartAdd, cartLike, setCartLike, addCartFavourite}}>
        <BrowserRouter>
        <ScrollToTop />
          <Header/>
          <Main/>
          <Footer/>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  )
}

export default App