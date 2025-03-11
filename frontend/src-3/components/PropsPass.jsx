import React from 'react'

const PropsPass = ({ persons }) => {
  return (
    <div>
      {
                persons.map((person, index) => {
                    return <h1 key={index}>Value = {person} | Key = {index}</h1>
                })
            }
    </div>
  )
}

export default PropsPass
