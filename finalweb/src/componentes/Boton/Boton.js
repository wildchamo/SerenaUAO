import React from "react";

const Title = function (props){
    console.log(props);
    const {label}=props.label;
    return (
        <h1>{label}</h1>
    )
}