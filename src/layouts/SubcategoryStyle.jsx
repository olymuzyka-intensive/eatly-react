import React from "react";

function SubcategoryStyle(item) {
    
    let className;
    switch(item.subcategory) {
        case 'Healthy': 
            className = 'dishes__category_1';
            break;
        case 'Trending': 
            className = 'dishes__category_2';
            break;
        case 'Supreme': 
            className = 'dishes__category_3';
            break;
    }
    return (
        <div>
            <h4 className={className}>{item.subcategory}</h4>
        </div>
    )
  }
  
  export default SubcategoryStyle