import {motion} from 'framer-motion'
import * as faicons from "react-icons/fa"
import * as biicons from "react-icons/bi"
import * as bsIcons from 'react-icons/bs';
import * as cgIcons from 'react-icons/cg';
import * as ioIcons from 'react-icons/io';
import * as fcIcons from 'react-icons/fc';
import * as siIcons from 'react-icons/si';
import * as diIcons from 'react-icons/di';


import {Link} from 'react-router-dom'
const Skill = () => {
    const line = "SKILLS"
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
        <div className="skill">
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
            <div className="skill-content">
            <motion.div className="skill-button1" initial = {{y:-1000}} animate={{y:0}} transition={{delay:1,stiffness:120,type:"spring"}}>
                <Link to="/education">
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
            <motion.div classname="skill-content-main">
            <motion.div className="skills-icons" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.1}}>
            <faicons.FaPython size={70} color="blue" />
            <biicons.BiGitBranch size={70} color="red" />
            <faicons.FaHtml5 size={70} color="orange" />
            <faicons.FaTerminal size={70} color="black" />
            </motion.div>
            <motion.div className="skills-icons-2" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.3}}>
                <cgIcons.CgCPlusPlus size={70} color="blue"/>
                <faicons.FaJava size={70} color="white" />
                <ioIcons.IoLogoJavascript size={70} color="yellow"/>
                <fcIcons.FcCopyright size={70} color="white" />

            </motion.div>
            <motion.div className="skills-icons-3" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}}>
                <siIcons.SiPostgresql size={70} color="blue"/>
                <faicons.FaReact size={70} color="blue" />
                <diIcons.DiDjango size={70} color="black"/>
                <diIcons.DiCss3 size={70} color="blue"/>
                
            </motion.div>
            </motion.div>
            <motion.div className="skill-button2" initial = {{y:-1000}} animate={{y:0}} transition={{delay:1,stiffness:120,type:"spring"}}>
                <Link to="/experience">
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

export default Skill
