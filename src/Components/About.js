import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
    const line = "Hello,My Name is Jatin Rastogi  and I am currently pursuing B.tech Degree in SRM Institute Of Science Of Technology,KTR,Chennai.My main objective is to be a well-rounded programmer with thorough understanding and knowldege in all arenas of Computer Science.So far, I have gained notable knowledge and skill in Python,SQL,HTML,CSS,JavaScript,Git,C++,C among others."

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
        <div className= "about">
            <div className="about-1">
                <motion.p variants={sentence} initial="hidden" animate="visible">
    "Hello,My Name is Jatin Rastogi  and I am currently pursuing B.tech Degree in SRM Institute Of Science Of Technology,KTR,Chennai.My main objective is to be a well-rounded programmer with thorough understanding and knowldege in all arenas of Computer Science.So far, I have gained notable knowledge and skill in Python,SQL,HTML,CSS,JavaScript,Git,
    C++,C among others."
                    
                </motion.p>
            </div>
            <div className="about-2">
                <img src="jatin.jpeg"/>
            </div>
        </div>
    )
}

export default About
