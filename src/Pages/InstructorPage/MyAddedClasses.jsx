import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../providers/AuthProvider';

function MyAddedClasses() {


  const { userInfo, doFetch, setDoFetch } = useContext(AuthContext);

  const [data, setData] = useState([]);
  console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/class/${userInfo?.email}`
        );
        const jsonData = await response.json();
        setData(jsonData);
        // setDoFetch(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);




  return (
    <div> 
        <div>
      <div className="mx-2 md:flex justify-center flex-wrap ">
        {data.map((cls) => (
          <div className=" font-serif max-w-md mx-auto my-3 md:m-3 bg-white shadow-md overflow-hidden md:max-w-2xl  hover:scale-110 transition-transform duration-300">
            <div className={cls?.availableSeats || `bg-red-500`}>
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-64"
                  src={cls?.image}
                  alt="Course"
                />
              </div>
              <div className="p-3 ">
                <div className="uppercase tracking-wide text-lg text-green-400 font-semibold w-fit ml-auto mr-0">
                  ${cls?.price}
                </div>
                <div className="mt-0">
                  <h3 className="text-2xl font-semibold">{cls?.title}</h3>
                  <div className="flex items-center mt-1">
                    {/* <img
                      className="w-7 h-7 rounded-full mr-2"
                      src={instructorPhoto}
                      alt="Instructor"
                    /> */}
                    <h4 className="text-lg font-medium">{cls?.instructorName}</h4>
                  </div>
                  <div className="mt-2 flex items-center">
                    <svg
                      className="w-4 h-4 fill-current text-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 14.142l4.755 2.325-.965-5.304L18 7.31l-5.304-.774L10 2l-2.696 4.536L2 7.31l4.21 3.854-.965 5.304L10 14.142z"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 fill-current text-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 14.142l4.755 2.325-.965-5.304L18 7.31l-5.304-.774L10 2l-2.696 4.536L2 7.31l4.21 3.854-.965 5.304L10 14.142z"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 fill-current text-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 14.142l4.755 2.325-.965-5.304L18 7.31l-5.304-.774L10 2l-2.696 4.536L2 7.31l4.21 3.854-.965 5.304L10 14.142z"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 fill-current text-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 14.142l4.755 2.325-.965-5.304L18 7.31l-5.304-.774L10 2l-2.696 4.536L2 7.31l4.21 3.854-.965 5.304L10 14.142z"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 fill-current text-yellow-200"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 14.142l4.755 2.325-.965-5.304L18 7.31l-5.304-.774L10 2l-2.696 4.536L2 7.31l4.21 3.854-.965 5.304L10 14.142z"
                      />
                    </svg>
                    <span className="text-gray-600 ml-2">{cls?.ratings}</span>
                  </div>
                  <div className="mt-0">
                    <p className="text-gray-600">
                      Available Seats: {cls?.availableSeats}
                    </p>
                    <p className="text-gray-600">
                      Enrolled Students: {cls?.enrolledStudent}
                    </p>
                  </div>


                  {/* <div>
                    {userInfo?.userRole == "student" ? (
                      <>
                        {isBooked ? (
                          <button class="shadow-2xl px-4 py-2 rounded text-white bg-gradient-to-r from-green-500 to-cyan-400">
                            Booked
                          </button>
                        ) : (
                          <>
                            {availableSeats == 0 ? (
                              <>
                                <div className="w-fit mx-auto m-3  shadow-2xl">
                                  <p className="bg-pink-200 p-2 rounded-md text-white">
                                    No Seats Availabe!
                                  </p>
                                </div>
                              </>
                            ) : (
                              <>
                                <button
                                  onClick={handleBookClass}
                                  class="shadow-2xl px-4 py-2 rounded text-white bg-gradient-to-r from-pink-500 to-fuchsia-500"
                                >
                                  Book Class
                                </button>
                              </>
                            )}
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {availableSeats == 0 ? (
                          <>
                            <div className="w-fit mx-auto m-3  shadow-2xl">
                              <p className="bg-pink-200 p-2 rounded-md text-white">
                                No Seats Availabe!
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="w-fit mx-auto m-3  shadow-2xl">
                              <Link
                                to="/login"
                                className="bg-pink-200 p-2 rounded-md text-white"
                              >
                                No Access !
                              </Link>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div> */}



                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default MyAddedClasses;