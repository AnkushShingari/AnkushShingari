import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import developerData from '../data/developer.json';

export default function SiteFooter() {
  const { personalInfo, languages, interests } = developerData;

  return (
    <footer className="bg-[#0b0f17] text-white py-8 px-4 md:py-16 md:px-12 font-sans border-t border-gray-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Left Bio Column */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {personalInfo?.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
              {personalInfo?.bio || personalInfo?.summary}
            </p>
          </div>

          {/* Right Links Column */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-2 gap-8 lg:justify-items-end">
            
            {/* Languages */}
            <div className="space-y-3">
              <h4 className="text-[#2dd4bf] font-mono text-xs uppercase tracking-wider font-semibold">
                LANGUAGES
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {languages ? (
                  languages.map((lang, index) => (
                    <li key={index}>
                      {lang.language} {lang.proficiency && `(${lang.proficiency})`}
                    </li>
                  ))
                ) : (
                  <>
                    <li>English (Professional)</li>
                    <li>Hindi (Native)</li>
                    <li>Punjabi (Native)</li>
                  </>
                )}
              </ul>
            </div>

            {/* Interests */}
            <div className="space-y-3">
              <h4 className="text-[#2dd4bf] font-mono text-xs uppercase tracking-wider font-semibold">
                INTERESTS
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {interests ? (
                  interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                  ))
                ) : (
                  <>
                    <li>Coding</li>
                    <li>Travelling</li>
                  </>
                )}
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/80"></div>

        {/* Bottom Bar Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} {personalInfo?.name}. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-gray-400 text-base">
            <a
              href={`https://github.com/${personalInfo?.github}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo?.linkedin || "#"}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}