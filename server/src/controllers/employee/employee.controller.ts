import {Request, Response} from 'express'
import {join} from 'path'
import {EmployeeRepository} from '../../repository'
import { DocsNotProvidedError } from '../../common/exceptions.common'

const saveEmployee = async (req: Request, res: Response) => {
    try{
        if(!req['files']) throw new DocsNotProvidedError()

        const doc = req['files'].doc
        const EmployeeRepo = new EmployeeRepository()
        const savedDoc = await EmployeeRepo.save(req.body, doc)
        res.json(savedDoc)
    }
    catch(e){
        res.status(400).send({message: e.message})
    }
}

const getEmpDoc = async (req: Request, res: Response) => {
    try{
        const employeeId = req.params.id
        res.download(join(__dirname, `../../../../employee-docs/${employeeId}.png`), (err) => {
            if(err) res.status(404).send({message: "docs not found"})
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
    getEmpDoc,
    deleteEmployee
}