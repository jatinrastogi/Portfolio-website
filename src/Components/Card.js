import React from 'react'

const Card = ({img,line}) => {
    return (
        <div style={styles.card} className="card">
            <section>
            <img src={img}/>
            <p>
                {line}
            </p>
            </section>
        </div>
    )
}

const styles = {
    card : {
        width: "500px",
        height: "500px",
        backgroundColor: "black",
        border: "2px solid white",
        boxSizing: "border-box",
        fontSize: "2.5em",
        color: "white" 
    }
}


export default Card
