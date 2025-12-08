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
      description: "A modern React portfolio showcasing my skills, projects, and experience Designed with clean UI, responsive layout, and smooth user experience.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/yourrepo",
      category: "other"
    },
    {
      id: 3,
      title: "Movie App",
      description: "A simple React + Vite application that displays Top Movies of the Year using a Movie API Users can view movie details, browse trending titles, and add movies to their Favorites list.",
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
      {/* FYP Section */}
      <div className="flex justify-center items-center font-black text-2xl text-white font-serif p-16">
        FYP (Final Year Project)
      </div>

      {/* FYP Card - Rectangle */}
      <div className="flex justify-center items-center px-8 mb-16">
        <div className="max-w-4xl w-full bg-deep-blue text-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row border-4 border-orange-500 transform transition duration-300 hover:scale-105">
          
          {/* Project Image */}
          <div className="md:w-1/2 cursor-pointer overflow-hidden" onClick={() => setOpenModal(fypProject.id)}>
            <img
              className="w-full h-64 md:h-full object-cover transition-transform duration-500 hover:scale-110"
              src={fypProject.image}
              alt="FYP Screenshot"
            />
          </div>

          {/* Project Content */}
          <div className="md:w-1/2 p-6 flex flex-col justify-center ml-10">
            <h2 className="text-3xl font-bold mb-4">{fypProject.title}</h2>
            <p className="text-sm mb-6">{fypProject.description}</p>

            {/* GitHub Button */}
            <div className="flex gap-4">
              <a
                href={fypProject.github}
                target="_blank"
                rel="noopener noreferrer"
               className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Other Projects Section */}
      <div className="flex justify-center items-center font-black text-2xl text-white font-serif p-16">
        Other Projects
      </div>

      {/* Other Projects Grid - 2x2 Squares */}
      <div className="flex justify-center items-center px-8 pb-16">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="bg-deep-blue text-white rounded-lg shadow-lg overflow-hidden border-4 border-orange-500 transform transition duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <div className="cursor-pointer overflow-hidden aspect-square" onClick={() => setOpenModal(project.id)}>
                <img
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                <p className="text-sm mb-4">{project.description}</p>

                {/* GitHub Button */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setOpenModal(null)}
        >
          <img
            className="max-h-full max-w-full object-contain"
            src={projects.find(p => p.id === openModal).image}
            alt="Project Screenshot Fullscreen"
          />
        </div>
      )}
    </>
  );
}