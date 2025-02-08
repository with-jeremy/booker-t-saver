// app/page.tsx

'use client';

import { Button } from '../components/ui/button'; // Adjust the path to match your file structure
import { Spotlight } from '../components/ui/spotlight-new';

export default function HomePage() {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen">
     
      
      <div className="relative container mx-auto px-6 py-32 text-center">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">Meet Booker T. Saver, your AI Assistant</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Automated Email Marketing for Band Managers & Agents
          </h1>
          <p className="text-lg md:text-2xl font-medium mb-12 max-w-3xl mx-auto">
            Streamline your band's booking process with AI-powered automation, from emails to contract generation, leaving you more time to focus on performing. Booker T. Saver is here to help!
          </p>
          <Button className="bg-yellow-500 text-gray-900 py-3 px-8 text-xl font-semibold rounded-lg shadow-lg hover:bg-yellow-600 focus:outline-none transform transition-transform duration-300 ease-in-out hover:scale-110">
            Get Started Today
          </Button>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
    </div>
  );
}
