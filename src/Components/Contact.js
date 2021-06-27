import {useState} from 'react'
import {motion} from 'framer-motion'
const Contact = () => {
    const line = "Contact Me";
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


        const [status,setStatus] = useState("submit")
        const handleSubmit = async (e) => {
            console.log("r");
            e.preventdefault();
            setStatus("Sending...");
            const { name,email,subject,message } = e.target.elements;
            let details = {
                name: name.value,
                email : email.value,
                subject : subject.value,
                message : message.value
            };
            let response = await fetch("http://localhost:5000/contact",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(details),
            });
            setStatus("submit")
            let result = await response.json();
            alert(result.status);
           
        };
    
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
        <div className="contact-wrapper">
        <form onSubmit={handleSubmit}>
            <div className="contact-form">
                <div className="input-fields">
                    <label htmlFor="name"></label>
                    <input type="text" className="input" id="name" placeholder="Name" required/>
                    <label htmlFor="email"></label>
                    <input type="text" className="input" id="email" placeholder="Email Address" required/>
                    <label htmlFor="subject"></label>
                    <input type="text" className="input" id="subject" placeholder="Subject" required/>
                    {/* <input type="text" className="input" placeholder="Message"/> */}

                </div>
                <div className="msg">
                    <label htmlFor="message"></label>
                    <textarea placeholder="Message..." id="message" required></textarea>
                    <button className="btn" type="submit">
                        {status}
                    </button>
            </div>
            </div>
            </form>
        </div>
        </div>
    )
}

export default Contact
