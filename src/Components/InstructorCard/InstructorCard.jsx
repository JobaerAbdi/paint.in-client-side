import React from 'react';

const Card = ({ imageSrc, name, classes, otherInfo }) => {
  return (
    <div className="max-w-sm     md:m-3 md:max-w-2xl mx-auto my-3 overflow-hidden rounded bg-sky-300 shadow-md  hover:scale-110 transition-transform duration-300   ">
      <div className="flex">
        <img className="w-40 h-40 object-cover" src={imageSrc} alt={name} />
        <div className="p-4">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-gray-700">{classes} classes</p>
          <p className="text-gray-700">{otherInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
