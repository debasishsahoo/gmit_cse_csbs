import React from 'react'

const Header = ({data}) => {
  return (
    <div className="header">
      <h1>{data.title}</h1>
      <p>{data.desc}</p>
      <div className="buttons">
        <a href="#">Learn More</a>
        <a href="#" className="hollow">Learn Less</a>
      </div>
    </div>
  )
}

export default Header