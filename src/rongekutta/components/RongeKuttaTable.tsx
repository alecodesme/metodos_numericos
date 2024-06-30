import { TableRongeKutta } from "../interfaces/TableRongeKuttaInterface"
import { k1, k2, k3, k4, nextRow } from "../utils/rongeKutta";

const RongeKuttaTable = ({ rangeNumbers, interval, initValue }: TableRongeKutta) => {

    const renderRows = () => {

        let currentInitValue = initValue;

        return rangeNumbers.map((rangeNumber: number, index: number) => {

            const elementRange = rangeNumbers[index]
            const nextElementRange = rangeNumbers[index + 1]

            const k1Value = k1(interval, elementRange, currentInitValue);
            const k2Value = k2(interval, elementRange, currentInitValue, k1Value);
            const k3Value = k3(interval, elementRange, currentInitValue, k2Value);
            const k4Value = k4(interval, nextElementRange, currentInitValue, k3Value);

            const nextInitValue = nextRow(currentInitValue, k1Value, k2Value, k3Value, k4Value);

            const row = (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{rangeNumber}</td>
                    <td>{currentInitValue}</td>
                    <td>{k1Value}</td>
                    <td>{k2Value}</td>
                    <td>{k3Value}</td>
                    <td>{k4Value}</td>
                </tr>
            );

            currentInitValue = nextInitValue;

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
                <th>K1</th>
                <th>K2</th>
                <th>K3</th>
                <th>K4</th>
            </tr>
        </thead>
        <tbody>
            {renderRows()}
        </tbody>
    </table>
}
export default RongeKuttaTable