import React from 'react'

const Card = () => {
    return (
        <div style={styles.card}>
            card
        </div>
    )
}

const styles = {
    card : {
        width: "350px",
        height: "200px",
        backgroundColor: "red",
        border: "2px solid black",
        boxSizing: "border-box",
        fontSize: "2.5em",
        color: "white" 
    }
}


export default Card
