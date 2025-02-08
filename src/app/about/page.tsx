"use client";
import React from "react";
import { Spotlight } from "../../components/ui/spotlight-new";
import { Button } from "../../components/ui/button";

export default function HomePage() {
  return (
    <section>
    <div className="h-[40rem] w-full rounded-md bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
     
      
      <div className="p-4 max-w-7xl mx-auto relative z-100 w-full pt-20 md:pt-0 text-center">
      <Spotlight />
        <p className="text-lg text-neutral-300">Meet Booker T. Saver, your AI Booking Assistant</p>
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mt-4">
          Automated Email Marketing for Band Managers & Agents
        </h1>
        <blockquote className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto italic">
          Streamline your band booking process with AI-powered automation. Booker Time Saver is here to help!
        </blockquote>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Get Started Today
        </button>
      </div>
    
      <div className="mt-32 space-y-12">
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
        <h3 className="text-3xl font-bold text-indigo-600 mb-4">Automated Email Campaigns</h3>
        <p className="text-xl mb-4">
          Set up and automate email campaigns that offer your band’s availability to venue buyers. Booker T. Saver makes it easy!
        </p>
          </div>
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
        <h3 className="text-3xl font-bold text-indigo-600 mb-4">AI Reply Tracking & Sentiment Analysis</h3>
        <p className="text-xl mb-4">
          Automatically categorize replies (Yes, No, Maybe) and track venue buyer sentiment with AI. Booker T. Saver has got you covered!
        </p>
          </div>
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
        <h3 className="text-3xl font-bold text-indigo-600 mb-4">Follow-up Automation</h3>
        <p className="text-xl mb-4">
          Automate follow-ups to ensure no opportunity is missed. Thanks to Booker T. Saver, you can stay on top of your game!
        </p>
          </div>
        </div>

        <div className="mt-32 text-center">
          <h2 className="text-5xl font-extrabold text-white mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-left">
            <div className="flex items-start space-x-4">
              <div className="text-4xl text-yellow-500">🚀</div>
              <div>
                <h3 className="text-3xl font-bold text-white">Save Time</h3>
                <p className="text-xl text-white opacity-80">Automate your emails, follow-ups, and responses to save hours of manual work.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-4xl text-yellow-500">🤖</div>
              <div>
                <h3 className="text-3xl font-bold text-white">AI-Powered</h3>
                <p className="text-xl text-white opacity-80">AI-driven sentiment analysis and follow-ups to keep everything on track.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-4xl text-yellow-500">📝</div>
              <div>
                <h3 className="text-3xl font-bold text-white">Easy Contracts</h3>
                <p className="text-xl text-white opacity-80">Let the system generate contracts automatically once a deal is finalized.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <h2 className="text-5xl font-extrabold text-white mb-8 text-center">Get Started Now!</h2>
          <div className="text-center">
            <Button className="bg-yellow-500 text-gray-900 py-3 px-8 text-xl font-semibold rounded-lg shadow-lg hover:bg-yellow-600 focus:outline-none transform transition-transform duration-300 ease-in-out hover:scale-110">
              Sign Up Now
            </Button>
          </div>
        </div>
    </div>
      </section>
  );
}
