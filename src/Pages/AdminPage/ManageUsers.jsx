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
        const response = await fetch("https://paint-in-server.vercel.app/users");
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




    fetch(`https://paint-in-server.vercel.app/users/${email}`, {
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
      {data[0] ? (
        <>
          <div className="text-center mb-6 pt-20 font-sans">
            <h2 className="text-2xl font-bold text-blue-600 my-3">
            All users are here.
            </h2>
            {/* <h1 className="text-4xl font-bold ">Check out our popular classes!</h1> */}
            <p className="my-2 text-lg font-semibold">
            You can make a student to an instructor.
              <br /> and an instructor to a student.
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="text-center mb-6 pt-10 font-sans">
            <h2 className="text-2xl font-bold text-blue-600 my-3">
              no users are here!
            </h2>
            {/* <h1 className="text-4xl font-bold ">Check out our popular classes!</h1> */}
            <p className="my-2 text-lg font-semibold">
              when a user login you will see him there.
              {/* <br /> Then your class will be visible to your student. */}
            </p>
          </div>
        </>
      )}

      <div className="mx-2 md:flex justify-center flex-wrap ">
        {data.map((user) => (
          <div className=" font-sans max-w-sm  md:m-3 md:max-w-sm mx-auto my-3 overflow-hidden rounded bg-[#fff] shadow-md  hover:scale-110 transition-transform duration-300   ">
          <div className="flex">
            <img className="w-40 h-40 object-cover" src={user?.photoUrl} alt={user?.name} />
            <div className="p-4">
              <h2 className="text-xl font-bold">{user?.name}</h2>
              <p className='text-purple-700 text-sm' >{user?.email}</p>
              <p className="text-gray-500 font-semibold">User Type : <span className=' text-orange-600'>{user?.userRole}</span> </p>

              <div className="my-5">
              {
                user?.userRole == "student" &&
                    <button onClick={() => changeRole("instructor", user?.email)} className="btn btn-outline  btn-xs btn-secondary rounded-md text-xs">Make Instructor</button>
              }
              {
                user?.userRole == "instructor" &&
                    <button onClick={() => changeRole("student", user?.email)}  className="btn btn-outline  btn-xs btn-secondary rounded-md text-xs">Make Student</button>
              }
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default ManageUsers;
