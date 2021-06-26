import React from 'react'

const Card = ({card_number}) => {
    return (
        <div style={styles.card}>
            {card_number}
        </div>
    )
}

const styles = {
    card : {
        width: "500px",
        height: "300px",
        backgroundColor: "blue",
        border: "2px solid black",
        boxSizing: "border-box",
        fontSize: "2.5em",
        color: "white" 
    }
}


export default Card
