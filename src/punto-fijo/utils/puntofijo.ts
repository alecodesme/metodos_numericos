export const toFixedIfNecessary = (value: number, numberDecimals: number) => {
    return +value.toFixed(numberDecimals);
}

export const getFormulaResult = (previousPn = 0) => {
    return Math.sqrt(1 / previousPn + previousPn)
}

export const nextPn = (value: number) => {
    return getFormulaResult(value)
}
export const getPnMinusPreviousPn = (pn: number, previousPn: number) => {
    return Math.abs(pn - previousPn)
}
export const containsZeroZero = (num: number): boolean => {
    return num.toFixed(5).startsWith("0.00");
}

