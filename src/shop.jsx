import React from 'react'
function card(props) {
  return (
    <div className='wrapper'>
      <div className="card">
        <div className="card__body">
            <img src={props.img} />
            <h2 className="title">{props.title}</h2>
            <div className="product__description">
                {props.description}
            </div>
            <button><a href={props.button_link}>Buy Now</a></button>
        </div>
      </div>
    </div>
  )
}
export default card
