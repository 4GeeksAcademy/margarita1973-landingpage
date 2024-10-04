import React from 'react'

const Hero = (props) => {
  return (
    <div className="mt-4 p-5 bg-light text-dark rounded text text-start" >
        <h1 className='display-1 text-start'>{props.h1Text} </h1>
        <p className='text-start'>{props.firstText}</p>
        <p>{props.secondText}</p>
<p>{props.thirdText}</p>
    </div>
  )
}

export default Hero;