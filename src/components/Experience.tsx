import React from "react";
import Details from "./ExperienceDetails";
import BasicTabs from "./Tabs";

const Experience = () => {
  const FCMBExperience = {
    companyName: "FPT Software",
    role: "Front-End Developer",
    duration: "January 2022 - Present",
    activities: [
      "Collaborated with a team of professional engineers to plan, design, build, and implement the user interface systems of web-based applications and provide a satisfactory user experience with no issues, errors, or downtime.",
      "Contributed to the building and optimization of some in-house applications to optimize productivity as well as customer-facing account management applications, which increased customer inflow by automating account opening processes.",
      "Played an active role in testing, troubleshooting, and resolving issues such as those related to performance, accessibility,  browser compatibility, and security.",
      "Reviewing and approving pull requests from other team members.",
      "Collaborating on large codebase with other developers using git and the AWS Cloud solutions platform.",
    ],
  };

  return (
    <div id="experience" className="w-full lg:h-screen p-2 ">
      <div
        className="max-w-[1240px] mx-auto flex flex-col justify-center h-full"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <p className="text-xl tracking-widest uppercase text-primary">
          Experience
        </p>
        <h2 className="py-4">Where I&apos;ve Worked</h2>
        <div className="mt-2 ">
          <BasicTabs
            tabList={["FPT"]}
            tabPanel={[
              <Details key={"FCMB"} experienceDetails={FCMBExperience} />,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
