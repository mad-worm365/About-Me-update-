import "./works.css";
import { WorksPageSection } from "./WorksPageSection";

export const metadata = {
  title: 'Jonny Steven | Works',
  description: "Selected projects and case studies from Jonny Steven — AI, full stack, and platform engineering work.",
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