export interface a0 {
    m: number
    sumXi2: number,
    sumLnYi: number,
    sumXiperLn: number,
    sumXi: number
}
export interface a1 {
    m: number
    sumXi2: number,
    sumLnYi: number,
    sumXiperLn: number,
    sumXi: number
}
export const truncate = (value: number) => {
    return Math.floor(value * 1000) / 1000;
}
const totalA0 = (valuesA0: a0): number => {
    const numerator = valuesA0.sumXi2 * valuesA0.sumLnYi - valuesA0.sumXiperLn * valuesA0.sumXi
    const denominator = valuesA0.m * valuesA0.sumXi2 - Math.pow(valuesA0.sumXi, 2)
    const total = numerator / denominator;
    return parseFloat(total.toFixed(5))
}
const totalA1 = (valuesA1: a1) => {
    const numerator = valuesA1.m * valuesA1.sumXiperLn - valuesA1.sumXi * valuesA1.sumLnYi
    const denominator = valuesA1.m * valuesA1.sumXi2 - Math.pow(valuesA1.sumXi, 2)
    const total = numerator / denominator;
    return parseFloat(total.toFixed(5))
}
const getPx = (b: number, getA1: number, x: number) => {
    console.log({ b, getA1, x })
    return (b * Math.pow(Math.E, getA1 * x)).toFixed(3)
}
const totalError = (yi: number, totalPxi: number) => {
    return Math.pow((yi - totalPxi), 2)
}

export {
    totalA0,
    totalA1,
    getPx,
    totalError
}