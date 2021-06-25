import React, { Component } from 'react'
import {motion} from 'framer-motion'
import Card from "./Card"
const line = "EXPERIENCE"
const sentence = {
    hidden: {opacity:1},
    visible : {
        opacity:1,
        transition: {
            delay:0.5,
            staggerChildren:0.2,
        },
    },
}
const letter = {
    hidden : { opacity:0,y:50},
    visible : {
        opacity:1,
        y:0,
    },

}
class Project extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="education" >
                <motion.header variants={sentence} initial="hidden" animate="visible">
                {
                    line.split("").map((char,index) => {
                        return (
                            <motion.span key={char + "-" + index} variants={letter}>
                                {char}
                            </motion.span>
                        )
                    })
                }
                </motion.header>
            <div className="view-port" style={styles.view_port}>
                <div className="card-container" style={styles.card_container}>
                    <Card/>
                </div>
            </div>
            </div>
        )
    }
}
const styles = {
    view_port : {
        transform: 'translate(-50%, -50%)',
        width: '350px',
        height: '200px',
        backgroundColor: 'red',
        position: "absolute",
        left: "50%",
        top: "50%"
    },
    card_container: {
        display: 'flex',
        flexDirection: 'row',
        width: 'fit-content'
    }
}
export default Project
