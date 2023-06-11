import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import CommonBanner from "../../Components/Banner/CommonBanner";
import ClassCarousel from "../../Components/SlickCarousel/ClassCarousel";
import Card from "../../Components/ClassCard/ClassCard";

function Classes() {
  const bannerData = {
    title: "Get variety paints classes in our school",
    description:
      "lorem30 dshga idshf hsdlia hi ohighsaoi ji oijfo isd hfdjshs ojf iwei ois oi uoiwofopw ifpowpo weo ufopwe",
    bannerImage: "dlkghadkjhgkldsaghldskjhgajldks",
  };

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
    <div>
      <Helmet>
        <title>Classes | Paint.in</title>
      </Helmet>

      <CommonBanner bannerData={bannerData}></CommonBanner>

      <ClassCarousel></ClassCarousel>

      <div className="mx-2 md:flex justify-center flex-wrap ">
        {data.map((classInfo) => (
          <Card classInfo={classInfo} />
        ))}
      </div>
    </div>
  );
}

export default Classes;
