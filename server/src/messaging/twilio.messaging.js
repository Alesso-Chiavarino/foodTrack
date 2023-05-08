import twilio from 'twilio'

//update (i fucked up)
const TWILIO_AUTH_TOKEN = 'f4dc92c659006e8e02c436c14780389a'
const TWILIO_ACCOUNT_SID = 'AC4094ef8e7bf1083e15103f55133cfbf4'
const TWILIO_PHONE_NUMBER = '+12545565939'

const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

export const sendSMS = async (to, body) => {
    const info = await twilioClient.messages.create({
        body,
        to,
        from: TWILIO_PHONE_NUMBER
    })

    console.log(info)
}

sendSMS('+543513079987', 'Hello from Twilio!')