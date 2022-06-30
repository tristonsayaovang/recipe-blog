import './../Pages/Recipe.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Searchbar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };
 
  
    return (
      <div className="search">
        <div className="search-input">
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
          </div>
    
        <div className='filter'>
        {filteredData.length !== 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
              <><div className='suggestions'>
                <Link to ={value.link}>
                  <p className='hover:text-red-600'>{value.title} </p>
                </Link>
                </div>
              </>
              );
            })}
          </div>
        )}
      </div></div>
    );
  }
  
