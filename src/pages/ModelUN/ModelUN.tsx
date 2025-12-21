import { useState } from "react";
import React from "react";
import CommonHead from "../../components/CommonHead/CommonHead";
import { FAQSchema, BreadcrumbSchema } from "../../components/SEO";
import Banner from "../../components/Banner/Banner";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import MUNAbout from "../../components/MUNAbout/MUNAbout";
import MUNWhatIs from "../../components/MUNWhatIs/MUNWhatIs";
import MUNSkills from "../../components/MUNSkills/MUNSkills";
import MUNForParents from "../../components/MUNForParents/MUNForParents";
import MUNForTeachers from "../../components/MUNForTeachers/MUNForTeachers";
import MUNCommittees from "../../components/MUNCommittees/MUNCommittees";
import MUNResources from "../../components/MUNResources/MUNResources";
import MUNRegister from "../../components/MUNRegister/MUNRegister";
import MUNDates from "../../components/MUNDates/MUNDates";
import MUNFAQ from "../../components/MUNFAQ/MUNFAQ";

const ModelUN: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <CommonHead
        title="Middle School Model UN - Accessible Beginner Programs"
        description="Model United Nations for middle school students (grades 5-8) across the USA. Build public speaking, critical thinking, and leadership skills. Beginner-friendly committees, free resources, and financial aid available."
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Model UN", url: "/modelun" },
        ]}
      />
      <FAQSchema
        faqs={[
          {
            question: "Is Model UN good for college applications?",
            answer: "Colleges highly value Model UN participation. It demonstrates leadership, critical thinking, public speaking skills, and global awareness. Many successful MUN delegates highlight their experience in college essays and interviews."
          },
          {
            question: "Does my child need prior experience?",
            answer: "Not at all! JAMUN welcomes first-time delegates. We offer beginner-friendly committees with experienced chairs who guide new participants. We also provide comprehensive training materials and practice sessions before each conference."
          },
          {
            question: "What is the time commitment?",
            answer: "Students typically meet weekly with their school's MUN club for 1-2 hours. Before a conference, delegates spend additional time researching their assigned country and topic. Conferences are usually 1-2 days."
          },
          {
            question: "How much does Model UN cost?",
            answer: "Conference registration fees typically range from $40-$80 per delegate. JAMUN offers financial assistance for families who need support. We believe no student should be excluded due to cost."
          },
          {
            question: "Can shy students participate in Model UN?",
            answer: "Model UN is excellent for building confidence in shy students. Delegates start with less speaking and gradually increase participation as they become comfortable. Many shy students become confident speakers through MUN."
          },
          {
            question: "What should my child wear to a conference?",
            answer: "Delegates wear Western business attire (business professional dress code). This typically means dress pants/skirt, button-down shirts, blazers, and closed-toe shoes. Detailed dress code information is provided before each conference."
          }
        ]}
      />
      <NavBar
        title="jamun-blue-side-logo"
        exploreItems={[
          { label: "Leaderboards", href: "/leaderboards" },
          { label: "Model UN", href: "/modelun" },
          { label: "Mock Trial", href: "/mocktrial" },
          { label: "Mathletes", href: "/mathletes" },
        ]}
        searchValue={query}
        onSearchChange={setQuery}
        rightButtons={[
          { label: "Donate", href: "/donate", variant: "donate" },
          { label: "Register", href: "/register" },
        ]}
      />

      <Banner
        title="JAMUN Model United Nations"
        subtitle="Debate. Diplomacy. Discovery."
        backgroundImage="/images/DSC01684.webp"
      />

      <MUNAbout
        title="Welcome to Model UN!"
        description="Join hundreds of students from across the United States for an immersive Model United Nations experience. Whether you're a first-time delegate or a seasoned debater, JAMUN MUN offers committees for every skill level."
      />

      <MUNCommittees />

      <MUNWhatIs />

      <MUNResources />

      <MUNSkills />

      <MUNForParents />

      <MUNForTeachers />

      <MUNDates />

      <MUNRegister />

      <MUNFAQ />

      <Footer />
    </div>
  );
};

export default ModelUN;
