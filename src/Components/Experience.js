import * as ioicons from 'react-icons/io'
import {Link} from 'react-router-dom'
import * as bsIcons from 'react-icons/bs';
import {motion} from 'framer-motion'
const Education = () => {
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
            <motion.h1 variants={sentence} initial="hidden" animate="visible">
                {
                    line.split("").map((char,index) => {
                        return (
                            <motion.span key={char + "-" + index} variants={letter}>
                                {char}
                            </motion.span>
                        )
                    })
                }
            </motion.h1>
            <div className="education-1">
                <motion.div className="education-button1" initial = {{y:-1000}} animate={{y:0}} transition={{delay:1,stiffness:120,type:"spring"}}>
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
                <motion.div className="school" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} >
                <img src="mowito.png"/>
                <section>
                    <h3>
                    Mowito
                    </h3>
                    <p>
                        (June 2021-Present)
                    </p>
                    <p>
                        Robotic Intern
                    </p>
                    <hr/>
                </section>
                </motion.div>
                <motion.div className="education-button2" initial = {{y:-1000}} animate={{y:0}} transition={{delay:1,stiffness:120,type:"spring"}}>
                <Link to="/project">
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
            <motion.div className="education-2" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}>
                <img src="webarch.png" />
                <section>
                    <h3>
                    WebArch Club
                    </h3>
                    <p>
                        ( April 2021-Present)
                    </p>
                    <p>
                        R&D Member
                    </p>
                    <hr/>
                </section>
            </motion.div>
        </div>
    )
}

export default Education
