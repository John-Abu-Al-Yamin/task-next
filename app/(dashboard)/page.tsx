import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl">
      {/* Background Image */}
      <Image
        src="/images/Frame.png"
        alt="Dashboard Image"
        fill
        className="object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-4 sm:px-8 md:px-10">
        <div className="flex flex-col items-center text-center gap-y-6 max-w-4xl">
          <div className="flex flex-col items-start sm:items-start gap-y-1">
            <p className="text-white text-xl sm:text-2xl font-semibold">THE</p>
            <h1 className="text-white text-3xl sm:text-5xl font-semibold">TRAVLAB LEGAL</h1>
          </div>
          <p className="text-white text-sm sm:text-lg md:text-xl font-medium leading-relaxed">
            The information provided here is for Travlab customers and users who
            have questions about our terms, policies, intellectual property, and
            compliance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
