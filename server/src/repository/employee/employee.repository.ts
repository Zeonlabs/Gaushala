import {join} from 'path'
import {Options} from 'express-fileupload'
import fs from 'fs'
import {Employee, EmployeeModel} from '../../schema'
import {ImageUploadFailedException, NoRecordWithIDException} from '../../common/exceptions.common'

export class EmployeeRepository{
    async save(data: EmployeeModel, image: Options){

        const employee = new Employee(data)
        const doc = await employee.save()

        return new Promise((resolve, reject) => {
            image.mv(join(__dirname, `../../../../avatars/${doc._id}.png`), (err) => {
                if(err) reject(new ImageUploadFailedException())
                resolve(doc)
            })
        })
    }

    async delete(id: string){
        const deteledDoc = await Employee.findByIdAndDelete(id)
        if(!deteledDoc) throw new NoRecordWithIDException()

        return new Promise((resolve, reject) => {
            fs.unlink(join(__dirname, `../../../../avatars/${id}.png`), (err) => {
                if(err) reject(err)
                resolve(deteledDoc)
            })
        })
         
    }
}