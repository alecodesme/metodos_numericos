import { MAX_NUMBER_DECIMALS } from "./constants";

export const toFixedIfNecessary = (value: number, numberDecimals: number) => {
    return +value.toFixed(numberDecimals);
}

export const getFormulaResult = (ti = 0, wi = 0) => {
    return toFixedIfNecessary(Math.pow(Math.E, ti - wi), MAX_NUMBER_DECIMALS)
}

export const eulerNextRow = (wi: number, ti: number, h: number) => {
    return toFixedIfNecessary(wi + (h * getFormulaResult(ti, wi)), MAX_NUMBER_DECIMALS)
}
