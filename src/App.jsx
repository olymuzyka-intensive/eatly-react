import { createContext, useState, useEffect} from "react"
import { BrowserRouter} from "react-router-dom"

import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main from "./layouts/Main"

export const AppContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [cartLike, setCartLike] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false)
       
  const addCartFavourite = (item) => {
      const cartLikeTmp = cartLike.includes(item)
      ? cartLike.filter((itemLike) => itemLike !== item)
      : [...cartLike, item]
      setCartLike(cartLikeTmp);
      setIsFavorite(!isFavorite)   
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

  //   const cartLikeAdd = (id) => {
  //     const cartLikeTmp = cartLike;
        
  //       let item = cartLikeTmp.find((item) => {
  //           return +item.id === +id;
  //       });

  //       if (item.id === id) {
  //           item.favourite = true;
  //       } 
  //     // else { 
  //     //       item = { id: id, favourite: false };
  //     //       cartLikeTmp.push(item);
  //     //   }

      // setCartLike([...cartLikeTmp]);
      // localStorage.setItem('cartLike', JSON.stringify(cartLikeTmp));
  //   }

  useEffect(() => {
    if (cartLike.length == 0) {
    let cartLikeDataLocal = localStorage.getItem('cartLike');
    cartLikeDataLocal = JSON.parse(cartLikeDataLocal);

    if (cartLikeDataLocal && cartLikeDataLocal.length > 0) setCartLike([...cartLikeDataLocal]);
    }
  }, [cartLike])

  
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