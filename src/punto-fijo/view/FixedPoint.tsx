import React, { useEffect, useState } from "react"
import { FixedPoint } from "../interfaces/FixedPoint";
import { containsZeroZero, getPnMinusPreviousPn, nextPn } from "../utils/puntofijo";
import TableFixedPoint from "../components/TableFixedPoint";
const PuntoFijoView = () => {

    const initialPn = 1
    const maxIterations = 100;

    const [iterationsList, setIteractions] = useState<FixedPoint[]>([])

    const calculateIterations = () => {
        const iterations: FixedPoint[] = [];
        let actualPn = initialPn;
        let index = 0;

        const firstRow: FixedPoint = {
            index: index,
            Pn: actualPn,
            PnMinusPreviousPn: '-'
        };
        iterations.push(firstRow);
        index++;

        while (index < maxIterations) {
            const nextPnValue = nextPn(actualPn);
            const pnMinusPreviousPn = getPnMinusPreviousPn(nextPnValue, actualPn);

            const row: FixedPoint = {
                index,
                Pn: nextPnValue,
                PnMinusPreviousPn: pnMinusPreviousPn.toFixed(5)
            };

            iterations.push(row);

            if (containsZeroZero(pnMinusPreviousPn)) {
                break;
            }

            // Update actualPn for the next iteration
            actualPn = nextPnValue;
            index++;
        }

        setIteractions(iterations)
    }

    useEffect(() => {
        calculateIterations()
    }, [])

    return (
        <>
            <h1>Punto Fijo</h1>
            <TableFixedPoint iteractions={iterationsList} />

        </>
    )

}
export default PuntoFijoView