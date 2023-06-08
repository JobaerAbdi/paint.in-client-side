import Button from "../Button/Button";
import React from "react";

const TinyBanner = () => {
  return (
    <div>
      <div className=" bg-orange-100 px-10 py-6 rounded-lg mt-6 hidden lg:block">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-sans text-xl">
              <span className="text-emerald-600 font-bold mr-2">
                Best teaching Quality
              </span>
              platform
            </h1>
            <p className="text-gray-500">
              See Our latest discounted classes from here and get a special
              <a className="text-emerald-600 ml-1" href="">
                discount class
              </a>
            </p>
          </div>
          <Button text={"Enroll Now"} fill={true} />
        </div>
      </div>
    </div>
  );
};

export default TinyBanner;
