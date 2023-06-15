import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ClassSliderCard from "../../Components/ClassCard/ClassSliderCard";


function MyClasses() {
  const { userInfo, doFetch, setDoFetch } = useContext(AuthContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://paint-in-server.vercel.app/booking/${userInfo?.email}`
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
      {data[0] ? (
        <>
          <div className="text-center mb-6 pt-20 font-sans">
            <h2 className="text-2xl font-bold text-blue-600 my-3">
              All of your booked classes
            </h2>
            {/* <h1 className="text-4xl font-bold ">Check out our popular classes!</h1> */}
            <p className="my-2 text-lg font-semibold">
              press Enroll button and complete payment
              <br /> to get the classes.
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="text-center mb-6 pt-10 font-sans">
            <h2 className="text-2xl font-bold text-blue-600 my-3">
              you don't booked any class yet!
            </h2>
            {/* <h1 className="text-4xl font-bold ">Check out our popular classes!</h1> */}
            <p className="my-2 text-lg font-semibold">
              Go to class page, then book a class.
              {/* <br /> Then your class will be visible to your student. */}
            </p>
          </div>
        </>
      )}

      <div className="mx-2 md:flex justify-center flex-wrap ">
        {data.map((instractor) => (
          <ClassSliderCard data={instractor} />
        ))}
      </div>
    </div>
  );
}

export default MyClasses;
