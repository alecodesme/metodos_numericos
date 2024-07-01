export const sumArray = (arr: number[]) => arr.reduce((a, b) => a + b, 0);
export const toFixedIfNecessary = (value: number, decimalNumber: number) => {
    return +value.toFixed(decimalNumber);
}
export const truncateNumber = (value: number) => {
    return Math.floor(value * 10000) / 10000;
}