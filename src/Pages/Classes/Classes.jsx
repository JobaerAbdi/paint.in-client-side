import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import CommonBanner from "../../Components/Banner/CommonBanner";
import ClassCarousel from "../../Components/SlickCarousel/ClassCarousel";
import Card from "../../Components/ClassCard/ClassCard";
import { AuthContext } from "../../providers/AuthProvider";

function Classes() {
  const { userInfo,doFetch, setDoFetch } = useContext(AuthContext);

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
        setDoFetch(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [doFetch]);

  return (
    <div>
      <Helmet>
        <title>Classes | Paint.in</title>
      </Helmet>

      <CommonBanner bannerData={bannerData}></CommonBanner>

      <ClassCarousel></ClassCarousel>

      <div className="mx-2 md:flex justify-center flex-wrap ">
        {data.map((classInfo) => (
          <Card key={classInfo._id} classInfo={classInfo} />
        ))}
      </div>
    </div>
  );
}

export default Classes;
