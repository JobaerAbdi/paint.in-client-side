import { useEffect, useState } from "react";
import Card from "../InstructorCard/InstructorCard";

function PopularInstructor() {


  const [data, setData] = useState([]);

  // console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/Instractors');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 


 
  // console.log(InstructorName)

  return (
    <div className="mt-10">
      <h1 className="text-center text-3xl font-bold my-6">
        Meet our popular Instractors!
      </h1>
      <div className="mx-2 md:flex justify-center flex-wrap ">
        {
         data.slice(0, 6).map(instractor =><Card
          data={instractor}
        />)
        }
      </div>
    </div>
  );
}

export default PopularInstructor;
