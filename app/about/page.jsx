import "./about.css";
import { AboutPageSection } from "./AboutPageSection";

export const metadata = {
  title: 'Lucas Oliveira | About',
  description: "Senior AI Full Stack Engineer with 8+ years building scalable platforms, LLM-powered applications, and cloud-native systems.",
  openGraph: {
    title: 'About Us',
  },
}

const About = () => {

  return (
    <AboutPageSection />
  );
};

export default About;