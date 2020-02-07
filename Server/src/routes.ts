import {Application} from 'express'
import { saveIncome, initVariables } from './controllers'

export class Routes{

    public routes(app: Application): void{
        
        app.get('/', (req, res) => res.send('app is running'))
        
        app.route('/setup')
            .post(initVariables)

        app.route('/income')
            .post(saveIncome)
    }
}