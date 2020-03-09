import {DeadAnimalRepository, VariablesRepository} from '../../repository'
import { Request, Response } from 'express'
import { DeadAnimalModel, VariablesModel } from '../../schema'

const saveDeadAnimal = async (req: Request, res: Response) => {
    try{
        const deadAnimal: DeadAnimalModel = req.body
        const deadAnimalRepo = new DeadAnimalRepository()
        const variablesRepo = new VariablesRepository()

        const doc = await deadAnimalRepo.save(deadAnimal)
        const stats = await variablesRepo.updateAnimals(deadAnimal.animal).dec()

        res.json({animal: doc, stats})
    }
    catch(e){
        console.log(e)
        res.status(400).send(e.message)
    }
}

const deleteDeadAnimal = async (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const deadAnimalRepo = new DeadAnimalRepository()
        const variablesRepo = new VariablesRepository()

        const deletedDeadAnimal = await deadAnimalRepo.delete(id)
        const stats = await variablesRepo.updateAnimals(deletedDeadAnimal.animal).inc()

        res.json({animal: deletedDeadAnimal, stats})
    }
    catch(e){
        console.log(e)
        res.status(400).send(e.message)
    }
}

const editDeadAnimal = async (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const deadAnimal: DeadAnimalModel = req.body
        let stats: VariablesModel
        const deadAnimalRepo = new DeadAnimalRepository()
        const variablesRepo = new VariablesRepository()

        const doc = await deadAnimalRepo.update(id, deadAnimal)
        if(deadAnimal.animal){
            await variablesRepo.updateAnimals(doc.oldDeadAnimal.animal).inc()
            stats = await variablesRepo.updateAnimals(doc.updatedDeadAnimal.animal).dec()
        }
        else{
            stats = await variablesRepo.get()
        }
        res.json({ animal: doc.updatedDeadAnimal, stats })
    }
    catch(e){
        console.log(e)
        res.status(400).send(e.message)
    }
}

export {
    saveDeadAnimal,
    deleteDeadAnimal,
    editDeadAnimal
}