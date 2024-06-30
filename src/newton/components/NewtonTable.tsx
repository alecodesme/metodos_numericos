import React from "react";
import { NewtonTableInterface } from "../interfaces/NewtonTableInterface";
import { getFirstDerivativeFormulaResult, getFormulaResult, nextPnValue } from "../utils/newton";

const NewtonTable = ({ iterations, initValues }: NewtonTableInterface) => {

    const renderRows = () => {
        let currentInitValue = initValues.value;
        let rows = [];

        for (let index = initValues.initTable; index <= iterations; index++) {  // Note the <= to include the last iteration
            const formulaResult = getFormulaResult(currentInitValue);
            const firstDerivateFormulaResult = getFirstDerivativeFormulaResult(currentInitValue);
            const nextPn = nextPnValue(currentInitValue, formulaResult, firstDerivateFormulaResult);

            if (index === initValues.initTable) {
                rows.push(
                    <tr key={index}>
                        <td id="N">{initValues.initTable}</td>
                        <td id="PN">{initValues.value}</td>
                    </tr>
                );
            } else {
                rows.push(
                    <tr key={index}>
                        <td id="N">{index}</td>
                        <td id="PN">{nextPn}</td>
                    </tr>
                );
                currentInitValue = nextPn;
            }
        }

        return <>{rows}</>;
    };

    return (
        <>
            <table>
                <caption>Newton Tabla</caption>
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Pn</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </>
    )
}
export default NewtonTable