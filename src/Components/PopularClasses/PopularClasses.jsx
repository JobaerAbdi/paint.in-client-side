import { useEffect, useState } from "react";
import Card from "../ClassCard/ClassCard";

function PopularClasses() {



  const [data, setData] = useState([]);

  // console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/classes");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);






  return (
    <div className="mt-2">
      <div className="text-center mb-6 pt-20 font-sans">
          <h2 className="text-2xl font-bold text-blue-600 my-3">Which class you want?</h2>
          <h1 className="text-4xl font-bold ">Check out our popular classes!</h1>
          <p className="my-2 text-lg font-semibold">
            Countries best instructors are in our Institute. 
            <br /> The best classes is in your hand
          </p>
        </div>
      <div className="mx-2 md:flex justify-center flex-wrap ">
        {data.slice(0, 6).map((classInfo) => (
          <Card classInfo={classInfo} />
        ))}
      </div>
    </div>
  );
}

export default PopularClasses;
