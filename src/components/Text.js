import React from "react";

const Text = (props) => {
    return (
        <h1 className="welcome">{props.children}</h1>
    );
}

export default Text;