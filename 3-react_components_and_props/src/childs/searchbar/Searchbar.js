import React from 'react';

export const SearchBar = (props) => {
    return(
        <div>
            {/* props are short form of properties .These are used for parent to child talk in components */}
            <label htmlFor="">Search</label>
            <input type="text" onChange = {props.takeChildInput} placeholder="Yype to Search"/>
            <button onClick = {props.parentfn}>Search</button>
            {/* now these props are used by dumb components to share parent child talk 
                these are used as props.attributeName  now these attributes contains funcitons and passes arguments to functions for child to parent talk 
                props calls the attribute of SearchBar element which then calls a function 
                */}
        </div>
    )
} 