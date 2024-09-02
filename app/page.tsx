import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

const socialLinks = [
  { id: 1, icon: Linkedin, link: 'https://www.linkedin.com/in/anitejwaghray/' },
  { id: 2, icon: Github, link: 'https://github.com/aniwag2' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 p-8 relative text-gray-200">
      <div className="absolute top-6 right-6 flex space-x-6">
        {socialLinks.map((social) => (
          <Link key={social.id} href={social.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
            <social.icon size={28} />
          </Link>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-100 mt-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Anitej Waghray
          </span>
        </h1>
        
        <section className="mb-16 bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-indigo-300">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hello, my name is Anitej Waghray. I am currently a student at Purdue University majoring in Computer Science.
          </p>
        </section>
        
        <section className="bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-indigo-300">Featured Project</h2>
          <div className="border-2 border-indigo-700 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Theralert</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              This is the webapp I am currently developing that acts as a notification service and calendar for nursing homes/assisted living places to alert family members to the activities of patients.
            </p>
            <Link 
              href="https://theralert.aniwaghray.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-indigo-600 text-gray-100 font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              View Project
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}