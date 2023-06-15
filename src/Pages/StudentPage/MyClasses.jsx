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
          `http://localhost:5000/booking/${userInfo?.email}`
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
      <p className=" text-center text-4xl font-bold my-5 ">
        {" "}
        Your Booked All calsses.
      </p>

      <div className="mx-2 md:flex justify-center flex-wrap ">
        {data.map((instractor) => (
          <ClassSliderCard data={instractor} />
        ))}
      </div>
    </div>
  );
}

export default MyClasses;
