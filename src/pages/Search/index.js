import styles from './Search.module.scss';
import SearchApi from "../../api/SearchApi";
import { useLocation ,useNavigate } from 'react-router-dom';
import ResultSearch from './ResultSearch';
import DefaultSearch from './DefaultSearch';
import React, { useContext, useState,useEffect } from 'react';
function Search() {
    const location = useLocation();
    var searchParams = new URLSearchParams(window.location.search);
    var searchquery = searchParams.get('q');
    const [datas, setDatas] = useState('hello');
    useEffect(() => {
        const fetchSearch = async () => {
            try {
              if(searchquery) {
                const response = await SearchApi.getResult(searchquery);
                setDatas(response.data);
            }
              else {
                const response = await SearchApi.getSearch();
                setDatas(response.data);
              }

            } catch (err) {
                console.log(err);
            }
        }
        fetchSearch();
        return () => {
        };
    }, [searchquery])
    return (
      <div>
    {searchquery ? <ResultSearch datas={datas} /> : <DefaultSearch datas={datas} />}
    </div>
    )
    
}

export default Search;