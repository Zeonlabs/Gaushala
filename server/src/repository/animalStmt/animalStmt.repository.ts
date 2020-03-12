import { AnimalStmtModel, AnimalStmt } from "../../schema";

export class AnimalStmtRepository{
    async save(data: AnimalStmtModel){
        const animalStmt = new AnimalStmt(data)
        const savedDoc = await animalStmt.save()
        return savedDoc
    }

    async delete(id: string){
        const deletedDoc = await AnimalStmt.findByIdAndDelete(id)
        return deletedDoc
    }
}