import React from "react";

function InputComponent(props) {
    return (
        <input
            type={props.type}
            placeholder={props.name}
            className="border p-3 rounded-lg"
            id={props.id}
            value={props.value}
            onChange={props.onChange}
        />
    );
}

export default InputComponent;
