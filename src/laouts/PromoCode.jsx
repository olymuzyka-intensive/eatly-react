import { useState} from "react"

function PromoCode(applyCoupon) {

            const [promoCode, setPromoCode] = useState('')
            const handleApplyCoupon = () => {
                applyCoupon(promoCode)
            }
        
            return (
                <div>
                    <form className="shopping__form">
                        <input type="text" placeholder="Apply Coupon" value={promoCode} onChange={e => setPromoCode(e.target.value)} />
                        <button onClick={handleApplyCoupon} className="btn btn--apply-coupon">Apply</button>
                    </form>
                </div>                   
            )
        }  
        
  
  export default PromoCode