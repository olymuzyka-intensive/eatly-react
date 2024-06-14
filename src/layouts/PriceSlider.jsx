import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/system';

const CustomSlider = styled(Slider)({
    '& .MuiSlider-thumb': {
      width: 20,
      height: 20,
    },
  });
function PriceSlider() {
    const [priceRange, setPriceRange] = useState(50);

    const handlePriceChange = (event, newPrice) => {
      setPriceRange(newPrice);
    };
    return (
        <div>
            <div className="category__title">Price</div>
            <CustomSlider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={0}
                max={50}
            />
            <ul className="category__price">
                <li className="category__price_item">$ 0</li>
                <li className="category__price_item">$ 10</li>
                <li className="category__price_item">$ 20</li>
                <li className="category__price_item">$ 30</li>
                <li className="category__price_item">$ 40</li>
                <li className="category__price_item">$ 50</li>
            </ul>
        </div>
    )
  }
  
  export default PriceSlider