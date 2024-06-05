import React, { useState } from 'react';
import Slider from 'react-slider';

function PriceSlider() {
    const [maxPrice, setMaxPrice] = useState(1000);

    const handleSlide = (value) => {
      setMaxPrice(value);
    };

    return (
        <div>
            {/* <div className="category__title">Price</div>
            <div className="category__title_line"> 
                <div className="category__title_circle">            
                </div>
            </div>
            
            <ul className="category__price">
                <li className="category__price_item">$ 0</li>
                <li className="category__price_item">$ 10</li>
                <li className="category__price_item">$ 20</li>
                <li className="category__price_item">$ 30</li>
                <li className="category__price_item">$ 40</li>
                <li className="category__price_item">$ 50</li>
            </ul> */}
        <Slider
            min={0}
            max={100}
            defaultValue={maxPrice}
            onChange={handleSlide}
      />
    </div>
    )
  }
  
  export default PriceSlider