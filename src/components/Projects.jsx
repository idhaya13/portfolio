import portprojbg from "../assets/portfolioproj.jpg";
import pagebg from "../assets/reactprojbg.jpeg";

const projects = [
  {
    title: "Portfolio Site",
    description: "My personal portfolio using Vite React and Tailwind.",
    image: portprojbg, 
    link: "#",
  },
    {
    title: "Vite Reactpages templates",
    description: "reactjs pages for quick use using Vite React and Tailwind.",
    image: pagebg, 
    link: "https://github.com/idhaya13/vitereacttemplates",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <div key={i} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="rounded mb-4 h-48 w-full object-cover"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <a
              href={project.link}
              className="inline-block mt-4 text-indigo-400 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
