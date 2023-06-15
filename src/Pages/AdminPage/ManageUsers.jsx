import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ClassSliderCard from "../../Components/ClassCard/ClassSliderCard";
import { toast } from "react-hot-toast";

function ManageUsers() {
  const { userInfo } = useContext(AuthContext);

  const [data, setData] = useState([]);
  const [doFetch, setDoFetch] = useState(true);
  console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/users");
        const jsonData = await response.json();
        setData(jsonData);
        setDoFetch(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [doFetch]);








  const changeRole = (userRole, email) => {




    fetch(`http://localhost:5000/users/${email}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userRole: userRole }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        toast.success("user role change success")
        setDoFetch(true);
        // Handle the response data or perform any necessary actions
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle the error or display an error message
      });



  }












  return (
    <div>
      <p className=" text-center text-4xl font-bold my-5 ">
        {" "}
        Your Booked All calsses.
      </p>

      <div className="mx-2 md:flex justify-center flex-wrap ">
        {data.map((user) => (
          <div className=" font-sans max-w-sm  md:m-3 md:max-w-sm mx-auto my-3 overflow-hidden rounded bg-[#fff] shadow-md  hover:scale-110 transition-transform duration-300   ">
          <div className="flex">
            <img className="w-40 h-40 object-cover" src={user?.photoUrl} alt={user?.name} />
            <div className="p-4">
              <h2 className="text-xl font-bold">{user?.name}</h2>
              <p className='text-purple-700 text-sm' >{user?.email}</p>
              <p className="text-gray-500 font-semibold">User Type : <span className=' text-orange-600'>{user?.userRole}</span> </p>

              {
                user?.userRole == "student" &&
                    <button onClick={() => changeRole("Instructor", user?.email)} className="btn btn-outline  btn-xs btn-secondary rounded-md text-xs">Make Instructor</button>
              }
              {
                user?.userRole == "instructor" &&
                    <button onClick={() => changeRole("student", user?.email)}  className="btn btn-outline  btn-xs btn-secondary rounded-md text-xs">Make Student</button>
              }
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default ManageUsers;
