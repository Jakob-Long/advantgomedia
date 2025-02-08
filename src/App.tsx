import React from 'react';
import { ArrowRight, BarChart2, Rocket, Target, Users2, ArrowUpRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Rocket className="h-6 w-6 text-emerald-600" />
              <span className="font-bold text-xl">AdvantGo Media</span>
            </div>
            <button className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity shadow-[0_8px_25px_-8px_rgba(16,185,129,0.5)]">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 text-gray-600">
              Welcome to AdvantGo Media
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 sm:mb-12 leading-tight">
              We Turn Your Store Into A{' '}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-emerald-600 to-teal-400 bg-clip-text text-transparent">
                  Money Printing Machine
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-500 to-teal-400 transform scale-x-100"></span>
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-500 to-teal-400 blur-sm"></span>
              </span>
            </h1>

            {/* Video Section */}
            <div className="relative max-w-3xl mx-auto mb-12">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-3xl blur-2xl opacity-75"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl"></div>
              <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-[0_8px_40px_-12px_rgba(16,185,129,0.4)]">
                {/* Replace this div with actual video embed */}
                <div className="absolute inset-0 flex items-center justify-center text-white/50">
                  Video Placeholder
                </div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2 mx-auto shadow-[0_8px_25px_-8px_rgba(16,185,129,0.5)]">
              Schedule a Call
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                icon: <Target className="h-6 w-6 text-emerald-600" />,
                title: "Strategic Planning",
                description: "Custom growth strategies tailored to your business goals and market position."
              },
              {
                icon: <BarChart2 className="h-6 w-6 text-emerald-600" />,
                title: "Data Analytics",
                description: "In-depth analysis and reporting to optimize your marketing performance."
              },
              {
                icon: <Users2 className="h-6 w-6 text-emerald-600" />,
                title: "Lead Generation",
                description: "Proven strategies to attract and convert high-quality leads."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-[0_0_50px_-12px_rgba(16,185,129,0.15)] hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)] transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Trusted by Growing Brands</h2>
            <p className="text-lg sm:text-xl text-gray-600">Join hundreds of businesses achieving exceptional growth</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO at GrowthTech",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
              },
              {
                name: "Michael Chen",
                role: "Founder of EcomPro",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
              },
              {
                name: "Emma Williams",
                role: "Director at ShopifyPlus",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-[0_0_50px_-12px_rgba(16,185,129,0.15)] hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)] transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500/20"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">"AdvantGo Media transformed our marketing approach and helped us achieve 3x growth in just 6 months."</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Business?</h2>
            <p className="text-lg sm:text-xl mb-8 text-emerald-50">Book a free strategy call and discover how we can help you achieve your growth goals.</p>
            <button className="w-full sm:w-auto bg-white text-emerald-600 px-8 py-4 rounded-full font-medium hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2 mx-auto shadow-lg">
              Schedule Your Call
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <Rocket className="h-6 w-6 text-emerald-400" />
                <span className="font-bold text-xl text-white">AdvantGo Media</span>
              </div>
              <p className="text-sm sm:text-base">Helping businesses scale through strategic marketing and proven growth frameworks.</p>
            </div>
            {['Services', 'Company', 'Resources'].map((title) => (
              <div key={title}>
                <h4 className="font-bold text-white mb-4">{title}</h4>
                <ul className="space-y-2 text-sm sm:text-base">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i}>
                      <a href="#" className="hover:text-emerald-400 transition-colors">
                        {title} Link {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
            <p>&copy; 2024 AdvantGo Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;