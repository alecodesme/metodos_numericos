import React, { useState } from "react";
import { getFirstDerivativeFormulaResult, getFormulaResult, nextPnValue } from "../utils/newton";
import NewtonTable from "../components/NewtonTable";

const INIT_TABLE = 0
const INIT_TABLE_VALUE = 1

//Ejemplo: Encontrar P2 o sea iterar hasta 2.
const NUMBER_ITERATIONS = 2

const Newton = () => {

    // y(initTable) = value; 
    const [initValues, setInitValues] = useState({
        initTable: INIT_TABLE,
        value: INIT_TABLE_VALUE
    })

    const formulaResult = getFormulaResult(initValues.value)
    const firstDerivateFormulaResult = getFirstDerivativeFormulaResult(initValues.value)
    const nextPn = nextPnValue(initValues.value, formulaResult, firstDerivateFormulaResult)

    return (
        <>
            <h1>Metodo de Newton</h1>
            <h3>1 era iteración</h3>
            <span>{nextPn}</span>
            <NewtonTable
                iterations={NUMBER_ITERATIONS}
                initValues={initValues}
            />
        </>
    )
}

export default Newton