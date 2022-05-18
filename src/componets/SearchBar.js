//https://www.youtube.com/watch?v=x7niho285qs
// https://github.com/machadop1407/React-Search-Bar
import React, {useState} from 'react'
import './SearchBar.css'
import { Link } from 'react-router-dom';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import CloseIcon from '@mui/icons-material/Close';



function SearchBar({placeholder, data}) {

    const [filteredData, setFilteredData] = useState([]);
    const [enterWord, setenterWord] = useState([""]);
    const handleFilter = (event) => {
        const nameSearch = event.target.value
        setenterWord(nameSearch); 
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
    const clearData= () =>{
        setFilteredData([]);
        setenterWord("")
    }
  return (
    <div className='search'>
        <div className='searchInputs'>
        <input type='text' placeholder={placeholder} value={enterWord} onChange={handleFilter}/>
        <div className='searchIcon'>
            {filteredData.length == 0 ? <LunchDiningIcon /> : <CloseIcon id="clearBtn" onClick={clearData} />  }
        
        </div>
        </div>
        {filteredData.length !== 0 && (
        <div className='dataResult'>
            {filteredData.slice(0,15).map((value, key) => {   
                return (
                <Link className='dataItem' to={"/"+value.id}>
                <p onClick={clearData}>  {value.name} </p>
                </Link>
                );
            })}
        </div>
        )}
    </div>

  );
}

export default SearchBar