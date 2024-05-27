import React from "react";

function SubcategoryStyle(props) {
    let className;
    switch(props.subcategory) {
        case 'Healthy': 
            className = 'dishes__category dishes__category_1';
            break;
        case 'Trending': 
            className = 'dishes__category dishes__category_2';
            break;
        case 'Supreme': 
            className = 'dishes__category dishes__category_3';
            break;
    }
    return (
        <div>
            <h4 className={className}>{props.subcategory}</h4>
        </div>
    )
  }
  
  export default SubcategoryStyle