import { useState } from "react"
import Lineal from "./lineal/view/Lineal"
import Exponencial from "./exponencial/view/Exponencial"
import { xValues, yValues } from "./constants"

const LeastSquares = () => {

    const options: String[] = ['exponencial', 'lineal']

    const [selectedOption, setSelectedOption] = useState<String>('')

    const renderLeastSquare = () => {
        switch (selectedOption) {
            case 'exponencial':
                return <Exponencial
                    xValues={xValues}
                    yValues={yValues}
                />
            case 'lineal':
                return <Lineal
                    xValues={xValues}
                    yValues={yValues}
                />
            default:
                return <></>
        }
    }

    return (
        <>
            <h1> Minimos Cuadrados Seleccionado: {selectedOption} </h1>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 10,
                    justifyContent: 'center',
                    marginBottom: 10,
                    height: 30
                }}
            >
                {
                    options.map((option: String) => {
                        return <div
                            style={{
                                padding: 5,
                                backgroundColor: selectedOption === option ? 'blueviolet' : 'violet',
                                color: 'white',
                                width: 120
                            }}
                            onClick={() => {

                                setSelectedOption(option)
                            }}>{option}</div>
                    })
                }

            </div>
            {renderLeastSquare()}
        </>
    )


}

export default LeastSquares
