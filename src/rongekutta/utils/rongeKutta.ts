import { MAX_NUMBER_DECIMALS } from "./constants";

export const toFixedIfNecessary = (value: number, numberDecimals: number) => {
    return +value.toFixed(numberDecimals);
}
const getFormulaResult = (ti = 0, wi = 0) => {
    return Math.pow(Math.E, ti) + wi + 1
}
export const k1 = (interval: number, ti: number, wi: number) => {

    return toFixedIfNecessary(interval * getFormulaResult(ti, wi), MAX_NUMBER_DECIMALS)
}
export const k2 = (interval: number, ti: number, wi: number, k1: number) => {
    const newTi = ti + (interval / 2)
    const newWi = wi + (1 / 2) * k1

    return toFixedIfNecessary(interval * getFormulaResult(newTi, newWi), MAX_NUMBER_DECIMALS)
}
export const k3 = (interval: number, ti: number, wi: number, k2: number) => {
    const newTi = ti + (interval / 2)
    const newWi = wi + (1 / 2) * k2

    return toFixedIfNecessary(interval * getFormulaResult(newTi, newWi), MAX_NUMBER_DECIMALS)
}
export const k4 = (interval: number, nextIntervalNumber: number, wi: number, k3: number) => {
    const newTi = nextIntervalNumber
    const newWi = wi + k3

    return toFixedIfNecessary(interval * getFormulaResult(newTi, newWi), MAX_NUMBER_DECIMALS)
}
export const nextRow = (wi: number, k1: number, k2: number, k3: number, k4: number) => {
    return toFixedIfNecessary(wi + 1 / 6 * (k1 + (2 * k2) + (2 * k3) + k4), MAX_NUMBER_DECIMALS)
}

