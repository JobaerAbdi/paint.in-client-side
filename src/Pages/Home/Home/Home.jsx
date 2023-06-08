import Card from "../../../Components/ClassCard/ClassCard";
import HeroSection from "../../../Components/HomeComponents/HeroSection";

function Home() {
  return (
    <div>
      <HeroSection></HeroSection>

      <div className="mx-2 md:flex justify-center ">
      <Card
        image="https://i.ibb.co/f1y1608/spring-painting-wallpaper-1280x800.jpg"
        title="React Course"
        price="$99"
        ratings="4.5"
        instructorPhoto="https://i.ibb.co/QFRG8qN/66.jpg"
        instructor="John Doe"
        availableSeats={20}
        enrolledStudents={150}
      />
      <Card
        image="https://i.ibb.co/0XZ8V0D/311269339-1316585012482492-1919774468395513770-n.jpg"
        title="React Course"
        price="$99"
        ratings="4.5"
        instructorPhoto="https://i.ibb.co/QFRG8qN/66.jpg"
        instructor="John Doe"
        availableSeats={20}
        enrolledStudents={150}
      />
      <Card
        image="https://i.ibb.co/0XZ8V0D/311269339-1316585012482492-1919774468395513770-n.jpg"
        title="React Course"
        price="$99"
        ratings="4.5"
        instructorPhoto="https://i.ibb.co/QFRG8qN/66.jpg"
        instructor="John Doe"
        availableSeats={20}
        enrolledStudents={150}
      />
        
      </div>
    </div>
  );
}

export default Home;
