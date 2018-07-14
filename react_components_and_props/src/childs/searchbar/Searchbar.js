import React from 'react';

export const SearchBar = (props) => {
    return(
        <div>
            <label htmlFor="">Search</label>
            <input type="text" onChange = {props.takeChildInput} placeholder="type tp Search"/>
            <button onClick = {props.parentfn}>Search</button>
        </div>
    )
} 