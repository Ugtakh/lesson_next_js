import React from "react";
import {
  ContactBig,
  ContactInfo,
  ContactForm,
} from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="container mx-auto mt-24 max-w-4xl">
      <ContactBig />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
