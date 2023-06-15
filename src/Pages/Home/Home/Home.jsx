// import Card from "../../../Components/ClassCard/ClassCard";
import { Helmet } from "react-helmet-async";
import HeroSection from "../../../Components/HomeComponents/HeroSection";
import PopularClasses from "../../../Components/PopularClasses/PopularClasses";
import PopularInstructor from "../../../Components/PopularInstructor/PopularInstructor";
import TestimonialSlider from "../../../Components/TestimonialSlider/TestimonialSlider";

function Home() {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Home | Paint.in</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <HeroSection></HeroSection>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
      <TestimonialSlider></TestimonialSlider>

    </div>
  );
}

export default Home;
