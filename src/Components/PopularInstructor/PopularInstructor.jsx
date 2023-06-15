import { useEffect, useState } from "react";
import Card from "../InstructorCard/InstructorCard";

function PopularInstructor() {


  const [data, setData] = useState([]);

  // console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://paint-in-server.vercel.app/Instractors');
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
    <div className="mt-2">
      <div className="text-center mb-6 pt-20 font-sans">
          <h2 className="text-2xl font-bold text-blue-600 my-3">They are here!</h2>
          <h1 className="text-4xl font-bold ">Meet our popular Instractors</h1>
          <p className="my-2 text-lg font-semibold">
            Countries best instructors are in our Institute. Thye are 
            <br /> always ready to learn you. 
          </p>
        </div>
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
