import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import * as bsIcons from 'react-icons/bs';

const Experience = () => {
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
            <div className="experience">
            <motion.div className="button-1"  initial = {{y:-1000}} animate={{y:0}} transition={{delay:0.5,stiffness:120,type:"spring"}}>
            <Link to="/skill">
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
            
            <div className="wrapper">
                <motion.div className="center-line" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}>

                </motion.div>
                <motion.div className="row row-1" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}}>
                    <section>
                        <img src="mowito.png" className="icon mowito"/>
                        <div className="details">
                            <span className="title">
                                Mowito
                            </span>
                            <span> June 2021</span>
                        </div>
                        <span>
                            Robotics Intern
                        </span>

                    </section>
                </motion.div>
                <motion.div className="row row-2" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.1}} >
                    <section>
                        <img src="webarch.png" className="icon webarch"/>
                        <div className="details">
                        <span className="title">
                                WebArch 
                            </span>
                        
                            <span> May 2021</span>
                        </div>
                        <span>
                            ML member 
                        </span>
                        

                    </section>
                </motion.div>
                <motion.div className="row row-3" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.4}}>
                    <section>
                        <img src="sparks.png"  className="icon sparks"/>
                        <div className="details">
                            <span className="title">
                                Sparks Foundation
                            </span>
                            <span> Mar 2021</span>
                        </div>
                        <span>
                            DS Intern
                        </span>

                    </section>
                </motion.div>
            </div>
            <motion.div className="button-2"  initial = {{y:-1000}} animate={{y:0}} transition={{delay:0.5,stiffness:120,type:"spring"}}>
            <Link to="/projects">
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
        </div>    
    )
}

export default Experience
