import { useState } from 'react';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
  FiSend
} from 'react-icons/fi';
import { TbBrandGithub } from 'react-icons/tb';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submit logic here
    console.log('Form Submitted:', formData);
  };

  return (
    <section className="bg-[#0b0f12] text-white py-16 px-6 md:px-12 lg:px-20 font-sans min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102a2d] border border-[#1b4e52] text-[#2dd4bf] text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2dd4bf] animate-pulse"></span>
              CONNECT WITH ME
            </div>

            {/* Heading & Subtitle */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Get In Touch
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Have a project in mind or want to collaborate? Drop me a message and I'll get back to you.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#2dd4bf]">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full bg-[#11171d] border border-gray-800 rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#2dd4bf] transition"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#2dd4bf]">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  className="w-full bg-[#11171d] border border-gray-800 rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#2dd4bf] transition"
                  required
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="space-y-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-[#2dd4bf]">
                SUBJECT
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this regarding?"
                className="w-full bg-[#11171d] border border-gray-800 rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#2dd4bf] transition"
                required
              />
            </div>

            {/* Message Textarea */}
            <div className="space-y-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-[#2dd4bf]">
                YOUR MESSAGE
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message details here..."
                className="w-full bg-[#11171d] border border-gray-800 rounded-lg p-4 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#2dd4bf] transition resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#2dd4bf] hover:bg-[#22b8a5] text-black font-semibold px-6 py-3.5 rounded-lg text-sm transition transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-[#2dd4bf]/10"
            >
              <span>Send Message</span>
              <FiArrowRight className="text-lg" />
            </button>
          </form>
        </div>

        {/* Right Column: Info Cards & Terminal Widget */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Info Card */}
          <a 
            href="mailto:ankush.kumar1026@gmail.com"
            className="flex items-center gap-4 bg-[#11171d] border border-gray-800/80 hover:border-gray-700 p-4 rounded-xl transition group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0d2a2d] text-[#2dd4bf] flex items-center justify-center shrink-0">
              <FiMail className="text-lg" />
            </div>
            <div>
              <span className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider">EMAIL ADDRESS</span>
              <span className="text-sm font-semibold text-white group-hover:text-[#2dd4bf] transition">ankush.kumar1026@gmail.com</span>
            </div>
          </a>

          {/* Phone Info Card */}
          <a 
            href="tel:+918930091095"
            className="flex items-center gap-4 bg-[#11171d] border border-gray-800/80 hover:border-gray-700 p-4 rounded-xl transition group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0d2a2d] text-[#2dd4bf] flex items-center justify-center shrink-0">
              <FiPhone className="text-lg" />
            </div>
            <div>
              <span className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider">PHONE NUMBER</span>
              <span className="text-sm font-semibold text-white group-hover:text-[#2dd4bf] transition">+91 8930091095</span>
            </div>
          </a>

          {/* Location Info Card */}
          <div className="flex items-center gap-4 bg-[#11171d] border border-gray-800/80 p-4 rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-[#0d2a2d] text-[#2dd4bf] flex items-center justify-center shrink-0">
              <FiMapPin className="text-lg" />
            </div>
            <div>
              <span className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider">LOCATION</span>
              <span className="text-sm font-semibold text-white">Yamunanagar, Haryana, India</span>
            </div>
          </div>

          {/* GitHub Profile Card */}
          <a 
            href="https://github.com/AnkushShingari" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#11171d] border border-gray-800/80 hover:border-gray-700 p-4 rounded-xl transition group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0d2a2d] text-[#2dd4bf] flex items-center justify-center shrink-0">
              <TbBrandGithub className="text-xl" />
            </div>
            <div>
              <span className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider">GITHUB PROFILE</span>
              <span className="text-sm font-semibold text-white group-hover:text-[#2dd4bf] transition">github.com/AnkushShingari</span>
            </div>
          </a>

          {/* Terminal Console Card */}
          <div className="bg-[#11171d] border border-gray-800/80 rounded-xl overflow-hidden mt-6">
            <div className="bg-[#161d24] px-4 py-2.5 flex items-center justify-between border-b border-gray-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
              </div>
              <span className="font-mono text-xs text-gray-400">status.sh</span>
              <FiArrowRight className="text-gray-500 text-xs" />
            </div>
            <div className="p-5 font-mono text-xs space-y-3 leading-relaxed">
              <p className="text-gray-400">
                <span className="text-[#2dd4bf]">$</span> npm run ping-ankush
              </p>
              <p className="text-[#2dd4bf]">
                &gt;&gt; Connection active.
              </p>
              <p className="text-gray-400">
                &gt;&gt; Average response time: &lt; 4 hours.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}