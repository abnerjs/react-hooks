import React from 'react'

const UseCallbackButtons = (props) => {
    
    console.log("render")
    return (
        <div>
            <button className="btn" onClick={() => props.inc(-1)}>-1</button>
            <button className="btn" onClick={() => props.inc(0)}>0</button>
            <button className="btn" onClick={() => props.inc(1)}>+1</button>
        </div>
    )
}

export default React.memo(UseCallbackButtons)