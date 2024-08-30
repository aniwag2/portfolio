import Link from 'next/link';

const projects = [
  { id: 1, title: 'LinkedIn', description: 'Connect with me!', link: 'https://www.linkedin.com/in/anitejwaghray/' },
  { id: 2, title: 'Github', description: 'My public projects!', link: 'https://github.com/aniwag2' },
  { id: 3, title: 'Theralert', description: 'This is the webapp I am currently developing that acts as a notification service and calendar for nursing homes/assisted living places to alert family members to the activities of patients.', link: 'https://theralert.aniwaghray.com' },
];

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-4xl font-bold mb-8">Anitej Waghray</h1>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>Hello, my name is Anitej Waghray. I am currently a student at Purdue University majoring in Computer Science. You can check out my LinkedIn and Github above. Below are some of my personal projects.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="border p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}