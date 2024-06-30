import React, { useEffect, useState } from "react"
import { eulerNextRow, getFormulaResult } from "../utils/euler"
import EulerTable from "../components/EulerTable"

const H = 0.1
const INIT_TABLE = 0
const INIT_TABLE_VALUE = 1
const MIN_RANGE = 0
const MAX_RANGE = 1

const EulerView = () => {

    //h = value
    const [interval, setInterval] = useState(H)

    // y(initTable) = value; 
    const [initValues, setInitValues] = useState({
        initTable: INIT_TABLE,
        value: INIT_TABLE_VALUE
    })

    // min <= t <= max
    const [range, setRange] = useState({
        min: MIN_RANGE,
        max: MAX_RANGE
    })

    const [numbersOnRange, setNumbersOnRange] = useState<number[]>([])

    const getNumbersByRange = () => {
        let numbers = []
        for (let rangeNumber = initValues.initTable; rangeNumber <= range.max; rangeNumber += interval) {
            numbers.push(rangeNumber)
        }
        setNumbersOnRange(numbers)
    }

    useEffect(() => {
        getNumbersByRange()
    }, [])

    const formulaResult = getFormulaResult(initValues.initTable, initValues.value)
    const nextRow = eulerNextRow(initValues.value, initValues.initTable, H)
    return <>
        <h2>Euler</h2>
        <div>1 era Iteracion</div>
        {formulaResult}
        <div>Siguiente fila: {nextRow}</div>

        <h3>Table Euler</h3>
        <EulerTable rangeNumbers={numbersOnRange} interval={H} initValue={initValues.value}
        />
    </>
}

export default EulerView