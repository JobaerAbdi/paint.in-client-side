import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Card = ({ classInfo }) => {
  const { user, userInfo, doFetch, setDoFetch } = useContext(AuthContext);
  const [isBooked, setIsBooked] = useState("");


  const {
    _id,
    image,
    title,
    price,
    ratings,
    instructorPhoto,
    instructorName,
    availableSeats,
    enrolledStudent,
  } = classInfo;

  // console.log(_id);

  const bookingInfo = {
    email: userInfo?.email,
    classId: _id,
    image,
    title,
    price,
    instructorName,
    availableSeats,
    enrolledStudent,
  };

  // fetch isBOOk information \/

  useEffect(() => {
    fetch(
      `https://paint-in-server.vercel.app/isBooked/?email=${userInfo?.email}&classId=${_id}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        if (data?.classId === _id) {
          setIsBooked(true);
        }
        setDoFetch(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error case, e.g., set a default value for setIsBooked or show an error message
        setDoFetch(false);
      });
  }, [user , doFetch]);

  // console.log(user?.uid);

  // fetch Book information /\

  const postBooking = async (bookingInfo) => {
    try {
      const response = await fetch("https://paint-in-server.vercel.app/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingInfo),
      });

      if (!response.ok) {
        throw new Error("Failed to booking");
      }

      // Handle success response
      console.log("Booking successfully");
      toast.success("Booking successfully")
      setDoFetch(true);
    } catch (error) {
      // Handle error
      console.error(error.message);
    }
  };

  const handleBookClass = () => {
    postBooking(bookingInfo);

    // console.log("ok ok ")
  };

  return (
    <div className=" font-serif max-w-md mx-auto my-3 md:m-6 bg-white shadow-md overflow-hidden md:max-w-2xl  hover:scale-110 transition-transform duration-300">
      <div className={availableSeats || `bg-red-500`}>
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-64"
            src={image}
            alt="Course"
          />
        </div>
        <div className="p-3 ">
          <div className="uppercase tracking-wide text-lg text-green-400 font-semibold w-fit ml-auto mr-0">
            ${price}
          </div>
          <div className="mt-0">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <div className="flex items-center mt-1">
              <img
                className="w-7 h-7 rounded-full mr-2"
                src={instructorPhoto}
                alt="Instructor"
              />
              <h4 className="text-lg font-medium">{instructorName}</h4>
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
              <span className="text-gray-600 ml-2">{ratings}</span>
            </div>
            <div className="mt-0">
              <p className="text-gray-600">Available Seats: {availableSeats}</p>
              <p className="text-gray-600">
                Enrolled Students: {enrolledStudent}
              </p>
            </div>
            <div className=" w-fit mx-auto mt-3">
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
                          <p className="bg-pink-200 p-2 rounded-md text-black">
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
                        <p className="bg-pink-200 p-2 rounded-md text-black">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
