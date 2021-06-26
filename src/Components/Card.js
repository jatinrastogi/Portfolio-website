import React from 'react'

const Card = ({img,title,line}) => {
    return (
        <div style={styles.card} className="card">
            
            <img src={img}/>
        <div className="image_overlay">
            <div className="image_title">
                {title}
                <p className="image_description">
                    {line}
                </p>
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
