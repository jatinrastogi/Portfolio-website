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
            <motion.div className="button-1">
            <Link to="/about">
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
                <div className="center-line">

                </div>
                <div className="row row-1">
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
                </div>
                <div className="row row-2">
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
                </div>
                <div className="row row-3">
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
                </div>
            </div>
            <div className="button-2">
            <Link to="/about">
                    <motion.button whileHover={{
                        scale:1.2,
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                        TextShadow: "0px 0px 8px rgb(255,255,255)",
                        rotate:360,
                    }}>
                        <bsIcons.BsArrowRight size={50} color="black"/>
                    </motion.button>
                </Link>
            </div>
        </div>
        </div>    
    )
}

export default Experience
