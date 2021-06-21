import { useState } from "react";
import { render } from "react-dom";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from "./Components/Header"
import Home from "./Components/Home"
import About from "./Components/About"
import Skill from "./Components/Skill"
import Education from "./Components/Education"
import Experience from "./Components/Experience"
import Project from "./Components/Project"
import Contact from "./Components/Contact"



function App() {
  //const x = useMotionValue(0)
  //const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])
  return (
    
    <>
      <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/education" component={Education}/>
        <Route path="/skills" component={Skill}/>
        <Route path="/experience" component={Experience}/>
        <Route path="/projects" component={Project}/>
        <Route path="/contact" component={Contact}/>
        

      </Switch>
      </Router>
    </>
  );
}

export default App;