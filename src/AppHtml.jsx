import React from 'react'
import './index.css'
import Image from './Image'
import Heading from './Heading'
import Title from './Title'

const Card = (props) => {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <Image imgPoster= {props.imgPoster} />
                    <div className="title">
                        <Heading name = {props.name} />
                        <Title title = {props.title} />
                        <a href={props.link} target="_blank" rel="noreferrer" className="anchor">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;