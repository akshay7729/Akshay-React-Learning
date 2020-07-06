import React, {useState, useEffect} from 'react'
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Search = () => {
    const [query, setQuery] = useState('');
    // debounce in search box
    const debounce = (callback,wait) => {
        let timeout = null
        return (...args) => {
            const next = () => callback(...args)
            clearTimeout(timeout)
            timeout = setTimeout(next,wait)
        }
    }

    const handleSearchKeyUp = debounce(value => {
        setQuery(value);
        console.log('search',value)
    },500);

    return (
        <Form inline className="flex-grow-1 justify-content-center">
            <FormControl 
                type="text" 
                placeholder="Search" 
                className="mr-sm-2 w-75 main-search-box"
                onKeyUp={e => handleSearchKeyUp(e.target.value)} 
            />
            <Button className="main-search-btn">
                <Link to={query ? `/plp/${query}` : `/`}><FontAwesomeIcon icon={faSearch} /></Link>
            </Button>
        </Form>
    )
}

export default Search;