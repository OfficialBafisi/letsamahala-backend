import dotenv from "dotenv"
import twilio from "twilio"

dotenv.config();

const client = twilio(process.env.ACCOUNTSID, process.env.AUTHTOKEN)


export const callNumber = async(toNumber:string, fromNumber: string) => {
	client.calls.create({
		url: 'http://demo.twilio.com/docs/voice.xml',
		to: toNumber,
		from: fromNumber
	})
	.then(call => console.log(call.sid))
	.catch(err=> console.log(err))
}