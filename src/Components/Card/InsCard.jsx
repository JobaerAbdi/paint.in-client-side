import React from "react";

function InsCard({data}) {

    const { instructorName,email, title, photoUrl,numberOfClasses, numberOfStudents,ratings} = data;

  return (
    <div className="card card-side max-w-md m-2 mx-auto bg-base-100 shadow-xl justify-center ">
      <figure>
        <img className="w-64 h-60 object-cover"
          src={photoUrl}
          alt="Movie"
        />
      </figure>
      <div className=" card-body">
          <h2 className="text-xl font-bold">{instructorName}</h2>
          <h3 className=' text-lg font-semibold text-[#e411f7]' >{title}</h3>
          <p className='text-purple-700 text-sm' >{email}</p>
          <p className="text-gray-500 font-semibold">Total classes : <span className=' text-orange-600'>{numberOfClasses}</span> </p>
          <button className="btn btn-outline  btn-xs btn-secondary rounded-md text-xs">See More</button>
        </div>
    </div>
  );
}

export default InsCard;
