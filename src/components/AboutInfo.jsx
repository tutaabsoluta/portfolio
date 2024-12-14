import { useState } from "react";
import { AboutContent } from "./AboutContent";
import { AboutSkills } from "./AboutSkills";
import { AboutEducation } from "./AboutEducation";
import { AboutExperience } from "./AboutExperience";
import { Selfie } from "./Selfie";

export const AboutInfo = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "About", component: <AboutContent /> },
    { id: 2, label: "Skills", component: <AboutSkills /> },
    { id: 3, label: "Education", component: <AboutEducation /> },
    { id: 4, label: "Experience", component: <AboutExperience /> },
  ];

  return (
    <div className="flex items-center justify-center max-w-6xl min-h-96 mx-auto gap-8">
      {/* Side Tabs */}
      <div className="text-terciary space-y-2 w-[200px]">
        {tabs.map((tab) => (
          <div key={tab.id} className="flex items-center gap-2">
            <div
              className={`w-4 h-[2px] bg-primary ${
                activeTab !== tab.id && "hidden"
              }`}
            ></div>
            <button
              className={` text-xs ${
                activeTab !== tab.id ? "text-white" : "text-primary"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          </div>
        ))}
      </div>

      {/* Content Area */}
      <div className="max-w-md">
        {tabs.map((tab) => activeTab === tab.id && tab.component)}
      </div>

      {/* Selfie Image */}
      <Selfie />
    </div>
  );
};
