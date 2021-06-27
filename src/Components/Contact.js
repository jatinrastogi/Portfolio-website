import React from 'react'
import {motion} from 'framer-motion'
const Contact = () => {
    const line = "Contact Me";
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
    return (
        <div className="education">
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
        </div>
    )
}

export default Contact
