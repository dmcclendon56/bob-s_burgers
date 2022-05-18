//https://www.youtube.com/watch?v=x7niho285qs
import React, {useState} from 'react'
import './SearchBar.css'


function SearchBar({placeholder, data}) {

    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const nameSearch = event.target.value
        const newList = data.filter((value) => {
            return value.name.toLowerCase().includes(nameSearch.toLowerCase());
        });
//
        if(nameSearch === "") {
            setFilteredData([]);

            }else{
                setFilteredData(newList);   
            }

    }
  return (
    <div className='search'>
        <div className='searchInputs'>
        <input type='text' placeholder={placeholder} onChange={handleFilter}/>
        <div className='searchIcon'>

        </div>
        </div>
        {filteredData.length !== 0 && (
        <div className='dataResult'>
            {filteredData.slice(0,15).map((value, key) => {   
                return (
                <a className='dataItem' href={value.CharacterList} target="_blank">
                <p> {value.name} </p>
                </a>
                );
            })}
        </div>
        )}
    </div>

  );
}

export default SearchBar