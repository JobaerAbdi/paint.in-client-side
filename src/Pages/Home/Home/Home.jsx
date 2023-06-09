// import Card from "../../../Components/ClassCard/ClassCard";
import { Helmet } from "react-helmet-async";
import HeroSection from "../../../Components/HomeComponents/HeroSection";
import PopularClasses from "../../../Components/PopularClasses/PopularClasses";
import PopularInstructor from "../../../Components/PopularInstructor/PopularInstructor";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | Paint.in</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <HeroSection></HeroSection>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>

    </div>
  );
}

export default Home;
