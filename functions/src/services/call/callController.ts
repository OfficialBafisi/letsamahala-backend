import { callNumber } from "./providers/twilioProvider"

export const callNumber_tw = async (toNumber: string, fromNumber: string) => {

    await callNumber(toNumber,fromNumber)
    return
}