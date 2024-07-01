import { useEffect, useState } from "react";
import { k1, k2, k3, k4, nextRow } from "../utils/rongeKutta";
import RongeKuttaTable from "../components/RongeKuttaTable";

const H = 0.25
const INIT_TABLE = 0
const INIT_TABLE_VALUE = 1
const MIN_RANGE = 0
const MAX_RANGE = 1

const RongeKuttaView = () => {

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

    const k1Value = k1(interval, numbersOnRange[0], initValues.value);
    const k2Value = k2(interval, numbersOnRange[0], initValues.value, k1Value);
    const k3Value = k3(interval, numbersOnRange[0], initValues.value, k2Value);
    const k4Value = k4(interval, numbersOnRange[1], initValues.value, k3Value);
    const next = nextRow(initValues.value, k1Value, k2Value, k3Value, k4Value)

    return <div>
        <h2>Ronge kutta</h2>
        <span>{numbersOnRange.toString()}</span>
        <h3>1 era iteracion</h3>
        <div>K1: {k1Value}</div>
        <div>K2: {k2Value}</div>
        <div>K3: {k3Value}</div>
        <div>K4: {k4Value}</div>
        <div>Siguiente Wi: {next}</div>

        <div>Tabla ronge kutta</div>
        <RongeKuttaTable
            interval={interval}
            initValue={initValues.value}
            rangeNumbers={numbersOnRange}
        />
    </div>
}

export default RongeKuttaView