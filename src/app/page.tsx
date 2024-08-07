import ServiceContent from "@/app/components/Home/Content/ServiceContent";
import SliderContent from "@/app/components/Home/Content/SliderContent";
import AboutContent from "@/app/components/Home/Content/AboutContent";
import SliderCarousel from "@/app/components/Home/Content/SliderCarousel";
import ProjectContent from "@/app/components/Home/Content/ProjectContent";
import NewsContent from "@/app/components/Home/Content/NewsContent";
import StaffContent from "@/app/components/Home/Content/StaffContent";
import ContactContent from "@/app/components/Home/Content/ContactContent";
import SubFooter from "@/app/components/Layouts/SubFooter";

export default function Home() {
   return (
      <>
         <SliderContent />
         <ServiceContent />
         <AboutContent />
         <SliderCarousel />
         <ProjectContent />
         <NewsContent />
         <StaffContent />
         <ContactContent />
         <SubFooter />
      </>
   );
}
