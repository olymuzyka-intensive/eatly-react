import { createContext } from "react"
import { BrowserRouter} from "react-router-dom"

import Footer from "./laouts/Footer";
import Header from "./laouts/Header";
import Main from "./laouts/Main"

export const AppContext = createContext();

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App