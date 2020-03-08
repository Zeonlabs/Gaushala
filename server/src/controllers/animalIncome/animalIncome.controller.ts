import { Request, Response } from "express";
import { AnimalIncomeRepository, VariablesRepository, } from "../../repository";
import { AnimalIncomeModel } from "../../schema";

//aavela pashu
const saveAnimalIncome = async (req: Request, res: Response) => {
    try{
        const animal = req.body
        const animalIncomeRepo = new AnimalIncomeRepository()
        const variablesRepo = new VariablesRepository()

        const doc = await animalIncomeRepo.save(animal)
        const stats = await variablesRepo.updateAnimals(animal.animal).inc()
        
        res.json({ animal: doc, stats})
    }
    catch(e){
        console.log(e)
        res.status(400).send(e.message)
    }
}

const deleteAnimalIncome = async (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const animalIncomeRepo = new AnimalIncomeRepository()
        const variablesRepo = new VariablesRepository()

        const doc = await animalIncomeRepo.delete(id)
        const stats = await variablesRepo.updateAnimals(doc.animal).dec()
        res.json({ animal: doc, stats })
    }
    catch(e){
        console.log(e)
        res.status(400).send(e.message)
    }
}

const editAnimalIncome = async (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const animalIncome: AnimalIncomeModel = req.body
        let stats: any
        const animalIncomeRepo = new AnimalIncomeRepository()
        const variablesRepo = new VariablesRepository()

        const doc = await animalIncomeRepo.update(id, animalIncome)
        if(animalIncome.animal){
            await variablesRepo.updateAnimals(doc.oldAnimals.animal).dec()
            stats = await variablesRepo.updateAnimals(doc.updatedAnimalIncome.animal).inc()
        }
        else{
            stats = await variablesRepo.get()
        }
        res.json({ animal: doc, stats })
    }
    catch(e){
        console.log(e)
        res.status(400).send(e.message)
    }
}

export {
    saveAnimalIncome,
    deleteAnimalIncome,
    editAnimalIncome
}