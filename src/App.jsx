import { createContext } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Menu from "./pages/Menu"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"

export const AppContext = createContext();

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App