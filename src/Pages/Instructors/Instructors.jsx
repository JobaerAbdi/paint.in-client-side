import React from "react";
import { Helmet } from 'react-helmet-async';
import AutoPlay from "../../Components/SlickCarousel/SlickCarousel";
import CommonBanner from "../../Components/Banner/CommonBanner";





function Instructors() {



  const bannerData = {
    title: 'Meet our resposible Instructors',
    description: 'lorem30 dshga idshf hsdlia hi ohighsaoi ji oijfo isd hfdjshs ojf iwei ois oi uoiwofopw ifpowpo weo ufopwe',
    bannerImage: 'dlkghadkjhgkldsaghldskjhgajldks',

  }


  return (
    <div>
      <Helmet>
        <title>Instructors | Paint.in</title>
      </Helmet>

      <CommonBanner bannerData = {bannerData}
      
      ></CommonBanner>

      <AutoPlay></AutoPlay>

      <div>Instructors page</div>

    </div>
  );
}

export default Instructors;
