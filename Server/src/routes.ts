import {Application} from 'express'
import { saveIncome } from './controllers'

export class Routes{

    public routes(app: Application): void{
        
        app.get('/', (req, res) => res.send('app is running'))
        
        app.route('/income')
            .post(saveIncome)
    }
}