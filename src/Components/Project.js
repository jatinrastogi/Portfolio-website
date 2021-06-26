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
             current_card : 0
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

            <div className="view-port" style={styles.view_port}>
            <div className="project-button-1">
                <button onClick={this.handle_previous}>
                    <biIcons.BiLeftArrow size={30} color="black"/>
                </button>
            </div>
                <div ref={ref_id => this.card_container=ref_id} className="card-container" style={styles.card_container}>
                    <Card card_number="0"/>
                    <Card card_number="1"/>
                    <Card card_number="2"/>
                    <Card card_number="3"/>

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
        height: '300px',
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
