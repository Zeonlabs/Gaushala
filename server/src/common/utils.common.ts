import { AnimalModel } from "../schema"

export const reverseNum = (num: number) => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

export const alterAnimalsArray = (animals: AnimalModel[]) => animals.map(ani => ({ type: ani.type, count: -ani.count})) 