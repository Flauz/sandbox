import React from 'react'
import PropTypes from "prop-types"

const SearchBar = ({ searchChange, input }) => {
    return (
        <div>
            <input
                name="search"
                value={input}
                placeholder="Search a character"
                type="search"
                onChange={searchChange}
            />
        </div>
    )
}

SearchBar.propTypes = {
    input: PropTypes.string.isRequired,
    searchChange: PropTypes.func.isRequired
}

export default SearchBar
