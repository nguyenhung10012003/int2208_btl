import styles from './Header.module.scss'
import { SearchIcon } from '../../components/IconBox';
import React, { createContext, useContext, useState,useEffect } from 'react';
import { useLocation ,useNavigate } from 'react-router-dom';

export const KeyContext = createContext();
function SearchBar() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

  const handleInputChange2 = (event) => {
      setQuery(event.target.value);
      navigate(`/search?q=${query}`); 
    };
  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate(`/search?q=${query}`); 
    }
  };
  const handleClick = () => {
    if (location.pathname !== "/search") {
      navigate(`/search`);
    }
  }
  useEffect(() => {
      if(query) {       
        if (location.pathname !== "/search") {
          setQuery('');
        }
      } 
  })
    return (
        <div className={styles['search-bar']}>
                <input value={query} onChange={handleInputChange} onKeyUp={handleInputChange2} onKeyPress={handleInputKeyPress}  className={styles['search-box']} type="text" placeholder="Search" onClick={handleClick}></input>
              <SearchIcon />
        </div>);
}
export default SearchBar;