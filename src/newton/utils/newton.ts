export const getFormulaResult = (xValue: number) => {
    return Math.pow(xValue, 2) - 6
}
export const getFirstDerivativeFormulaResult = (xValue: number) => {
    return 2 * xValue
}
export const nextPnValue = (previousPn: number, formulaResult: number, firstDerivateFormulaResult: number) => {

    return previousPn - (formulaResult / firstDerivateFormulaResult)
}
