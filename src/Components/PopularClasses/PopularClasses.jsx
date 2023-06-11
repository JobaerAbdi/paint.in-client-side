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
    <div className="mt-10">
      <h1 className="text-center text-3xl font-bold my-6">
        Check out our popular classes!
      </h1>
      <div className="mx-2 md:flex justify-center flex-wrap ">
        {data.map((classInfo) => (
          <Card classInfo={classInfo} />
        ))}
      </div>
    </div>
  );
}

export default PopularClasses;
