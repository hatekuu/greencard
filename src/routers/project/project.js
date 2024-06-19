import React from 'react';

const projects = [
  {
    id: 1,
    title: "Dự Án 1",
    description: " Đây là một dự án rất thú vị và đầy thử thách.",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 2,
    title: "Dự Án 2",
    description: " Dự án này mang lại nhiều lợi ích cho cộng đồng.",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 3,
    title: "Dự Án 3",
    description: "Đây là một trong những dự án nổi bật của chúng tôi.",
    image: "https://via.placeholder.com/400",
  },
];

const Project = () => {
  return (
    <div className="container mx-auto p-4 relative left-11">
      <h1 className="text-4xl font-bold mb-8">Dự Án</h1>
      
      {/* Project List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="project-item bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
