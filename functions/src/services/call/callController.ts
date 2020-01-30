import { callNumber } from "./providers/twilioProvider"

export const callNumber_tw = async (toNumber: string, fromNumber: string) => {

	return await callNumber(toNumber,fromNumber);
}