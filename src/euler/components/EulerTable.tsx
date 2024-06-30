import { TableEulerInterface } from "../interfaces/TableEulerInterface";
import { eulerNextRow, getFormulaResult, toFixedIfNecessary } from "../utils/euler";

const EulerTable = ({ rangeNumbers, interval, initValue }: TableEulerInterface) => {

    const renderRows = () => {

        let currentInitValue = initValue;

        return rangeNumbers.map((rangeNumber, index) => {
            const formulaResult = getFormulaResult(rangeNumber, currentInitValue);
            const nextInitValue = eulerNextRow(currentInitValue, rangeNumber, interval);

            const row = (
                <tr key={index}>
                    <td id="index">{index}</td>
                    <td id="ti">{toFixedIfNecessary(rangeNumber, 2)}</td>
                    <td id="wi">{toFixedIfNecessary(currentInitValue, 6)}</td>
                    <td id="formula-result">{toFixedIfNecessary(formulaResult, 6)}</td>
                </tr>
            );

            currentInitValue = nextInitValue; // Update currentInitValue for the next iteration

            return row;
        });
    };

    return <table>
        <caption>Ronge Kutta Tabla</caption>
        <thead>
            <tr>
                <th>i</th>
                <th>Ti</th>
                <th>Wi</th>
                <th>F(ti, wi)</th>

            </tr>
        </thead>
        <tbody>
            {renderRows()}
        </tbody>
    </table>
}
export default EulerTable