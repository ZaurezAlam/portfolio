import { useState } from "react";
import fypimg from '../../assets/images/fyp.png';

export default function Projects() {
  const [openModal, setOpenModal] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Vehicle Smoke Detection System",
      description: "Detects smoke-emitting vehicles, captures their number plates, and logs them in real-time with visualization.",
      image: fypimg,
      github: "https://github.com/ZaurezAlam/smoke_veHicle_dashboard",
      category: "fyp"
    },
    {
      id: 2,
      title: "PortFolio",
      description: "A modern React portfolio showcasing my skills, projects, and experience. Designed with clean UI, responsive layout, and smooth user experience.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/ZaurezAlam/portfolio",
      category: "other"
    },
    {
      id: 3,
      title: "Movie App",
      description: "A simple React + Vite application that displays Top Movies of the Year using a Movie API. Users can view movie details, browse trending titles, and add movies to their Favorites list.",
      image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/ZaurezAlam/React_Movie_Project",
      category: "other"
    },
    {
      id: 4,
      title: "Task Management System",
      description: "Collaborative task tracker with team management, deadline reminders, and progress visualization.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      github: "https://github.com/ZaurezAlam/compilation_project_code",
      category: "other"
    },
    {
      id: 5,
      title: "AI Chatbot Assistant",
      description: "Intelligent chatbot powered by NLP for customer support automation and query resolution.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
      github: "https://github.com/ZaurezAlam/ChatBot_DeepSeek",
      category: "other"
    }
  ];

  const fypProject = projects.find(p => p.category === "fyp");
  const otherProjects = projects.filter(p => p.category === "other");

  return (
    <>
      {/* FYP Section Heading */}
      <div className="flex justify-center items-center px-4 py-8 sm:py-12 lg:py-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-serif text-center">
          FYP (Final Year Project)
        </h2>
      </div>

      {/* FYP Card */}
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="max-w-4xl w-full bg-deep-blue text-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row border-4 border-orange-500 transition-transform duration-300 lg:hover:scale-105">
          
          {/* Image */}
          <div
            className="w-full lg:w-1/2 cursor-pointer overflow-hidden"
            onClick={() => setOpenModal(fypProject.id)}
          >
            <img
              className="w-full h-56 sm:h-64 lg:h-full object-cover transition-transform duration-500 lg:hover:scale-110"
              src={fypProject.image}
              alt="FYP Screenshot"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 p-5 sm:p-6 lg:p-8 flex flex-col justify-center text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              {fypProject.title}
            </h3>

            <p className="text-sm sm:text-base lg:text-lg mb-5 sm:mb-6 leading-relaxed">
              {fypProject.description}
            </p>

            <div className="flex justify-center lg:justify-start">
              <a
                href={fypProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-orange-500 text-white font-semibold px-6 py-3 min-h-[44px] rounded-lg hover:bg-orange-600 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Other Projects Section Heading */}
      <div className="flex justify-center items-center px-4 py-8 sm:py-12 lg:py-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-serif text-center">
          Other Projects
        </h2>
      </div>

      {/* Other Projects Grid */}
      <div className="flex justify-center items-center px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {otherProjects.map(project => (
            <div
              key={project.id}
              className="bg-deep-blue text-white rounded-lg shadow-lg overflow-hidden border-4 border-orange-500 transition-transform duration-300 sm:hover:scale-105"
            >
              {/* Image */}
              <div
                className="cursor-pointer overflow-hidden aspect-[4/3]"
                onClick={() => setOpenModal(project.id)}
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-500 sm:hover:scale-110"
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base mb-4 leading-relaxed">
                  {project.description}
                </p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-orange-500 text-white font-semibold px-6 py-3 min-h-[44px] rounded-lg hover:bg-orange-600 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4"
          onClick={() => setOpenModal(null)}
        >
          <img
            className="max-h-full max-w-full object-contain rounded-lg"
            src={projects.find(p => p.id === openModal).image}
            alt="Project Screenshot Fullscreen"
          />
        </div>
      )}
    </>
  );
}