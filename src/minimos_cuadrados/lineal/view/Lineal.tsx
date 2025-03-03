import { MAX_NUMBER_DECIMALS, MAX_NUMBER_DECIMALS_TABLE } from "../../constants";
import { sumArray, toFixedIfNecessary } from "../../utils/leastSquaresUtils";
import { a0, a1, getPx, totalA0, totalA1, totalError, truncate } from "../utils/linealUtils";

const Lineal = ({ xValues, yValues }:
    {
        xValues: number[],
        yValues: number[],
    }
) => {
    const zip = (arr1: number[], arr2: number[]) => arr1.map((element, index) => [element, arr2[index]]);
    const lnYValues = yValues.map(y => toFixedIfNecessary(Math.log(y), 3));
    const xPow2Values = xValues.map(x => Math.pow(x, 2));
    const xPerYValues = zip(xValues, yValues).map(([x, y]) => x * y);
    const xPerLnYValues = zip(xValues, lnYValues).map(([x, y]) => x * y);

    const xSum = sumArray(xValues);
    const ySum = sumArray(yValues);
    const lnYSum = sumArray(lnYValues)
    const XPow2Sum = sumArray(xPow2Values)
    const xPerYSum = sumArray(xPerYValues)
    const xPerLnSum = sumArray(xPerLnYValues)

    const valuesA0: a0 = {
        m: xValues.length,
        sumXi2: toFixedIfNecessary(XPow2Sum, MAX_NUMBER_DECIMALS),
        sumYi: toFixedIfNecessary(ySum, MAX_NUMBER_DECIMALS),
        sumXiperYi: toFixedIfNecessary(xPerYSum, MAX_NUMBER_DECIMALS),
        sumXi: toFixedIfNecessary(xSum, MAX_NUMBER_DECIMALS)
    }

    const getA0 = totalA0(valuesA0)

    const valuesA1: a1 = {
        m: xValues.length,
        sumXi2: toFixedIfNecessary(XPow2Sum, MAX_NUMBER_DECIMALS),
        sumYi: toFixedIfNecessary(ySum, MAX_NUMBER_DECIMALS),
        sumXiperYi: toFixedIfNecessary(xPerYSum, MAX_NUMBER_DECIMALS),
        sumXi: toFixedIfNecessary(xSum, MAX_NUMBER_DECIMALS)
    }

    const getA1 = totalA1(valuesA1)

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Xi</th>
                        <th>Yi</th>
                        <th>LN(yi)</th>
                        <th>Xi^2</th>
                        <th>Xi * Yi</th>
                        <th>Xi * LN(Yi)</th>

                    </tr>
                </thead>
                <tbody>
                    {xValues.map((x, index) => (
                        <tr key={index}>
                            <td>{x}</td>
                            <td>{yValues[index]}</td>
                            <td>{toFixedIfNecessary(lnYValues[index], MAX_NUMBER_DECIMALS_TABLE)}</td>
                            <td>{toFixedIfNecessary(xPow2Values[index], MAX_NUMBER_DECIMALS_TABLE)}</td>
                            <td>{toFixedIfNecessary(xPerYValues[index], MAX_NUMBER_DECIMALS_TABLE)}</td>
                            <td>{toFixedIfNecessary(xPerLnYValues[index], 4)}</td>
                        </tr>
                    ))}
                    <tr>
                        <td><strong>Total:</strong> {toFixedIfNecessary(xSum, MAX_NUMBER_DECIMALS)}</td>
                        <td><strong>Total:</strong> {toFixedIfNecessary(ySum, MAX_NUMBER_DECIMALS)}</td>
                        <td><strong>Total:</strong> {toFixedIfNecessary(lnYSum, MAX_NUMBER_DECIMALS)}</td>
                        <td><strong>Total:</strong> {toFixedIfNecessary(XPow2Sum, MAX_NUMBER_DECIMALS)}</td>
                        <td><strong>Total:</strong> {toFixedIfNecessary(xPerYSum, MAX_NUMBER_DECIMALS)}</td>
                        <td><strong>Total:</strong> {toFixedIfNecessary(xPerLnSum, MAX_NUMBER_DECIMALS)}</td>
                    </tr>
                </tbody>
            </table>

            <h3>A0</h3>
            {getA0}

            <h3>A1</h3>
            {getA1}

            <h3>Error</h3>
            <span>La respuesta es entero.tres decimales</span>
            <table>
                <thead>
                    <tr>
                        <th>Xi</th>
                        <th>Yi</th>
                        <th>Pi(x)</th>
                        <th>E ( Yi - P(xi) ) ^ 2</th>
                    </tr>
                </thead>
                <tbody>
                    {xValues.map((x, index) => (
                        <tr key={index}>
                            <td>{x}</td>
                            <td>{yValues[index]}</td>
                            <td>{getPx(getA0, getA1, x)}</td>
                            <td>{totalError(yValues[index], getPx(getA0, getA1, x))}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <span>Nota: Se debe sumar el total de la columna del error</span>
        </>
    )
}
export default Lineal