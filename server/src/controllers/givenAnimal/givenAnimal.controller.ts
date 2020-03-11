import { Request, Response } from "express";
import { GivenAnimalModel, VariablesModel } from "../../schema";
import { GivenAnimalRepository, VariablesRepository } from "../../repository";

const saveGivenAnimal = async (req: Request, res: Response) => {
    try{
        const givenAnimal: GivenAnimalModel = req.body
        const givenAnimalRepo = new GivenAnimalRepository()
        const variablesRepo = new VariablesRepository()

        const savedDoc = await givenAnimalRepo.save(givenAnimal)
        const stats = await variablesRepo.updateAnimals(givenAnimal.animal).dec()

        res.json({animal: savedDoc, stats})
    }
    catch(e){
        console.log(e)
        res.status(400).send({message: e.message})
    }
}

const deleteGivenAnimal = async (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const givenAnimalRepo = new GivenAnimalRepository()
        const variablesRepo = new VariablesRepository()

        const deletedDoc = await givenAnimalRepo.delete(id)
        const stats = await variablesRepo.updateAnimals(deletedDoc.animal).inc()

        res.json({animal: deletedDoc, stats})
    }
    catch(e){
        console.log(e)
        res.status(400).send({message: e.message})
    }
}

const editGivenAnimal = async (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const givenAnimal: GivenAnimalModel = req.body
        let stats: VariablesModel
        const givenAnimalRepo = new GivenAnimalRepository()
        const variablesRepo = new VariablesRepository()

        const doc = await givenAnimalRepo.update(id, givenAnimal)
        if(givenAnimal.animal){
            await variablesRepo.updateAnimals(doc.oldAnimal.animal).inc()
            stats = await variablesRepo.updateAnimals(doc.updatedGivenAnimal.animal).dec()
        }
        else{
            stats = await variablesRepo.get()
        }
        res.json({ animal: doc.updatedGivenAnimal, stats })
    }
    catch(e){
        console.log(e)
        res.status(400).send({message: e.message})
    }
}

export {
    saveGivenAnimal,
    deleteGivenAnimal,
    editGivenAnimal
}