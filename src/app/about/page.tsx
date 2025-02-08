"use client";
import React from "react";
import { Spotlight } from "../../components/ui/spotlight-new";

export default function About() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-100 w-full pt-20 md:pt-0 text-center">
        <p className="text-lg text-neutral-300">Meet Booker T. Saver, your AI Booking Assistant</p>
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mt-4">
          Automated Email Marketing for Band Managers & Agents
        </h1>
        <blockquote className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto italic">
          Streamline your band's booking process with AI-powered automation. Booker Time Saver is here to help!
        </blockquote>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Get Started Today
        </button>
      </div>
    </div>
  );
}
