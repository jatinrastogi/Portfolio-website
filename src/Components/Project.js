import React, { Component } from 'react'
import {motion} from 'framer-motion'
import Card from "./Card"
import * as biIcons from "react-icons/bi"
import {Link} from 'react-router-dom';
import * as bsIcons from 'react-icons/bs';

const line = "PROJECTS"
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
class Project extends Component {
    constructor(props) {
        super(props)

        this.state = {
             current_card : 1
        }
    }


    componentDidMount() {
        let first_card_clone = this.card_container.children[0].cloneNode(true)
        let last_Card_clone = this.card_container.children[this.card_container.children.length-1].cloneNode(true)

        this.card_container.insertBefore(last_Card_clone,this.card_container.children[0])
        this.card_container.append(first_card_clone);
        this.card_container.style.transitionDuration = "0.0s";
        this.card_container.style.transform = `translate(-${500}px)`
    }

    handle_next = () => {

        if(this.state.current_card < this.card_container.children.length - 1){
        let new_current_card = this.state.current_card + 1;

        this.setState({current_card:new_current_card}, () => {
            this.card_container.style.transitionDuration = "0.5s";
            this.card_container.style.transform = `translate(-${500*this.state.current_card}px)`

            if(this.state.current_card === this.card_container.children.length-1){

                setTimeout(() => {
                this.card_container.style.transitionDuration = "0.0s";
                this.card_container.style.transform = `translate(-${500}px)`
                this.setState({current_card:1});
            }, 502);
        }
        });
    }
        else{
            return;
        }
    }
    handle_previous = () => {
        if(this.state.current_card > 0){
            let new_current_card = this.state.current_card - 1;
    
            this.setState({current_card:new_current_card}, () => {
                this.card_container.style.transitionDuration = "0.5s";
                this.card_container.style.transform = `translate(-${500*this.state.current_card}px)`
    
                if(this.state.current_card === 0){
    
                    setTimeout(() => {
                    this.card_container.style.transitionDuration = "0.0s";
                    this.card_container.style.transform = `translate(-${500*(this.card_container.children.length-2)}px)`
                    this.setState({current_card:this.card_container.children.length-2});
                }, 502);
            }
            });
        }
            else{
                return;
            }
    }
    render() {
        return (
            <div className="education" >
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
            <div className="project-wrapper">
                <motion.div className="project-left" initial = {{y:-1000}} animate={{y:0}} transition={{delay:0.5,stiffness:120,type:"spring"}}>
                    <Link to="experience">
                        <motion.button whileHover={{
                        scale:1.2,
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                        TextShadow: "0px 0px 8px rgb(255,255,255)",
                        rotate:360,
                    }}>
                            <bsIcons.BsArrowLeft size={50} color="black" />
                        </motion.button>
                    </Link>
                </motion.div>
            <motion.div className="project" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}>
            <div className="project-button-1">
                <motion.button onClick={this.handle_previous} whileHover={{
            scale:1.2,
            boxShadow: "0px 0px 8px rgb(255,255,0)",
            TextShadow : "0px 0px 8px rgb(255,255,0)" }}>
                    <biIcons.BiLeftArrow size={30} color="black"/>
                </motion.button>
            </div>
            <div className="view-port" style={styles.view_port}>
        
                <div ref={ref_id => this.card_container=ref_id} className="card-container" style={styles.card_container}>
                    <Card img="onlinebooks.png" link="https://github.com/jatinrastogi/Online-Library-for-E-books" title="Prime Books"line="This is a online book store where you can download books as well as read it online."/>
                    <Card img="lidarvisualizer.png" link= "https://github.com/mowito/lidar_visualizer" title="Lidar Visualizer" line="It as an tool to stimulate lidar in different surroundings and to know about how it shows rays in it. "/>
                    <Card img="rrtalgo.png" link="https://github.com/jatinrastogi/Rapidly_exploring_random_tree_visualization" title="RRT Path Finder" line="A simple visualization of Rapidly random tree algorithm which is used by many robots to navigate the path."/>
                    <Card img="knn.webp"   link ="https://github.com/jatinrastogi/Prediction-using-k-nearest-neighbor-algorithm" title="K-Nearest Neighbour" line="A representation of K-nearest neighbour algorithm using different data."/>
                    <Card img="imageclassification.png"   link="https://github.com/jatinrastogi/Image-Classification-App" title="Image Classification" line="Model of Binary classification between cats and dogs."/>
            

                </div>

            </div>
            <div className="project-button-2">
                <motion.button onClick={this.handle_next} whileHover={{
            scale:1.2,
            boxShadow: "0px 0px 8px rgb(255,255,0)",
            TextShadow : "0px 0px 8px rgb(255,255,0)" }}>
                    <biIcons.BiRightArrow size={30} color="black"/>
                </motion.button>
            </div>
            </motion.div>
            <motion.div className="project-right" initial = {{y:-1000}} animate={{y:0}} transition={{delay:0.5,stiffness:120,type:"spring"}}>
            <Link to="contact">
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
}


const styles = {
    view_port : {
        //transform: 'translate(-50%, -50%)',
        display:'flex',
        // justifyContent: 'center',
        width: '500px',
        height: '500px',
        // backgroundColor: 'red',
        marginTop: '50px',
        // position: "absolute",
        // left: "50%",
        // top: "50%"
        overflow:"hidden",
        flexDirection: 'row'
    },
    card_container: {
        display: 'flex',
        flexDirection: 'row',
        width: 'fit-content'
    }
}
export default Project
