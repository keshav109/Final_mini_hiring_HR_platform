import React from "react";
import { Button } from "../ui/Button";
import { COMPANY_INFO, PLATFORM_STATS } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className="flex flex-col gap-5 items-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-24 lg:py-36"
    >
      <div className="flex items-center gap-5">
        <span className="md:w-40 sm:w-25 w-12 h-[2px] bg-gradient-to-r from-white to-violet-500/70 rounded-full"></span>
        <p className="border md:text-base sm:text-sm text-xs md:px-8 sm:px-6 px-4 py-2 rounded-full shadow-lg font-bold uppercase bg-white/80 backdrop-blur-sm border-violet-500 text-violet-700">
          Where Great Teams Begin
        </p>
        <span className="md:w-40 sm:w-25 w-12 h-[2px] bg-gradient-to-r from-emerald-600/70 to-white rounded-full"></span>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}

          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500">
              Talent Meets
              <br />
              Opportunity
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-purple-700/80 mb-6">
              Powering Tomorrow's Workplace, Today
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Discover a smarter way to connect with top talent. Our AI-powered platform
              transforms hiring from a challenge into your competitive advantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                onClick={() => navigate("/hr-login")}
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-300"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="flex justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              {PLATFORM_STATS.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl md:p-8 p-2 shadow-lg border border-gray-100 text-center"
                >
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                  <div className="mt-4 text-xs text-gray-500">
                    {index === 0
                      ? "Recruiters and hiring managers trust our tools to simplify decision-making and reduce time-to-hire."
                      : "Join forward-thinking companies building better teams through structured, data-driven recruitment."}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
