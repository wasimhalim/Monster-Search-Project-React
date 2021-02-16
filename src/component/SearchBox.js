import React from 'react'

function SearchBox({placeholder,changeHandler}) {
    return (
        <div className="text-center">
            <input type="search" className="border text-center focus:outline-none" placeholder={placeholder} onChange={changeHandler}/>
        </div>
    )
}

export default SearchBox
