import React from 'react';

const Card = ({ image, title, price, ratings, instructorPhoto, instructor, availableSeats, enrolledStudents }) => {
  return (
    <div className="max-w-md mx-auto my-3 md:m-3 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-64" src={image} alt="Course" />
        </div>
        <div className="p-2">
          <div className="uppercase tracking-wide text-lg text-green-400 font-semibold w-fit ml-auto mr-0">{price}</div>
          <div className="mt-0">
            <h3 className="text-3xl font-semibold">{title}</h3>
            <div className="flex items-center mt-1">
              <img className="w-7 h-7 rounded-full mr-2" src={instructorPhoto} alt="Instructor" />
              <h4 className="text-lg font-medium">{instructor}</h4>
            </div>
            <div className="mt-2 flex items-center">
              <svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 14.142l4.755 2.325-.965-5.304L18 7.31l-5.304-.774L10 2l-2.696 4.536L2 7.31l4.21 3.854-.965 5.304L10 14.142z"
                />
              </svg>
              <svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 14.142l4.755 2.325-.965-5.304L18 7.31l-5.304-.774L10 2l-2.696 4.536L2 7.31l4.21 3.854-.965 5.304L10 14.142z"
                />
              </svg>
              <svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 14.142l4.755 2.325-.965-5.304L18 7.31l-5.304-.774L10 2l-2.696 4.536L2 7.31l4.21 3.854-.965 5.304L10 14.142z"
                />
              </svg>
              <svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 14.142l4.755 2.325-.965-5.304L18 7.31l-5.304-.774L10 2l-2.696 4.536L2 7.31l4.21 3.854-.965 5.304L10 14.142z"
                />
              </svg>
              <svg className="w-4 h-4 fill-current text-yellow-200" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 14.142l4.755 2.325-.965-5.304L18 7.31l-5.304-.774L10 2l-2.696 4.536L2 7.31l4.21 3.854-.965 5.304L10 14.142z"
                />
              </svg>
              <span className="text-gray-600 ml-2">{ratings}</span>
            </div>
            <div className="mt-0">
              <p className="text-gray-600">Available Seats: {availableSeats}</p>
              <p className="text-gray-600">Enrolled Students: {enrolledStudents}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
