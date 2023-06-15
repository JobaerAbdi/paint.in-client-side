import Button from '../Button/Button';
import img1 from "../../assets/Home/cv1.jpg"
import img2 from "../../assets/Home/cv2.jpg"
import img3 from "../../assets/Home/cv3.jpg"
import { Link } from 'react-router-dom';


const CarouselComponent = ({ heading, subHeading, bgImage }) => {


  // console.log("image",bgImage)
  return (
    <div className="relative text-left rounded-md overflow-hidden">
      <img src={bgImage == 1 ? img1 : bgImage == 2? img2 : img3} />
      <div className="absolute top-0 w-2/3 m-2 p-2 md:m-8 md:p-8  space-y-2">
        <h1 className="font-bold text-xl sm:text-3xl">{heading}</h1>
        <p className="text-gray-primary text-xs md:text-base">{subHeading}</p>
        <div className='mt-5'>
        <Link to="/classes" class="shadow-2xl px-6 py-2 rounded text-white bg-gradient-to-r from-pink-500 to-fuchsia-500">Enroll Now</Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent