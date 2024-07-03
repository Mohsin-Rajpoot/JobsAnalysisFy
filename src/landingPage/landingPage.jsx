import React from "react";
import Nav from "../components/Nav";
import ShowCase from "../components/showCase";
import JobSeekers from "../components/seekers";
import BSgradient from "../components/BSgradient";
import Footer from "../components/Footer";
import News from "../components/News";
import JobL from "../components/JobL";

export default function landingPage() {
  return (
    <div>
      <Nav />
      <ShowCase />
      <JobSeekers />
      <JobL />
      <BSgradient />
      <Footer />
    </div>
  );
}
