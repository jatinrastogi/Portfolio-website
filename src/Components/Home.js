import * as FaIcons from 'react-icons/fa';
import * as bsIcons from 'react-icons/bs';
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
const Home = () => {
    const line1 = "Hi! I am"
    const line2 = "Jatin Rastogi"
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
        <motion.div className="home" >         
        <motion.h4 variants={sentence} initial="hidden" animate="visible">
              {line1.split(" ").map((char,index) => {
                  return (
                      <motion.span key={char + "-" + index} variants={letter}>
                          {char}
                      </motion.span>
                  )
              })}
        </motion.h4>
        <motion.h1 variants={sentence} initial="hidden" animate="visible">
              {line2.split(" ").map((char,index) => {
                  return (
                      <motion.span key={char + "-" + index} variants={letter}>
                          {char}
                      </motion.span>
                  )
              })}
        </motion.h1>
         <motion.div className="home fonts"> 
        <motion.a href="https://github.com/jatinrastogi" initial={{x:-1000}} animate={{x:0}} transition={{ delay: 1.4,stiffness:120,type: "spring"}}>
        <motion.button whileHover={{
            scale:1.2,
            rotate:360,
            boxShadow: "0px 0px 8px rgb(255,255,255)"

        }}>
        <FaIcons.FaGithub size={70}/>
        </motion.button>
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/jatin-rastogii/" initial={{x:-1000}} animate={{x:0}} transition={{ delay: 1.2,stiffness:120,type: "spring"}}>
            <motion.button whileHover={{
            scale:1.2,
            rotate:360,
            boxShadow: "0px 0px 8px rgb(255,255,255)"

        }}>
            <FaIcons.FaLinkedin size={70}/>
            </motion.button>
        </motion.a>
        <motion.a href="https://www.facebook.com/jatin.rastogi.5" initial={{x:-1000}} animate={{x:0}} transition={{ delay: 1,stiffness:120,type: "spring"}}>
            <motion.button whileHover={{
            scale:1.2,
            rotate:360,
            boxShadow: "0px 0px 8px rgb(255,255,255)"
        }}>
            <FaIcons.FaFacebook size={70}/>
            </motion.button>
        </motion.a>

         </motion.div> 
        <motion.div className="home next" initial = {{x:-1000}} animate={{x:0}} transition={{delay:2,stiffness:120,type:"spring"}}>
        <Link to="/about">  
        <motion.button  whileHover={{
            scale:1.2,
            boxShadow: "0px 0px 8px rgb(255,255,255)",
            TextShadow: "0px 0px 8px rgb(255,255,255)",
            rotate:360,
        }} >

            <bsIcons.BsArrowRight size={50} color = "black"/>
        </motion.button>
        </Link>
        </motion.div>
        </motion.div>
    )
}

export default Home
