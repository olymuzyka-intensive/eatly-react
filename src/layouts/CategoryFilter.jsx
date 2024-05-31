import React, { useState } from "react"
import SubcategoryStyle from './SubcategoryStyle';
import DishesLikeButton from './DishesLikeButton';


function CategoryFilter({data}) {
    const [selectedCategory, setSelectedCategory] = useState(null)

    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
    }
    // const filteredItems = selectedCategory === 'main' ? items : items.filter(item => item.category === selectedCategory)
    // const filteredItems = selectedCategory ? data.filter(item => item.category === selectedCategory) : data

    return (
        <div className="category">
        <div className="category__card">
            <div className="category__title">Category</div>
        
            <ul className="category__list">
                <li className="category__item" onClick={() => setSelectedCategory('pizza')}>
                {/* <li className="category__item"> */}
                    <h4 className="category__item_title category__item_title-1" >Pizza</h4>
                </li>
                <li className="category__item category__item-active" onClick={() => setSelectedCategory('main')} >
                {/* <li className="category__item category__item-active" > */}
                    <h4 className="category__item_title category__item_title-2" >Dish</h4>
                </li>
                <li className="category__item" onClick={() => setSelectedCategory('donat')}>
                {/* <li className="category__item"> */}
                    <h4 className="category__item_title category__item_title-3" >Donat</h4>
                </li>
                <li className="category__item" onClick={() => setSelectedCategory('ice')}>
                {/* <li className="category__item"> */}
                    <h4 className="category__item_title category__item_title-4" >Ice</h4>
                </li>
            </ul>
            <div className="category__title">Sort By</div>
            <div className="category__card_col">
                <div className="category__card_row">
                    <div className="category__card_history">Recomended</div>
                    <div className="category__card_history category__card_history-active">Fast Delivery</div>
                </div>
                <div className="category__card_history">Most Popular</div> 
           </div>

           {/* временно отключено */}
            <div className="category__title">Price</div>
            <div className="category__title_line"> 
                <div className="category__title_circle">            
                </div>
            </div>
            
            <ul className="category__price">
                <li className="category__price_item">$ 0</li>
                <li className="category__price_item">$ 25</li>
                <li className="category__price_item">$ 50</li>
                <li className="category__price_item">$ 100</li>
                <li className="category__price_item">$ 500</li>
                <li className="category__price_item">$ 1000</li>
            </ul>
            <div className="categotyr__button">
                <button type="button" className="btn btn--apply">Apply</button>
            </div>
        </div>
    </div>                

        
    )
  }
  
  export default CategoryFilter