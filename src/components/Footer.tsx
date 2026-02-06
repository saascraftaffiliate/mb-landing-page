import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-16 pb-16 border-b border-gray-800">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to ship faster?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Let's talk about your next landing page, website refresh, or product UI sprint.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-medium hover:bg-indigo-500 transition-all flex items-center gap-2 mx-auto group">
            Book a discovery call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Footer Links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-xl font-bold text-white mb-4">Supafast</div>
            <p className="text-gray-500 text-sm">
              Creative partner for SaaS & Tech companies.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Website Design</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Brand Systems</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Product UI</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Development</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Work</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Twitter</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">LinkedIn</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Dribbble</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 Supafast. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-white transition-colors text-sm">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors text-sm">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;