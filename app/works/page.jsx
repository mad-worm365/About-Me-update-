import "./works.css";
import { WorksPageSection } from "./WorksPageSection";

export const metadata = {
  title: 'Mad Worm | Works',
  description: "Selected projects and case studies from Mad Worm — AI, full stack, and platform engineering work.",
  openGraph: {
    title: 'Works',
  },
}

const Works = () => {

  return (
    <WorksPageSection />
  );
};

export default Works;