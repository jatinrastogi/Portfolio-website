const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/",router);
app.listen(5000,()=>console.log("server running"));


const contactEmail = nodemailer.createTransport({
    service : 'gmail',
    auth: {
        user: "jatinrastogi08@gmail.com",
        pass: "anwsgvhllpzzibbi",
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    }
    else{
        console.log("Ready to send")
    }
})

router.post("/contact",(req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    console.log(name);
    const mail = {
        from: name,
        to: "jatinrastogi08@gmail.com",
        subject: {subject},
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}
               <p>Message: ${message}</p>`,

    };
    contactEmail.sendMail(mail,(error)=> {
        if (error) {
            res.json({status: "ERROR"});
        } else {
            res.json({status: "Message sent"});
        }
    });
});
