import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});

const sendEmail = async({to,subject,body}) => {
    
   const response = await transporter.sendMail({
    from: ,
    to: ,
    subject: ,
    html: "<b>Hello world?</b>", 
  });
}

 

export default transporter