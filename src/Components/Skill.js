import {motion} from 'framer-motion'
import * as faicons from "react-icons/fa"
import * as biicons from "react-icons/bi"
import * as bsIcons from 'react-icons/bs';
import * as cgIcons from 'react-icons/cg';
import * as ioIcons from 'react-icons/io';


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
            <div className="skill-content">
            <div className="skill-button1">
                <Link to="/education">
                    <button>
                        <bsIcons.BsArrowLeft size={50} color="black"/>
                    </button>
                </Link>
            </div>
            <div classname="skill-content-main">
            <div className="skills-icons">
            <faicons.FaPython size={70} color="blue" />
            <biicons.BiGitBranch size={70} color="red" />
            <faicons.FaHtml5 size={70} color="orange" />
            <faicons.FaTerminal size={70} color="black" />
            </div>
            <div className="skills-icons-2">
                <cgIcons.CgCPlusPlus size={70} color="blue"/>
                <faicons.FaJava size={70} color="white" />
                <ioIcons.IoLogoJavascript size={70} color="yellow"/>
            </div>
            </div>
            <div className="skill-button2">
                <Link to="/experience">
                    <button>
                        <bsIcons.BsArrowRight size={50} color="black"/>

                    </button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Skill
