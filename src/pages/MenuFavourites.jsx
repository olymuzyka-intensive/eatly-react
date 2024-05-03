// import Header from "../laouts/Header"
// import Footer from "../laouts/Footer"
import GetSupersale  from "../layouts/GetSupersale "
import DishesFavourtes from "../layouts/DishesFavourites"

function MenuAll() {
    return (
        <>
        {/* <Header/> */}
            <GetSupersale/>
            <h2 className="dishes__title">Our Favourites <span>Dishes</span></h2>
            <DishesFavourtes/>
        {/* <Footer/> */}
        </>
    )
}

export default MenuAll