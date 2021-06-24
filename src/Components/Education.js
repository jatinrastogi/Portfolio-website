import * as ioicons from 'react-icons/io'
import {Link} from 'react-router-dom'
import * as bsIcons from 'react-icons/bs';
import {motion} from 'framer-motion'
const Education = () => {
    const line = "EDUCATION"
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
            <div className="education-1">
                <motion.div className="education-button1" initial = {{y:-1000}} animate={{y:0}} transition={{delay:1,stiffness:120,type:"spring"}}>
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
                <motion.div className="school" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} >
                <ioicons.IoIosSchool size={50} color="black" float="left"/> 
                <section>
                    <h3>
                    THE INDIAN SCHOOL
                    </h3>
                    <p>
                        (2006-2018)
                    </p>
                    <p>
                        New Delhi,India
                    </p>
                    <hr/>
                </section>
                </motion.div>
                <motion.div className="education-button2" initial = {{y:-1000}} animate={{y:0}} transition={{delay:1,stiffness:120,type:"spring"}}>
                <Link to="/skill">
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
                <img src="srm.png" />
                <section>
                    <h3>
                    SRM Institute of Science and Technology
                    </h3>
                    <p>
                        (2019-2023)
                    </p>
                    <p>
                        Kattankulathur,Chennai,India
                    </p>
                    <hr/>
                </section>
            </motion.div>
        </div>
    )
}

export default Education
