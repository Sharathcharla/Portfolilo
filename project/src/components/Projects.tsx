import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "QKart E-commerce Testing",
      description: "Developed comprehensive test automation framework for QKart e-commerce platform using Selenium WebDriver and TestNG. Implemented test cases for critical user journeys.",
      tech: ["Selenium WebDriver", "TestNG", "Java", "GitLab"],
      github: "https://gitlab.crio.do/COHORT_ME_QKART_QA_ENROLL_1650289513261/csharath10-ME_QKART_QA.git",
      demo: "#"
    },
    {
      title: "QCalc Testing Project",
      description: "Created test cases for QCalc application using JUnit. Implemented unit tests and integration tests to ensure calculator functionality.",
      tech: ["JUnit", "Java", "GitLab", "Maven"],
      github: "https://gitlab.crio.do/COHORT_ME_QCALC_V2_ENROLL_1648471442847/csharath10-ME_QCALC_V2.git",
      demo: "#"
    },
    {
      title: "API Testing Framework",
      description: "Built an automated API testing framework using Rest Assured and TestNG. Implemented tests for RESTful services with detailed reporting.",
      tech: ["Rest Assured", "TestNG", "Java", "Jenkins"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-100">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center text-gray-400 hover:text-indigo-400">
                    <Github className="h-5 w-5 mr-1" />
                    Code
                  </a>
                  <a href={project.demo} className="flex items-center text-gray-400 hover:text-indigo-400">
                    <ExternalLink className="h-5 w-5 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;