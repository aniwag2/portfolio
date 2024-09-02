import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

const socialLinks = [
  { id: 1, icon: Linkedin, link: 'https://www.linkedin.com/in/anitejwaghray/' },
  { id: 2, icon: Github, link: 'https://github.com/aniwag2' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 relative">
      <div className="absolute top-6 right-6 flex space-x-6">
        {socialLinks.map((social) => (
          <Link key={social.id} href={social.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
            <social.icon size={28} />
          </Link>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-indigo-900 mt-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            Anitej Waghray
          </span>
        </h1>
        
        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-indigo-800">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hello, my name is Anitej Waghray. I am currently a student at Purdue University majoring in Computer Science.
          </p>
        </section>
        
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-indigo-800">Featured Project</h2>
          <div className="border-2 border-indigo-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Theralert</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              This is the webapp I am currently developing that acts as a notification service and calendar for nursing homes/assisted living places to alert family members to the activities of patients.
            </p>
            <Link 
              href="https://theralert.aniwaghray.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              View Project
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}