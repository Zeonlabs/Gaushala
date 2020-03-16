import _ from 'lodash'
import { Request, Response } from 'express';
import { VariablesRepository } from '../../repository'
import { PinNotFoundException } from '../../common/exceptions.common';

const initVariables = async (req: Request, res: Response) => {
    try{
        const input = _.pick(req.body, ['name', 'pin'])
        if(!input.pin) throw new PinNotFoundException()
        const variablesRepo = new VariablesRepository()

        const doc = await variablesRepo.update(input)
        res.send(doc)
    }
    catch(e){
        console.log(e)
        res.status(e.code || 400).send(e.message)
    }
}

const resetPinRequset = async (req: Request, res: Response) => {
    try{
        const variablesRepo = new VariablesRepository()
        const otp = await variablesRepo.issueOtp()

        //TODO: send otp to sms

        res.send()
    }
    catch(e){
        console.log(e)
        res.status(e.code || 400).send({ message: e.message })
    }
}

const resetPin = async (req: Request, res: Response) => {
    try{
        const otp: number = req.body.otp
        
    }
    catch(e){
        console.log(e)
        res.status(e.code || 400).send({message: e.message})
    }
}

export {
    initVariables
}