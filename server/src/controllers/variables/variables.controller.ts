import _ from 'lodash'
import { Request, Response } from 'express';
import { VariablesRepository } from '../../repository'
import { PinNotFoundException, RequiredInputNotProvidedException } from '../../common/exceptions.common';
import { VariablesModel } from '../../schema';

const initVariables = async (req: Request, res: Response) => {
    try{
        const input = _.pick(req.body, ['name', 'pin', 'phone'])
        if(!input.pin) throw new PinNotFoundException()
        if(!input.phone) throw new RequiredInputNotProvidedException()
        const variablesRepo = new VariablesRepository()

        const doc = await variablesRepo.saveInitInfo(input)
        res.send(doc)
    }
    catch(e){
        console.log(e)
        res.status(e.code || 400).send({message: e.message})
    }
}

const updateTrustInfo = async (req: Request, res: Response) => {
    try{
        const input = _.pick(req.body, ['name', 'phone'])
        if(!input.name && !input.phone) throw new RequiredInputNotProvidedException()
        const variablesRepo = new VariablesRepository()

        const doc = await variablesRepo.updateInfo(input)
        res.send(doc)
    }
    catch(e){
        console.log(e)
        res.status(e.code || 400).send({message: e.message})
    }
}

const requestOtp = async (req: Request, res: Response) => {
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
        const body: VariablesModel = req.body
        if(!body.otp || !body.pin) throw new RequiredInputNotProvidedException()
        const variablesRepo = new VariablesRepository()

        await variablesRepo.resetPin(body.otp, body.pin)
        res.send({ message: 'ok' })
    }
    catch(e){
        console.log(e)
        res.status(e.code || 400).send({message: e.message})
    }
}

const getVars = async (req: Request, res: Response) => {
    try{
        const variablesRepo = new VariablesRepository()
        const vars = await variablesRepo.get()
        res.json(vars)
    }
    catch(e){
        res.status(e.code || 400).send({message: e.message})
    }
}

export {
    initVariables,
    updateTrustInfo,
    requestOtp,
    resetPin,
    getVars
}