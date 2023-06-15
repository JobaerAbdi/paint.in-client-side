import React, { useEffect, useLayoutEffect, useState } from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import quotesDots from "../../assets/TestimonialSlider/quotes-dot.svg";
import quotes from "../../assets/TestimonialSlider/quotes.svg";
import img1 from "../../assets/TestimonialSlider/1.jpg";
import img2 from "../../assets/TestimonialSlider/2.jpg";
import img3 from "../../assets/TestimonialSlider/3.jpg";
import img4 from "../../assets/TestimonialSlider/4.jpg";
import img5 from "../../assets/TestimonialSlider/women.jpg";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { BsFillStarFill } from "react-icons/bs";

function useWindowSize() {
  const [device, setDevice] = useState(null);

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 768) {
        setDevice(1);
      } else {
        setDevice(2);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return device;
}

function TestimonialSlider() {
  const device = useWindowSize();

  if (device) {
    return (
      <div className="container mb-20 bg-white">
        <div className="text-center mb-6 pt-20 font-sans">
          <h2 className="text-2xl font-bold text-blue-600 my-3">Testimonial</h2>
          <h1 className="text-4xl font-bold ">What They Say About Us</h1>
          <p className="my-2">
            Uniquely promote adaptive quality vectors rather than stand-alone
            e-school.
            <br /> pontificate alternative architectures with accurate schemas.
          </p>
        </div>

        <Carousel
          show={device}
          slide={1}
          transition={0.5}
          responsive={true}
          swiping={true}
          leftArrow={
            <MdArrowBackIos className="relative inset-y-1/2 text-2xl" />
          }
          rightArrow={
            <MdArrowForwardIos className="relative inset-y-1/2 text-2xl" />
          }
          useArrowKeys={true}
        >
          <div className="p-4 m-3 border-2 border-gray-200 rounded-2xl">
            <div className=" p-7 rounded-md relative">
              <img
                className="w-24 h-24 absolute top-0 left-0 -z-10"
                src={quotesDots}
                alt="quotesDots"
              />
              <div className="flex items-center gap-5">
                <img
                  className="w-16 h-auto rounded-md"
                  src={img5}
                  alt="women"
                />
                <div>
                  <p className="text-xl font-bold">Shahanaz Parvin</p>
                  <p>Lead developer</p>
                </div>
              </div>
              <p className="text-xl font-bold mt-8">It is undeniably good!</p>
              <p>
                Rapidiously supply client-centric e-markets and maintainable
                processes progressively engineer
              </p>
              <div className="flex mt-5 gap-2 text-yellow-400">
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
              </div>
              <img
                className="w-24 h-24 absolute bottom-0 right-0 -z-10"
                src={quotes}
                alt="quotesDots"
              />
            </div>
          </div>
          <div className="p-4 m-3 border-2 border-gray-200 rounded-2xl">
            <div className=" p-7 rounded-md relative">
              <img
                className="w-24 h-24 absolute top-0 left-0 -z-10"
                src={quotesDots}
                alt="quotesDots"
              />
              <div className="flex items-center gap-5">
                <img
                  className="w-16 h-auto rounded-md"
                  src={img1}
                  alt="women"
                />
                <div>
                  <p className="text-xl font-bold">Mr.Rupan Oberoi</p>
                  <p>Founder and CEO at Amaara Herbs</p>
                </div>
              </div>
              <p className="text-xl font-bold mt-8">The Best Service.</p>
              <p>
                {" "}
                Globally network long-term high-impact schemas vis-a-vis
                distinctive e-commerce. Lorem ipsum dolor sit.
              </p>
              <div className="flex mt-5 gap-2 text-yellow-400">
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
              </div>
              <img
                className="w-24 h-24 absolute bottom-0 right-0 -z-10"
                src={quotes}
                alt="quotesDots"
              />
            </div>
          </div>
          <div className="p-4 m-3 border-2 border-gray-200 rounded-2xl">
            <div className=" p-7 rounded-md relative">
              <img
                className="w-24 h-24 absolute top-0 left-0 -z-10"
                src={quotesDots}
                alt="quotesDots"
              />
              <div className="flex items-center gap-5">
                <img
                  className="w-16 h-auto rounded-md"
                  src={img2}
                  alt="women"
                />
                <div>
                  <p className="text-xl font-bold">Oberoi R.</p>
                  <p>CEO at Herbs</p>
                </div>
              </div>
              <p className="text-xl font-bold mt-8">
                Embarrassed by the First Version.
              </p>
              <p>
                Rapidiously supply client-centric e-markets and maintainable
                processes progressively engineer
              </p>
              <div className="flex mt-5 gap-2 text-yellow-400">
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
              </div>
              <img
                className="w-24 h-24 absolute bottom-0 right-0 -z-10"
                src={quotes}
                alt="quotesDots"
              />
            </div>
          </div>
          <div className="p-4 m-3 border-2 border-gray-200 rounded-2xl">
            <div className=" p-7 rounded-md relative">
              <img
                className="w-24 h-24 absolute top-0 left-0 -z-10"
                src={quotesDots}
                alt="quotesDots"
              />
              <div className="flex items-center gap-5">
                <img
                  className="w-16 h-auto rounded-md"
                  src={img3}
                  alt="women"
                />
                <div>
                  <p className="text-xl font-bold">Mr.Rupan Oberoi</p>
                  <p>Lead developer</p>
                </div>
              </div>
              <p className="text-xl font-bold mt-8">It is undeniably good!</p>
              <p>
                Rapidiously supply client-centric e-markets and maintainable
                processes progressively engineer
              </p>
              <div className="flex mt-5 gap-2 text-yellow-400">
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
              </div>
              <img
                className="w-24 h-24 absolute bottom-0 right-0 -z-10"
                src={quotes}
                alt="quotesDots"
              />
            </div>
          </div>
          <div className="p-4 m-3 border-2 border-gray-200 rounded-2xl">
            <div className=" p-7 rounded-md relative">
              <img
                className="w-24 h-24 absolute top-0 left-0 -z-10"
                src={quotesDots}
                alt="quotesDots"
              />
              <div className="flex items-center gap-5">
                <img
                  className="w-16 h-auto rounded-md"
                  src={img4}
                  alt="women"
                />
                <div>
                  <p className="text-xl font-bold">Nikita Roy</p>
                  <p>CEO at To To company</p>
                </div>
              </div>
              <p className="text-xl font-bold mt-8">The Best Service.</p>
              <p>
                Rapidiously supply client-centric e-markets and maintainable
                processes progressively engineer
              </p>
              <div className="flex mt-5 gap-2 text-yellow-400">
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
                <BsFillStarFill></BsFillStarFill>
              </div>
              <img
                className="w-24 h-24 absolute bottom-0 right-0 -z-10"
                src={quotes}
                alt="quotesDots"
              />
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default TestimonialSlider;
