import React, { useEffect, useState, useLayoutEffect } from "react"
import { MainContext } from "./Main"
import { useContext } from "react";
import Slider from '@mui/material/Slider';
import { styled } from '@mui/system';

const CustomSlider = styled(Slider)({
    '& .MuiSlider-thumb': {
      width: 20,
      height: 20,
    //   marginTop: -8,
    //   marginLeft: -12,
    },
  });
function CategoryFilter({products, setFilteredProducts }) {
    const data = useContext(MainContext)

    const [selectedCategory, setSelectedCategory] = useState('all')
    const [sortCategory, setSortCategory] = useState('')

    const [priceRange, setPriceRange] = useState(20);

    useLayoutEffect( () => {
        let productsList = JSON.parse(localStorage.getItem('data')) || []
        const filteredProducts = productsList.filter(product => product.category === null ? '' : true)
        setFilteredProducts(filteredProducts) 
    },[])

    const handleCategorySelect = (category) => {        
        setSelectedCategory(category)
        const filteredProducts = products.filter(product => category === null ? true : product.category === category) 
        setFilteredProducts(filteredProducts)
    }
    const handleCategorySort = (sort) => {        
        setSortCategory(sort)
        const sortProducts = products.filter(product => sortCategory === null ? true : product.sortcategory === sort)
        setFilteredProducts(sortProducts)
    }
    const handlePriceChange = (event) => {      
      const value = event.target.value
      setPriceRange(value);

    //   const changeProducts = products.filter(product => value === 50 ? true : product.price == value)
    const changeProducts = products.filter(product => product.price <= priceRange)

        setFilteredProducts(changeProducts)
    };

    return (
        <div className="category">
        <div className="category__card">
            <div className="category__title">Category</div>
            <ul className="category__list">

                <li className={selectedCategory === 'pizza' ? "category__item-active" : "category__item"}  onClick={() => handleCategorySelect('pizza')}>
                    <h4 className={selectedCategory === 'pizza' ? "category__item_title-1 active" : "category__item_title-1"} >Pizza</h4>
                </li>
                <li className={selectedCategory === 'main' ? "category__item-active" : "category__item"}  onClick={() => handleCategorySelect('main')}>
                    <h4 className={selectedCategory === 'main' ? "category__item_title-2 active" : "category__item_title-2"}>Dish</h4>
                </li>
                <li className={selectedCategory === 'donut' ? "category__item-active" : "category__item"}  onClick={() => handleCategorySelect('donut')}>
                    <h4 className={selectedCategory === 'donut' ? "category__item_title-3 active" : "category__item_title-3"} >Donut</h4>
                </li>
                <li className={selectedCategory === 'ice' ? "category__item-active" : "category__item"}  onClick={() => handleCategorySelect('ice')}>
                    <h4 className={selectedCategory === 'ice' ? "category__item_title-4 active" : "category__item_title-4"} >Ice</h4>
                </li>
            </ul>

            <div className="category__title">Sort By</div>
            <div className="category__card_col">
                <div className="category__card_row">
                    <div className={sortCategory === 'Recomended' ? "category__card_history-active" : "category__card_history"}  onClick={() => handleCategorySort('Recomended')}>Recomended</div>
                    <div className={sortCategory === 'Fast Delivery' ? "category__card_history-active" : "category__card_history"}  onClick={() => handleCategorySort('Fast Delivery')}>Fast Delivery</div>
                </div>
                <div className={sortCategory === 'Most Popular' ? "category__card_history-active" : "category__card_history"}  onClick={() => handleCategorySort('Most Popular')}>Most Popular</div> 
           </div>
           <div>

           <div className="category__title">Price</div>
            <CustomSlider
                value={priceRange}
                onChange={handlePriceChange}
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
            
            <div className="category__button">
                <button type="button" className="btn btn--apply" onClick={() => {handleCategorySelect(null)}}>Reset</button>
            </div>
        </div>
    </div>                
</div>
        
    )
  }
  
  export default CategoryFilter





              {/* <div className="category__title">Price</div>
            <div className="category__title_line"> 
                <input className="category__title_circle" 
                type="range" 
                min="0" max="50" 
                value={price} 
                onChange={handlePriceSort} />         
            </div>
            
            <ul className="category__price">
                <li className="category__price_item">$ 0</li>
                <li className="category__price_item">$ 10</li>
                <li className="category__price_item">$ 20</li>
                <li className="category__price_item">$ 30</li>
                <li className="category__price_item">$ 40</li>
                <li className="category__price_item">$ 50</li>
            </ul>
        </div> */}

            {/* <div className="category__title">Price</div>
            <div className="category__title_line"> 
                <input className="category__title_circle" type="range" min="0" max="100" value={priceFilter} onChange={handlePriceSelect} />            
            </div>
            
            <ul className="category__price">
                <li className="category__price_item">$ 0</li>
                <li className="category__price_item">$ 10</li>
                <li className="category__price_item">$ 20</li>
                <li className="category__price_item">$ 30</li>
                <li className="category__price_item">$ 40</li>
                <li className="category__price_item">$ 50</li>
            </ul> */}
