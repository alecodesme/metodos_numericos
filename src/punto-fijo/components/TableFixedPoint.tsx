import { FixedPoint } from "../interfaces/FixedPoint"
import { TableFixedPointInterface } from "../interfaces/FixedPointsTable"

const TablePuntoFijo = ({ iteractions }: TableFixedPointInterface) => {
    return <table>
        <caption>Punto Fijo Tabla</caption>
        <thead>
            <tr>
                <th>N</th>
                <th>Pn</th>
                <th>| Pn - P(n-1) |</th>
            </tr>
        </thead>
        <tbody>
            {
                iteractions.map((fixedPoint: FixedPoint, index: number) => {
                    return <>
                        <tr key={index}>
                            <td id="index">{index}</td>
                            <td id="Pn">{fixedPoint.Pn}</td>
                            <td id="Pn-P(n-1)">{fixedPoint.PnMinusPreviousPn}</td>
                        </tr>
                    </>
                })
            }
        </tbody>
    </table>
}
export default TablePuntoFijo