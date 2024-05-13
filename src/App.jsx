import { createContext, useState, useEffect, useContext} from "react"
import { BrowserRouter} from "react-router-dom"

import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main, { MainContext } from "./layouts/Main"

export const AppContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [cartLike, setCartLike] = useState([]);
  const [isFavourites, setIsFavourites] = useState(false)
  const data = useContext(MainContext)
  
const addCartFavourite = (id) => {
  const cartLike = JSON.parse(localStorage.getItem('data'));
        
  let itemLike = cartLike.filter((item) => {
      return +item.id == +id;
  });

  // const cartLikeTmp = data.find(item)
  // ? cartLike.filter((itemLike) => itemLike !== item)
  // : [...cartLike, item]
  // setCartLike([...cartLikeTmp])
  // // setIsFavorites(!isFavourites)   
  if (itemLike) {
      // setIsFavourites(true);
      itemLike = { id: itemLike.id, favourites: true };
            cartLike.push(itemLike);
            setCartLike([...cartLike])
     console.log('добавился в избранное')    
    localStorage.setItem('cartLike', JSON.stringify(cartLike));

  } 
  else {
      // setIsFavourites(false);
      item = { id: item.id, favourites: false };
  } 
  }
  useEffect(() => {
    localStorage.setItem('cartLike', JSON.stringify(cartLike));
    console.log('компонент отрисовался')
  }, []);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('cartLke'));
    if (storedFavorites) {
      setCartLike(cartLike);
    }
    console.log('компонент обновился')

  }, [cartLike]);

    // useEffect(() => {
    //     const storedFavourites = localStorage.getItem('cartLike');
    //     if (!storedFavourites) {
    //       setIsFavourites((storedFavourites));
    //     }
    //   }, []);

    //   useEffect(() => {
    //     localStorage.setItem('cartLike', JSON.stringify(isFavourites))
    //     // console.log(storedFavourites)
    //     localStorage.setItem('cartLike', JSON.stringify(cartLike));

    //     console.log('компонент обновился')
    //   }, [cartLike])


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
      <AppContext.Provider value={{cart, setCart, cartAdd, cartLike, setCartLike, isFavourites, setIsFavourites, addCartFavourite}}>
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