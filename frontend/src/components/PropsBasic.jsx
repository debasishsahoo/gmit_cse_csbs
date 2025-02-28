import React from 'react'

const PropsBasic = (x) => {
    console.log('{x,y}:', x)
    return (
        <div>
            <h1>{x.name} {x.title}</h1>
        </div>
    )
}

export default PropsBasic
