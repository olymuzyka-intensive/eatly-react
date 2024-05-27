import React, { useState } from "react"
import { useContext } from "react"
import { MainContext } from "../layouts/Main";


const Search = () => {
    const data = useContext(MainContext);
    const [searchDish, setSearchDish] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const handleChange = (elem) => {
        elem.preventDefault()
        setSearchDish(elem.target.value)
    }
    if (searchDish.length > 0 ) {
        data.filter((item) => {
            return item.title.match(searchDish)
        })
    }

    // const handleSearch = () => {
    //     onSearch(searchDish)
    // }

    // useEffect(() => {
    //     const results = data.filter(item => item.includes(searchDish));
    //     setSearchResult(results)
    // }, [searchDish])

    return (
        <div className="search">
            <input type="search" onChange= {handleChange} placeholder="Search" value={searchDish}/>
            {/* <input type="text"  placeholder="Search"/> */}

            <button className="btn btn--search" type="submit" > <img src="/src/img/Search.svg" alt="search"/></button>
        </div>
    )
  }
  
  export default Search