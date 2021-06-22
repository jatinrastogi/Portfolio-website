import React from 'react'
import {motion} from 'framer-motion'
import * as bsIcons from 'react-icons/bs';
import {Link} from 'react-router-dom'

const About = () => {
    const line = "About Me"
    const sentence = {
        hidden: {opacity:0},
        visible : {
            opacity:1,
            transition: {
                delay:0.5,
                staggerChildren:0.6,
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
            
        
            <div className="about-1">
                <motion.div className="button-1" initial = {{y:-1000}} animate={{y:0}} transition={{delay:2,stiffness:120,type:"spring"}}>
            <Link to="/">
                    <motion.button whileHover={{
                        scale:1.2,
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                        TextShadow: "0px 0px 8px rgb(255,255,255)",
                        rotate:360,
                    }}>
                        <bsIcons.BsArrowLeft size={50} color="black"/>
                    </motion.button>
                </Link>
                </motion.div>
                <motion.p variants={sentence} initial="hidden" animate="visible">
    "Hello,My Name is Jatin Rastogi  and I am currently pursuing B.tech Degree in SRM Institute Of Science Of Technology,KTR,Chennai.My main objective is to be a well-rounded programmer with thorough understanding and knowldege in all arenas of Computer Science.So far, I have gained notable knowledge and skill in Python,SQL,HTML,CSS,JavaScript,Git,
    C++,C among others."
                    
                </motion.p>
            
            
                <motion.img src="jatin.jpeg" variants={sentence} initial="hidden" animate="visible" />
                <motion.div className="button-2" initial = {{y:-1000}} animate={{y:0}} transition={{delay:2,stiffness:120,type:"spring"}}>
                <Link to="/education">
                <motion.button whileHover={{
                    scale:1.2,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                    TextShadow: "0px 0px 8px rgb(255,255,255)",
                    rotate:360,
                }}>
                        <bsIcons.BsArrowRight size={50} color="black"/>
                    </motion.button>
                </Link>
                </motion.div>
            </div>
            <motion.div className="about-2" initial = {{x:-1000}} animate={{x:0}} transition={{delay:2,stiffness:120,type:"spring"}} >
                <motion.button whileHover={{
            scale:1.2,
            boxShadow: "0px 0px 8px rgb(255,255,0)",
            TextShadow : "0px 0px 8px rgb(255,255,0)" }}>
                    Resume
                </motion.button>
            </motion.div>
            
        </div>
    )
}

export default About
