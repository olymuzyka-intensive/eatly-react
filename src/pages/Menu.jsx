import Supersale from "../layouts/Supersale"
import Questions from "../layouts/Questions"
import DishesFilter from "../layouts/DishesFilter"


// setTimeout(function() {
//     location.reload();
// }, 1000);
    


function Menu() {
    
    return (
        <>
            <DishesFilter/>
            <Questions/>
        </>
    )
}

export default Menu