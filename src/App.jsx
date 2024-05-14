import { createContext, useState, useEffect} from "react"
import { BrowserRouter} from "react-router-dom"

import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main from "./layouts/Main"

export const AppContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [cartLike, setCartLike] = useState([]);
  const [cartLikeCount, setCartLikeCount] = useState(0)

  useEffect(() => {
    localStorage.setItem('cartLike', JSON.stringify(cartLike));
    console.log('компонент отрисовался')
  }, []);

const addCartFavourite = (item) => {
    const cartLikeTmp = JSON.parse(localStorage.getItem('data'))
    // console.log(cartLikeTmp)

        let itemLike = cartLikeTmp.find((itemFavourite) => itemFavourite.id === item.id)
          if (itemLike) {
             // Логика, если элемент найден
             const saveFavourites = cartLike.filter((itemFavourite) => itemFavourite.id !== item.id)
             setCartLike(saveFavourites)
             setCartLikeCount(saveFavourites.length)
             console.log(saveFavourites)
          }  else {  
          // Логика, если элемент не найден
            const saveFavourites = [...cartLike, item]
            setCartLike(saveFavourites)
            setCartLikeCount(saveFavourites.length)
            
          }
    // localStorage.setItem('cartLike', JSON.stringify(cartLike));
  }
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('cartLke'));
    if (storedFavorites) {
      setCartLike(cartLike);
    }
    console.log('компонент обновился')

  }, [cartLike]);


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