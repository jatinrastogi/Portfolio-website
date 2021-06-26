import React, { Component } from 'react'
import {motion} from 'framer-motion'
import Card from "./Card"
import * as biIcons from "react-icons/bi"
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
            <div className="project">
            <div className="project-button-1">
                <button onClick={this.handle_previous}>
                    <biIcons.BiLeftArrow size={30} color="black"/>
                </button>
            </div>
            <div className="view-port" style={styles.view_port}>
        
                <div ref={ref_id => this.card_container=ref_id} className="card-container" style={styles.card_container}>
                    <Card img="onlinebooks.png" line="This is a online book store where you can download books as well as read it online."/>
                    <Card img="lidarvisualizer.png" line="It as an tool to stimulate lidar in different surroundings and to know about how it shows rays in it. "/>
                    <Card img="rrtalgo.png" line="A simple visualization of Rapidly random tree algorithm which is used by many robots to navigate the path."/>
                    <Card img="knn.webp" line="A representation of K-nearest neighbour algorithm using different data."/>
                    <Card img="imageclassification.png" line="Model of Binary classification between cats and dogs."/>
            

                </div>

            </div>
            <div className="project-button-2">
                <button onClick={this.handle_next}>
                    <biIcons.BiRightArrow size={30} color="black"/>
                </button>
            </div>
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
