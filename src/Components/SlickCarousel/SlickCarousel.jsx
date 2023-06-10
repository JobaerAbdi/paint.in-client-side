import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from '../InstructorCard/InstructorCard';







function AutoPlay() {











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


  console.log(data)


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
      return (
        <div>
          <h2>Auto Play</h2>
          <Slider {...settings}>
            
            { 

                 data.slice(0, 4).map(instractor =><Card
                    data={instractor}
                  />)

            }

          </Slider>
        </div>
      );
 
    
}

export default AutoPlay