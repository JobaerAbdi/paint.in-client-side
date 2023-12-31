import React, { useContext } from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const ClassSliderCard = ({data}) => {
  const { userInfo} = useContext(AuthContext);


  const {_id, title,image, price, instructorName,instructorPhoto, ratings,availableSeats,enrolledStudent} = data;

  // console.log(name);


  const handleEnroll = ()=> {
    console.log("first")
  }


  return (
    <div className=" font-sans max-w-sm  md:m-3 md:max-w-sm mx-auto my-3 overflow-hidden rounded bg-[#fff] shadow-md  hover:scale-110 transition-transform duration-300   ">
      <div className="flex">
        <img className="w-40 h-40 object-cover" src={image} alt={instructorName} />
        <div className="p-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <h3 className=' text-lg font-semibold text-[#5211f7]' ><span className='text-sm text-gray-400'>by </span>{instructorName}</h3>
          {/* <p className='text-purple-700 text-sm' >{email}</p> */}
          <p className="text-gray-500 font-semibold">Available seats : <span className=' text-orange-600'>{availableSeats}</span> </p>
          <p className="text-gray-500 font-semibold">Enrolled students : <span className=' text-orange-600'>{enrolledStudent}</span> </p>

          {
            userInfo?.userRole == "student" &&  <Link to="/enroll/payment" state={data} onClick={handleEnroll} className="btn btn-outline  btn-xs btn-secondary rounded-md text-xs">Enroll</Link>

          }



        </div>
      </div>
    </div>
  );
};

export default ClassSliderCard;


