import "./contact.css";
import { ContactPageSection } from "./ContactPageSection";

export const metadata = {
  title: 'Jonny Steven | Get in Touch',
  description: "Contact Jonny Steven — Senior AI Full Stack Engineer based in Stockholm, Sweden.",
  openGraph: {
    title: 'Get in Touch',
  },
}

const Contact = () => {

  return (
    <ContactPageSection />
  );
};

export default Contact;