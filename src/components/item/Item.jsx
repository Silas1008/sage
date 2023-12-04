// Item.jsx

import React from 'react';

const Item = ({ id, name, image, prices, imageWidth }) => {
  return (
    <div className='item'>
      <img src={image} alt='' style={{ width: `${imageWidth}px` }} />
      <p>{name}</p>

      <div className='item-prices'>
        <div className='prices'>
          ${prices}
        </div>
      </div>
    </div>
  );
}

export default Item;
