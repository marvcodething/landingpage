"use client";

import { useState } from "react";

function BetaSignup() {
  const [activeTab, setActiveTab] = useState('student');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const benefits = [
    { icon: "🚀", text: "First access to revolutionary study tools" },
    { icon: "🎯", text: "Shape the app with your feedback" },
    { icon: "💎", text: "Exclusive early adopter benefits" },
    { icon: "🌟", text: "Priority support and updates" }
  ];

  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-6">
            Join the future of studying
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Be among the first to experience StudySpot when we launch in early 2025. 
            Join thousands of students already signed up for beta access.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-slate-700 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('student')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'student'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Students
            </button>
            <button
              onClick={() => setActiveTab('enterprise')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'enterprise'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Universities
            </button>
          </div>
        </div>

        {activeTab === 'student' ? (
          <div className="bg-slate-700 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get Early Access</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col items-center text-slate-300">
                    <span className="text-3xl mb-2">{benefit.icon}</span>
                    <span className="text-sm text-center">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 bg-slate-600 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={submitted}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  {submitted ? '✓ Joined!' : 'Join Beta'}
                </button>
              </div>
              <p className="text-slate-400 text-sm text-center mt-4">
                No spam, just updates about our launch. Unsubscribe anytime.
              </p>
            </form>

            <div className="mt-8 text-center">
              <p className="text-slate-400 text-sm">
                Coming to iOS, Android, and Web • Early 2025
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-slate-700 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">University Partnership</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Transform your campus study experience with StudySpot Enterprise. 
                Get comprehensive insights into space utilization, student productivity patterns, 
                and optimize your study environments for maximum academic success.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <span className="mr-2">🏫</span>
                    For Universities
                  </h4>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>• Real-time space utilization analytics</li>
                    <li>• Student engagement and productivity metrics</li>
                    <li>• Optimize facility usage and planning</li>
                    <li>• Campus-wide study behavior insights</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <span className="mr-2">📊</span>
                    Enterprise Features
                  </h4>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>• Custom campus integration and branding</li>
                    <li>• Advanced reporting dashboard</li>
                    <li>• Priority support and training</li>
                    <li>• API access for existing systems</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 mb-4">
                Schedule Campus Demo
              </button>
              <p className="text-slate-400 text-sm">
                Contact us to discuss how StudySpot can transform your campus study experience
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BetaSignup;