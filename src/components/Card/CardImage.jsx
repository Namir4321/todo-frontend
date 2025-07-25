import React from 'react'

const CardImage = ( thumbnail ) => {
  return (
    <div className="image-cont">
      <img
        src={thumbnail.image}
        alt=""
        className="w-full h-[120px] object-cover rounded-md"
        // height={100}
        // width={300}
      />
    </div>
  );
};

export default CardImage