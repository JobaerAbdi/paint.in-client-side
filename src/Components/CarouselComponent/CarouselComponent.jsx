import Button from '../Button/Button';
import img1 from "../../assets/Home/slider-1.webp"
import img2 from "../../assets/Home/slider-2.webp"
import img3 from "../../assets/Home/slider-3.webp"


const CarouselComponent = ({ heading, subHeading, bgImage }) => {


  console.log("image",bgImage)
  return (
    <div className="relative text-left rounded-md overflow-hidden">
      <img src={bgImage == 1 ? img1 : bgImage == 2? img2 : img3} />
      <div className="absolute top-0 w-2/3 m-2 p-2 md:m-8 md:p-8  space-y-2">
        <h1 className="font-bold text-xl sm:text-3xl">{heading}</h1>
        <p className="text-gray-primary text-xs md:text-base">{subHeading}</p>
        <Button
          text={"Shop Now"}
          fill={true}
          className="text-xs md:text-base px-2 py-2 hidden sm:inline"
        />
      </div>
    </div>
  );
};

export default CarouselComponent