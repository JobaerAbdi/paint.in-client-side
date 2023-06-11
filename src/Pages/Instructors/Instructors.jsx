import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import AutoPlay from "../../Components/SlickCarousel/SlickCarousel";
import CommonBanner from "../../Components/Banner/CommonBanner";
import InsCard from "../../Components/Card/InsCard";





function Instructors() {







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








  const bannerData = {
    title: 'Meet our responsible Instructors',
    description: 'lorem30 dshga idshf hsdlia hi ohighsaoi ji oijfo isd hfdjshs ojf iwei ois oi uoiwofopw ifpowpo weo ufopwe',
    bannerImage: 'dlkghadkjhgkldsaghldskjhgajldks',

  }


  return (
    <div>
      <Helmet>
        <title>Instructors | Paint.in</title>
      </Helmet>

      <CommonBanner bannerData = {bannerData} ></CommonBanner>

      <AutoPlay></AutoPlay>


      <h1 className=' text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-gray-600 my-5 mt-8 xl:my-10 text-center'>See our all instructor.</h1>
      <div className="mx-2 md:flex justify-center flex-wrap ">

        {
         data.map(instractor =><InsCard
          data={instractor}
        />)
        }

      </div>

    </div>
  );
}

export default Instructors;
