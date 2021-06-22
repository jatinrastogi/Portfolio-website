import * as ioicons from 'react-icons/io'
import {Link} from 'react-router-dom'
import * as bsIcons from 'react-icons/bs';

const Education = () => {
    return (
        <div className="education">
            <h1>
                EDUCATION
            </h1>
            <div className="education-1">
                <div className="education-button1">
                <Link to="/about">
                    <button>
                        <bsIcons.BsArrowLeft size={50} color="black"/>
                    </button>
                </Link>
                </div>
                
                <section>
                   <ioicons.IoIosSchool size={50} color="black" float="left"/> 
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
                <div className="education-button2">
                <Link to="/skill">
                    <button>
                        <bsIcons.BsArrowRight size={50} color="black"/>
                    </button>
                </Link>
                </div>
                
                
    
            </div>
            <div className="education-2">
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
            </div>
        </div>
    )
}

export default Education
