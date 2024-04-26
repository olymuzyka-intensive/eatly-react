// import Header from "../laouts/Header"
// import Footer from "../laouts/Footer"
import Supersale from "../layouts/Supersale"
import Questions from "../layouts/Questions"
import DishesFilter from "../layouts/DishesFilter"

function Menu() {
    return (
        <>
        {/* <Header/> */}
            <Supersale/>
            <DishesFilter/>
            <Questions/>
        {/* <Footer/> */}
        </>
    )
}

export default Menu