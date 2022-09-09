import React, { useState, useEffect } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { IType, ICategory } from "../../types/types";
import { createSearchParams, useSearchParams } from "react-router-dom";
import useFilter from "../../hooks/useFilter";

// interface IFilterProps {
//     items: IType[] | ICategory[];
// }

const Filter= ({items, name}) => {
    let [searchParams, setSearchParams] = useSearchParams();
    // const [ query, setQuery ] = useState([]);
    const { checkboxChange, query, createQueryParams, searchObj} = useFilter()

    useEffect(() => {
        createQueryParams(name, query)
    }, [query])

    useEffect(() => {
        console.log(searchObj);
        setSearchParams(searchObj)
    }, [searchObj])

    // const handleChange = (e, id) => {
    //     if(e.target.checked) {
    //         console.log("before push", query);
    //         setQuery(query => [...query, id])
    //         console.log("after push", query);
    //     } else {
    //         console.log("before", query);
    //         setQuery(query => query.filter(item => item !== id))
    //         console.log("after", query);
    //     }     
    //     console.log(query.length);
        
    // }

    // useEffect(() => {
    //     if(query.length === 0) {
    //         setSearchParams()
    //     }   
    // }, [query])


    const content = items.map((item, i) => <FormControlLabel 
                                                key={i} 
                                                control={<Checkbox />}  
                                                label={item.name}
                                                onChange={(e) => {checkboxChange(e, item.id)}}
                                            />)

    return (
        <>
            <FormGroup>
                {/* <FormControlLabel control={<Checkbox />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Disabled" /> */}
                {content}
                {/* <button
                    onClick={handleFind}
                >
                    Push
                </button> */}
            </FormGroup>
        </>

    )
}
export default Filter;