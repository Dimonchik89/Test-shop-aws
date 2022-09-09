import { useState } from "react";

const useFilter = () => {
    const [ query, setQuery ] = useState([]);
    const [ searchObj, setSearchObj ] = useState({});

    const checkboxChange = (e, id) => {
        if(e.target.checked) {
            setQuery(query => [...query, id])
        } else {
            setQuery(query => query.filter(item => item !== id))
        }
    }

    const createQueryParams = (filterName, query) => {
        setSearchObj(searchParams => ({...searchParams, [filterName]: query.join(",")}))
    }

    return {
        checkboxChange,
        query,
        createQueryParams,
        searchObj
    }
   
}
export default useFilter;