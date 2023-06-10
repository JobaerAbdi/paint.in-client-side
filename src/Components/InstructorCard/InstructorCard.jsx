import React from 'react';
import Button from '../Button/Button';

const Card = ({data}) => {

  const { instructorName,email, title, photoUrl,numberOfClasses, numberOfStudents,ratings} = data;

  // console.log(name);


  return (
    <div className=" font-sans max-w-sm  md:m-3 md:max-w-sm mx-auto my-3 overflow-hidden rounded bg-[#fff] shadow-md  hover:scale-110 transition-transform duration-300   ">
      <div className="flex">
        <img className="w-40 h-40 object-cover" src={photoUrl} alt={instructorName} />
        <div className="p-4">
          <h2 className="text-xl font-bold">{instructorName}</h2>
          <h3 className=' text-lg font-semibold text-[#e411f7]' >{title}</h3>
          <p className='text-purple-700 text-sm' >{email}</p>
          <p className="text-gray-500 font-semibold">Total classes : <span className=' text-orange-600'>{numberOfClasses}</span> </p>
          <button className="btn btn-outline  btn-xs btn-secondary rounded-md text-xs">See More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;


