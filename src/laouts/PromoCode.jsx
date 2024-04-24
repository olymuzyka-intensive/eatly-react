import { useState } from "react"

function PromoCode({applyCoupon}) {
    const [promoCode, setPromoCode] = useState('')

    const [isCorrect, setIsCorrect] = useState(false)

    const handleChange = (e) => {
        setPromoCode(e.target.value)
    }
    const handleApplyCoupon = (e) => {
        e.preventDefault()
        applyCoupon(promoCode)
        setIsCorrect(true)
        setPromoCode('')
    }

    return (
        <div>
            <form className="shopping__form">
                <input type="text" placeholder="Apply Coupon" value={promoCode} onChange={handleChange} />
                <button onClick={handleApplyCoupon} className="btn btn--apply-coupon" >Apply</button>
            </form>
        </div>                   
    )
}
export default PromoCode