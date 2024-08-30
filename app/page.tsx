import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

const socialLinks = [
  { id: 1, icon: Linkedin, link: 'https://www.linkedin.com/in/anitejwaghray/' },
  { id: 2, icon: Github, link: 'https://github.com/aniwag2' },
];

export default function Home() {
  return (
    <main className="min-h-screen p-8 relative">
      <div className="absolute top-4 right-4 flex space-x-4">
        {socialLinks.map((social) => (
          <Link key={social.id} href={social.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <social.icon size={24} />
          </Link>
        ))}
      </div>
      
      <h1 className="text-4xl font-bold mb-8 text-center">Anitej Waghray</h1>
      
      <section className="mb-12 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>Hello, my name is Anitej Waghray. I am currently a student at Purdue University majoring in Computer Science.</p>
      </section>
      
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Featured Project</h2>
        <div className="border p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Theralert</h3>
          <p className="mb-4">This is the webapp I am currently developing that acts as a notification service and calendar for nursing homes/assisted living places to alert family members to the activities of patients.</p>
          <Link href="https://theralert.aniwaghray.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            View Project
          </Link>
        </div>
      </section>
    </main>
  );
}