import GetSupersale  from "../layouts/GetSupersale "
import DishesFavourtes from "../layouts/DishesFavourites"

function MenuAll() {
    return (
        <>
            <GetSupersale/>
            <h2 className="dishes__title">Our Favourites <span>Dishes</span></h2>
            <DishesFavourtes/>
        </>
    )
}

export default MenuAll