import { useState } from "react"

function PromoCode({applyCoupon}) {
    const [promoCode, setPromoCode] = useState('')

    const [isCorrect, setIsCorrect] = useState(false)

    const handleApplyCoupon = (e) => {
        e.preventDefault()
        applyCoupon(promoCode)
        setIsCorrect(true)
    }

    return (
        <div>
            <form className="shopping__form">
                <input type="text" placeholder="Apply Coupon" value={promoCode} onChange={e => setPromoCode(e.target.value)} style={{borderColor: isCorrect ? 'green' : 'initial'}} />
                <button onClick={handleApplyCoupon} className="btn btn--apply-coupon" >Apply</button>
            </form>
        </div>                   
    )
}
export default PromoCode