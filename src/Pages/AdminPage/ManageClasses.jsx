import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";

function ManageClasses() {
  const { userInfo,  } = useContext(AuthContext);

  const [data, setData] = useState([]);
  const [doFetch, setDoFetch] = useState(true);

  // console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://paint-in-server.vercel.app/pendingClass");
        const jsonData = await response.json();
        setData(jsonData);
        setDoFetch(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [doFetch]);

  // setDoFetch(true)

  const deleteClass = (idx) => {
    const id = data[idx]._id;

    fetch(`https://paint-in-server.vercel.app/class/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete data");
        }
        console.log("delete");
        toast.success("Class Moved Succesfuly")
        setDoFetch(true);
        // Handle any additional logic or state updates if needed
      })
      .catch((error) => {
        console.log(err);
      });
  };

  console.log(data[0]);

  const HandleApproveClass = (idx) => {
    const newClass = data[idx];

    fetch("https://paint-in-server.vercel.app/approveClass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          // toast('product add successfully')
          // navigate('/dashboard/myclasses')
          console.log("post succes");
          deleteClass(idx);
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
      <div>
        <p className=" text-center text-4xl font-bold my-5 "> Manage All calsses.</p>
        <div className="mx-2 md:flex justify-center flex-wrap ">
          {data.map((cls, idx) => (
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
                      <h4 className="text-lg font-medium">
                        {cls?.instructorName}
                      </h4>
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
                    <div className="flex gap-2 justify-center mt-3">
                      <button
                        onClick={() => HandleApproveClass(idx)}
                        className="bg-cyan-500 p-2 rounded-md text-white font-bold"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => deleteClass(idx)}
                        className="bg-rose-500 p-2 rounded-md text-white font-bold"
                      >
                        Deny
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageClasses;
