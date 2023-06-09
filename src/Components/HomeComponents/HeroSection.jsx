import CarouselComponent from "../CarouselComponent/CarouselComponent";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import TinyBanner from "../Banner/TinyBanner";
import OfferCard from "../OfferPage/OfferCard";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

import img1 from "../../assets/Home/slider-1.webp"


// import Link from "next/link";

const carouselSlider = [
  {
    imageURL: '1',
    heading: " The best painting learning platform.",
    subheading:"Learn painting at the easiest way You have ever seen.just enrell our classes.",
  },
  {
    imageURL: '2',
    heading: "we ensure you the quality learning.",
    subheading:"Our student is more Valuable to us.They enjoy learning.",
  },
  {
    imageURL: '3',
    heading: "Learning is fun here!",
    subheading:
      "Enroll our summer batch. And be that painter you want to be",
  },
];
const HeroSection = () => {
  return (
    <div className="bg-white mt-12 ">
      <div className="">
        <div className="max-w-screen-2xl mx-auto lg:flex gap-8">
          {/* left  */}
          <div className="w-full xl:w-3/5 rounded-md overflow-hidden">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showStatus={false}
              emulateTouch={true}
              showThumbs={false}
            >
              {carouselSlider.map((item, index) => (
                <CarouselComponent
                  key={index}
                  heading={item.heading}
                  subHeading={item.subheading}
                  bgImage={item.imageURL}
                />
              ))}
            </Carousel>
          </div>

          {/* right  */}
          <div className="relative xl:w-2/5 max-h-[365px] border-2 border-[var(--clr-red)] rounded-md hover:border-[var(--clr-primary)]  lg:inline-block overflow-auto scrollbar-hide">
            <div className="sticky top-0 z-0 h-10 bg-orange-200 text-center overflow-hidden rounded-t-md pt-2 font-bold">
              Latest Super Discount Active Coupon Code
            </div>
            <div className="flex flex-col gap-4">
              {Array(2)
                .fill()
                .map((_, index) => (
                  <OfferCard
                    key={index}
                    title="Summer discount"
                    categories="Grocery"
                    discount="15"
                    shippingCost="500"
                    couponCode="SUMMER21"
                    status="Active"
                    imageUrl="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=128&q=75"
                    validity={"1d"}
                  />
                ))}
              <div className="w-full text-center my-4">
                <Link href={"/offerPage"}>
                  <Button text={"Show More"} />
                </Link>
              </div>
            </div>
          </div>
          {/* <OfferComponent/> */}
        </div>
        <TinyBanner />
      </div>
    </div>
  );
};

export default HeroSection;
