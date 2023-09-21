import React from 'react'

const Image = (props)=>{
    return (
    <img src={props.imgPoster} alt={props.name} className="poster" />
    )
};

export default Image;