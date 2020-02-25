import {Request, Response} from 'express'
import {join} from 'path'
import {EmployeeRepository} from '../../repository'
import { AvatarNotProvidedError } from '../../common/exceptions.common'

const saveEmployee = async (req: Request, res: Response) => {
    try{
        if(!req['files']) throw new AvatarNotProvidedError()

        const avatar = req['files'].image
        const EmployeeRepo = new EmployeeRepository()
        const savedDoc = await EmployeeRepo.save(req.body, avatar)
        res.json(savedDoc)
    }
    catch(e){
        res.status(400).send({message: e.message})
    }
}

const getAvatar = async (req: Request, res: Response) => {
    try{
        const employeeId = req.params.id
        res.download(join(__dirname, `../../../../avatars/${employeeId}.png`), (err) => {
            if(err) res.status(404).send({message: "avatar not found"})
        })
    }
    catch(e){
        res.status(400).send({message: e.message})
    }
}

const deleteEmployee = async (req: Request, res: Response) => {
    try{
        const employeeId = req.params.id
        const EmployeeRepo = new EmployeeRepository()
        const deletedDoc = await EmployeeRepo.delete(employeeId)
        res.json({_id: deletedDoc['_id']})
    }
    catch(e){
        console.log(e)
        res.status(400).send({message: e.message})
    }
}

export {
    saveEmployee,
    getAvatar,
    deleteEmployee
}