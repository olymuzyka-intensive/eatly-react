import { createContext, useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import Menu from "../pages/Menu"
import Blog from "../pages/Blog"
import AboutUs from "../pages/AboutUs"
import Contact from "../pages/Contact"
import Cart from "../pages/Cart"
import Popup from "../pages/Popup"
import Content from "../pages/Content"

export const MainContext = createContext();

function Main() {
  const [data, setData] = useState([]);

    const getData = async () => {
        const dataServer = await fetch('https://foodish-api.com/')
        .then(response => response.json());

        localStorage.setItem('data', JSON.stringify(dataServer));
        setData([...dataServer]);
    };

    useEffect(() => {
        if (data.length == 0) {
            let dataLocal = localStorage.getItem('data');
            dataLocal = JSON.parse(dataLocal);

            if (dataLocal && dataLocal.length > 0) {
                setData([...dataLocal]);
            } else {
                getData();
            }
        }
    }, [data]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/content" element={<Content/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/popup" element={<Popup/>}/>
      </Routes>
    </>
  )
}

export default Main