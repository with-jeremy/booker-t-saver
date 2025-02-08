// app/page.tsx

'use client';

import { Button } from '../components/ui/button'; // Adjust the path to match your file structure
import { LampContainer } from '../components/ui/lamp';
import { motion } from "framer-motion";
import { Spotlight } from '../components/ui/spotlight-new';



export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center bg-black">
      {/* Hero Section Wrapper */}
      <div className="w-full">
        <div className="hero-wrap h-[40rem] w-full rounded-md bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight />
          <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
            <div className="text-center">
              <p className="text-lg text-neutral-300">Meet Booker T. Saver, your AI Booking Assistant</p>
              <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mt-4">
                Automated Email Marketing for Band Managers & Agents
              </h1>
              <p className="text-lg md:text-2xl font-medium mt-4 mb-12 max-w-3xl mx-auto text-white opacity-80">
                Streamline your band booking process with AI-powered automation, from emails to contract generation, leaving you more time to focus on performing. Booker T. Saver is here to help!
              </p>
              <Button className="bg-yellow-500 text-gray-900 py-3 px-8 text-xl font-semibold rounded-lg shadow-lg hover:bg-yellow-600 focus:outline-none transform transition-transform duration-300 ease-in-out hover:scale-110">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>

      <LampContainer>
      <motion.h2
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 pt-48 pb-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Why Choose Booker Time Saver?
      </motion.h2>
      <div className="w-full max-w-7xl mx-auto px-6 pt-32 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <WhyChooseUs icon="🚀" title="Save Time" description="Automate your emails, follow-ups, and responses to save hours of manual work." />
          <WhyChooseUs icon="🤖" title="AI-Powered" description="AI-driven sentiment analysis and follow-ups to keep everything on track." />
          <WhyChooseUs icon="📝" title="Easy Contracts" description="Let the system generate contracts automatically once a deal is finalized." />
          </div>
        </div>
    </LampContainer>
      {/* Features Section */}
      <div className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <FeatureCard title="Automated Email Campaigns" description="Set up and automate email campaigns that offer your band’s availability to venue buyers. Booker T. Saver makes it easy!" />
          <FeatureCard title="AI Reply Tracking & Sentiment Analysis" description="Automatically categorize replies (Yes, No, Maybe) and track venue buyer sentiment with AI. Booker T. Saver has got you covered!" />
          <FeatureCard title="Follow-up Automation" description="Automate follow-ups to ensure no opportunity is missed. Thanks to Booker T. Saver, you can stay on top of your game!" />
        </div>
      </div>

  

      {/* Call to Action */}
      <div className="w-full max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-8">Get Started Now!</h2>
        <Button className="bg-yellow-500 text-gray-900 py-3 px-8 text-xl font-semibold rounded-lg shadow-lg hover:bg-yellow-600 focus:outline-none transform transition-transform duration-300 ease-in-out hover:scale-110">
          Sign Up Now
        </Button>
      </div>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
      <h3 className="text-3xl font-bold text-indigo-600 mb-4">{title}</h3>
      <p className="text-xl mb-4">{description}</p>
    </div>
  );
}

function WhyChooseUs({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-4xl text-yellow-500">{icon}</div>
      <div>
        <h3 className="text-3xl font-bold text-white">{title}</h3>
        <p className="text-xl text-white opacity-80">{description}</p>
      </div>
    </div>
  );
}
