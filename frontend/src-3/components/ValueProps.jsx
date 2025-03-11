import React from 'react'

const ValueProps = (props) => {
    return (
        <div>
             <div>
            <h1>String literals: {props.strData}</h1>
            <h1>Template literals with variables: {props.tempData}</h1>
            <h1>Number literals:{props.numData}</h1>
            <h1>Boolean literals:{props.boolData}</h1>
            <h1>Plain object literals:{props.objData.name}</h1>
            <h1>Array literals: {props.arrData}</h1>
            <h1>JSX: {props.jsxData}</h1>
            <h1>Variables having any kind of value: {props.anyData}</h1>
        </div>
        </div>
    )
}

export default ValueProps
