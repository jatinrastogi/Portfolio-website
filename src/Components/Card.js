import React from 'react'
import * as FaIcons from 'react-icons/fa';
import {Link} from "react-router-dom"
const Card = ({img,link,title,line}) => {
    return (
        <div style={styles.card} className="card">
            
            <img src={img}/>
        <div className="image_overlay">
            <div className="image_title">
                {title}
            </div>
                <p className="image_description">
                    {line}
                </p>
            
            <div className="card-icon">
            <a href={link} target="_blank">
                <button>
                    <FaIcons.FaGithub size={50} color="black"/>
                </button>
            </a>
            </div>
            </div>
        </div>
        
    )
}

const styles = {
    card : {
        width: "500px",
        height: "500px",
        backgroundColor: "black",
        border: "2px solid black",
        boxSizing: "border-box",
        fontSize: "2.5em",
        color: "white",
        position:'relative' 
    }
}


export default Card
