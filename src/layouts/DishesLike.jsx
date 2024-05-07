import { useEffect, useState } from 'react';

function DishesLike(cart) {
        // const [isCartLike, setIsCartLike] = useState()

    

    const addCartLike = (id) => {
        const cartLike = JSON.parse(localStorage.getItem('dataLike') || '[]')

        if (isCartLike) {
            const updateCartLike = cartLike.filter(id => id !== cart.id)
            localStorage.setItem('dataLike', JSON.stringify(updateCartLike))
        } else {
            localStorage.setItem('dataLike', JSON.stringify([...cartLike, cart.id]))
        }
        setIsCartLike(isCartLike)
    }
    useEffect(() => {
        const cartLike = JSON.parse(localStorage.getItem('dataLike') || '[]')
        setIsCartLike(cartLike.includes(cart.id))
    }, [cart])

    return 
}

export default DishesLike