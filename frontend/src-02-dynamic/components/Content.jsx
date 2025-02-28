import React from 'react'

const Content = ({data}) => {
  return (
    <div className="main-content">
    <div className="text">
      <h2>{data.title}</h2>
      <p>{data.desc}</p>
    </div>
    <div className="image">
      <img src={data.imgUrl} alt={data.altText}/>
    </div>
  </div>
  )
}

export default Content