import { useState } from "react";
import Countdown, { zeroPad } from "react-countdown";
import img1 from "../../assets/Home/sq.jpg"
import img2 from "../../assets/Home/sq.jpg"

const OfferCard = ({
  title,
  discount,
  categories,
  imageUrl,
  shippingCost,
  couponCode,
  status,
  validity,
}) => {
  validity = validity?.endsWith("d")
    ? Number(validity.slice(0, -1)) * 24 * 60 * 60 * 1000
    : validity?.endsWith("h") && Number(validity.slice(0, -1)) * 60 * 60 * 1000;
  const [copyStatus, setCopyStatus] = useState("");

  function handleCopyClick() {
    const copyText = document.getElementById("couponCode");
    if (copyText) {
      navigator.clipboard
        .writeText(copyText.innerText)
        .then(() => setCopyStatus("Copied!"))
        .catch(() => setCopyStatus("Copy failed."));
    }
  }

  return (
    <div className="block md:flex md:justify-between items-center bg-white rounded-md shadow-sm min-h-[150px] xl:h-[150px] border p-4 space-y-4 md:space-y-0">
      <div className="flex items-center md:w-2/3 md:border-r-2 border-dashed pr-1 ">
        <figure className="h-full">
          <img
            src={img1}
            alt="My Image"
            width="120"
            height="220"
            className="rounded-md"
            priority
          />
        </figure>
        <div className="ml-5">
          <span className="inline-block mb-2">
            {/* countdown start */}
            <Countdown date={Date.now() + validity} renderer={renderer} />
          </span>
          <h2 className=" text-lg leading-6 font-medium mb-3">{title}</h2>
          <div className="flex items-center">
            <p className=" font-bold text-xl text-gray-600">
              <span className="text-lg md:text-xl lg:text-2xl leading-12 text-red-500 font-extrabold">
                {discount}%
              </span>{" "}
              Off
            </p>
            <div className="font-medium flex items-center px-3 py-1 rounded-full bg-primary-light ml-2">
              <span
                className={`${
                  status == "Active" ? "text-emerald-600" : "text-red-600"
                }  inline-block`}
              >
                {status}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 md:pl-3">
        <div className="before:my-6 flex md:my-5 mb-6 items-center">
          <div className="w-full">
            <div className="block">
              <div className=" border border-dashed bg-emerald-50 py-2 border-emerald-300 rounded-lg text-center block">
                <button className="block w-full">
                  {copyStatus ? (
                    <span className="uppercase  font-semibold text-base leading-7 text-emerald-600">
                      {copyStatus}
                    </span>
                  ) : (
                    <span
                      id="couponCode"
                      onClick={handleCopyClick}
                      className="uppercase  font-semibold text-base leading-7 text-emerald-600"
                    >
                      {couponCode}
                    </span>
                  )}
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              * This coupon code will apply on{" "}
              <span className="font-bold text-gray-700">
                Paint classes {" "}
              </span>
              and when you shopping more then
              <span className="font-bold text-gray-700"> ${shippingCost}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;

function renderer({ days, hours, minutes, seconds, completed }) {
  if (completed) {
    return (
      <div className="flex items-center font-semibold">
        <span className="flex items-center justify-center bg-[var(--clr-red-light)] text-sm  font-semibold px-2 py-1 rounded mx-1 w-8">
          {zeroPad(days)}
        </span>
        :
        <span className="flex items-center justify-center bg-[var(--clr-red-light)] text-sm  font-semibold px-2 py-1 rounded mx-1">
          {zeroPad(hours)}
        </span>
        :
        <span className="flex items-center justify-center bg-[var(--clr-red-light)] text-sm  font-semibold px-2 py-1 rounded mx-1 w-8">
          {zeroPad(minutes)}
        </span>
        :
        <span className="flex items-center justify-center bg-[var(--clr-red-light)] text-sm  font-semibold px-2 py-1 rounded mx-1 w-8">
          {zeroPad(seconds)}
        </span>
      </div>
    );
  } else {
    return (
      <div className="flex items-center font-semibold">
        <span className="flex items-center justify-center bg-primary text-white  font-semibold px-2 py-1 rounded mx-1 w-8">
          {zeroPad(days)}
        </span>
        :
        <span className="flex items-center justify-center bg-primary text-white  font-semibold px-2 py-1 rounded mx-1 w-8">
          {zeroPad(hours)}
        </span>
        :
        <span className="flex items-center justify-center bg-primary text-white  font-semibold px-2 py-1 rounded mx-1 w-8">
          {zeroPad(minutes)}
        </span>
        :
        <span className="flex items-center justify-center bg-primary text-white font-semibold px-2 py-1 rounded mx-1 w-8">
          {zeroPad(seconds)}
        </span>
      </div>
    );
  }
}
