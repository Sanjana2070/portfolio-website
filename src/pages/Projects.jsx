// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: 'Pokedex',
    description: 'A web app for searching and viewing Pokémon data.',
    tech: ['React', 'Vite', 'Framer Motion'],
    link: 'https://pokedex-janis.netlify.app/',
  },
  {
    title: 'Qalira',
    description: 'A platform for discovering dance and music classes in Delhi. Currently in development.',
    tech: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    link: 'https://github.com/Sanjana2070/Qalira',
  },
  {
    title: 'Portfolio Website',
    description: 'Minimal personal site for showcasing code and choreography.',
    tech: ['React', 'Vite', 'Framer Motion'],
    link: 'https://github.com/Sanjana2070/portfolio-website',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-[#F5EAD5] font-jost px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 tracking-tight text-center">Projects</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-[#F5EAD5]/30 rounded-xl p-6 hover:bg-[#1c1c1c] transition duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-base opacity-90 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {project.tech.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#F5EAD5]/10 px-2 py-1 rounded border border-[#F5EAD5]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5EAD5] underline underline-offset-4 text-sm hover:text-yellow-200"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
