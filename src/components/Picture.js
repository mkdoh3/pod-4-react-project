import React from "react";

const Picture = (props) => {
    const style = {
        height: "150px",
    };
    return (
        <div>
            <img style={style} src={props.src}></img>
        </div>
    );
};

export default Picture;
