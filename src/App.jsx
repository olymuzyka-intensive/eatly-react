import { createContext } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Blog from "./pages/Blog"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Popup from "./pages/Popup"
import Content from "./pages/Content"

export const AppContext = createContext();

function App() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  )
}

export default App