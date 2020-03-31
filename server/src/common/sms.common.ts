import {AUTH_KEY, TRANS_DND_ROUTE, senderId, signature, smsContentType, URL} from './sms.config.json'
import request from 'request'

export const sendOtpSms = (phone: number, otp: number, ) => {
    return new Promise((resolve, reject) => {
        let options = { 
            method: 'POST',
            url: URL,
            qs: { 
                AUTH_KEY
            },
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json'
            },
            body: { 
                smsContent: `Your software PIN reset OTP is ${otp}`,
                // groupId: '0',
                routeId: TRANS_DND_ROUTE,
                mobileNumbers: phone,
                senderId,
                signature,
                smsContentType
            },
            json: true
        }

        request(options, function (error, response, body) {
            if (error) return reject(error)
            resolve(body)
        })
    })
}