import React from 'react'

const Card = (props) => {
  return (
    <div className="card" >
      <img src={props.imageUrl} className="card-img-bottom p-2" alt="400 x 300" height={400} width={300}/>
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardText}</p>
        <a href="#" className="btn btn-primary">Go to {props.cardTitle}</a>
      </div>

    </div>
  )
}

export default Card
