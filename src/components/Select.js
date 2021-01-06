import React from "react";
function Select(props) {
    return (
        <select name="breed" onChange={props.handleOnChange}>
            {props.options.map((ele) => {
                return <option value={ele}>{ele}</option>;
            })}
        </select>
    );
}

export default Select;
