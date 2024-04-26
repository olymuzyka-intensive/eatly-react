import { useState } from "react"

function PromoCode({applyCoupon}) {
    const [promoCode, setPromoCode] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [isCorrect, setIsCorrect] = useState(false)

    const handleChange = (e) => {
        setPromoCode(e.target.value)
        if (e.target.value === "sale50") {
            setIsCorrect(true)
        } else {
            setIsCorrect(false)
        }
    }
    const handleApplyCoupon = (e) => {
        e.preventDefault()        
        applyCoupon(promoCode)
        if (inputValue === "sale50") {
            setIsCorrect(true)
        }
        
        // setPromoCode('')
    }

    return (
        <div>
            <form className="shopping__form">
                <input type="text" placeholder="Apply Coupon" value={promoCode} onChange={handleChange} style={{ border: `1px solid ${isCorrect ? '#6C5FBC' : 'initial'}` }}/>
                
                <button onClick={handleApplyCoupon} className="btn btn--apply-coupon" >Apply</button>
                
            </form>
        </div>                   
    )
}
export default PromoCode



