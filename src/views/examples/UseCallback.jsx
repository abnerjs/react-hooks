import React, { useState, useCallback } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import UseCallbackButtons from '../../components/layout/UseCallbackButtons'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    const inc = useCallback((x) => {
        (x === 0) ? setCount(x) : setCount(curr => curr + x)
    }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <SectionTitle title='Exercício #01'/>
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc}/>
            </div>

        </div>
    )
}

export default UseCallback
