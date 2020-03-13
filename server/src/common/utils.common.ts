import { AnimalModel } from "../schema"

export const reverseNum = (num: number) => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

export const alterAnimalsArray = (animals: AnimalModel[]) => animals.map(ani => ({ type: ani.type, count: -ani.count})) 

export const countTotalAnimal = (animals: AnimalModel[]) => {
    let total = 0
    animals.forEach(animal => total += animal.count)
    return total
}