import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(n) {
    if (n < 0)
        return -1
    else
        return (n <= 1) ? 1 : n * calcFactorial(n - 1)
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)

    useEffect(function () {
        setFactorial(calcFactorial(number))
    }, [number])

    const [status, setStatus] = useState(1)

    useEffect(function () {
        setStatus(number % 2)
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title='Exercício #01' />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{(factorial === -1) ? "Erro" : factorial}</span>
                </div>
                <input type="number" className="input" placeholder="Insira o valor"
                    value={number} onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title='Exercício #02' />
            <div className="center">
                <div>
                <span className="text">Status: </span>
                    <span className="text red">{(status) ? 'Ímpar' : 'Par'}</span>
                </div>
            </div>

        </div>
    )
}

export default UseEffect
