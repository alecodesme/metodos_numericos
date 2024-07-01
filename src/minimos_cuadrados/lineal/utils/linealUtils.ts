
export interface a0 {
    m: number
    sumXi2: number,
    sumYi: number,
    sumXiperYi: number,
    sumXi: number
}
export interface a1 {
    m: number,
    sumXiperYi: number,
    sumXi: number,
    sumYi: number,
    sumXi2: number,
}
export const truncate = (value: number) => {
    return Math.floor(value * 1000) / 1000;
}
const totalA0 = (valuesA0: a0) => {

    const numerator = valuesA0.sumXi2 * valuesA0.sumYi - valuesA0.sumXiperYi * valuesA0.sumXi;
    const denominator = valuesA0.m * valuesA0.sumXi2 - Math.pow(valuesA0.sumXi, 2);
    const total = numerator / denominator;
    return truncate(total)
}
const totalA1 = (valuesA1: a1) => {
    const numerator = valuesA1.m * valuesA1.sumXiperYi - valuesA1.sumXi * valuesA1.sumYi
    const denominator = valuesA1.m * valuesA1.sumXi2 - Math.pow(valuesA1.sumXi, 2)
    const total = numerator / denominator;
    return truncate(total)
}
const totalError = (yi: number, totalPxi: number) => {
    return Math.pow((yi - totalPxi), 2)
}
function roundToNearest(num: number, decimals: number) {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
}
const getPx = (a0: number, a1: number, x: number) => {
    return roundToNearest(a1 * x + a0, 3)
}

export {
    totalA0,
    totalA1,
    getPx,
    totalError
}