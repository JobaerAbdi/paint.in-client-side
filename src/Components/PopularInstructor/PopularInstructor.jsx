import Card from "../InstructorCard/InstructorCard";

function PopularInstructor() {
  return (
    <div className="mt-10">
      <h1 className="text-center text-3xl font-bold my-6">
        Meet our popular Instractors!
      </h1>
      <div className="mx-2 md:flex justify-center flex-wrap ">
        <Card
          imageSrc="https://img.freepik.com/free-photo/good-deal-right-corner-confident-pleasant-friendly-looking-african-american-gorgeous-woman-with-afro-haircut-asking-check-out-visit-store-page-pointing-finger-left-smiling-looking-camera_1258-85037.jpg?size=626&ext=jpg&ga=GA1.2.918059691.1683563068&semt=sph"
          name="John Doe"
          classes={3}
          otherInfo="Lorem ipsum dolor sit amet"
        />
        <Card
          imageSrc="https://img.freepik.com/free-photo/good-deal-right-corner-confident-pleasant-friendly-looking-african-american-gorgeous-woman-with-afro-haircut-asking-check-out-visit-store-page-pointing-finger-left-smiling-looking-camera_1258-85037.jpg?size=626&ext=jpg&ga=GA1.2.918059691.1683563068&semt=sph"
          name="John Doe"
          classes={3}
          otherInfo="Lorem ipsum dolor sit amet"
        />
        <Card
          imageSrc="https://img.freepik.com/free-photo/good-deal-right-corner-confident-pleasant-friendly-looking-african-american-gorgeous-woman-with-afro-haircut-asking-check-out-visit-store-page-pointing-finger-left-smiling-looking-camera_1258-85037.jpg?size=626&ext=jpg&ga=GA1.2.918059691.1683563068&semt=sph"
          name="John Doe"
          classes={3}
          otherInfo="Lorem ipsum dolor sit amet"
        />
        <Card
          imageSrc="https://img.freepik.com/free-photo/good-deal-right-corner-confident-pleasant-friendly-looking-african-american-gorgeous-woman-with-afro-haircut-asking-check-out-visit-store-page-pointing-finger-left-smiling-looking-camera_1258-85037.jpg?size=626&ext=jpg&ga=GA1.2.918059691.1683563068&semt=sph"
          name="John Doe"
          classes={3}
          otherInfo="Lorem ipsum dolor sit amet"
        />
        <Card
          imageSrc="https://img.freepik.com/free-photo/good-deal-right-corner-confident-pleasant-friendly-looking-african-american-gorgeous-woman-with-afro-haircut-asking-check-out-visit-store-page-pointing-finger-left-smiling-looking-camera_1258-85037.jpg?size=626&ext=jpg&ga=GA1.2.918059691.1683563068&semt=sph"
          name="John Doe"
          classes={3}
          otherInfo="Lorem ipsum dolor sit amet"
        />
      </div>
    </div>
  );
}

export default PopularInstructor;
