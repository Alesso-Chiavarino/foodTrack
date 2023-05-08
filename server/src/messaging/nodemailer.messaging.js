import nodemailer from 'nodemailer'

const password = 'pekeqzrdurbsmtzf'
const email = 'jorgeechiavarino@gmail.com'

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: email, 
        pass: password,
    },
});

const html = `
    <h1>Hi</h1>
    <p>How are you?</p>
    <p>I like dicks</p>
`

const sendMail = async (to, subject, html) => {

    const info = await transporter.sendMail({
        from: email,
        to,
        subject,
        html 
    })

    console.log(info)

}

sendMail('alessochiavarino@gmail.com', 'test', html)