import React from 'react';
import { Code2, TestTube2, GitBranch, Database, Server, Terminal } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <TestTube2 className="h-8 w-8 text-indigo-400" />,
      title: "Test Automation",
      items: ["Selenium WebDriver", "TestNG", "JUnit", "Rest Assured", "JMeter"]
    },
    {
      icon: <Code2 className="h-8 w-8 text-indigo-400" />,
      title: "Programming",
      items: ["Java", "Python", "JavaScript", "SQL", "HTML/CSS"]
    },
    {
      icon: <GitBranch className="h-8 w-8 text-indigo-400" />,
      title: "Version Control",
      items: ["Git", "GitLab", "GitHub", "Bitbucket"]
    },
    {
      icon: <Database className="h-8 w-8 text-indigo-400" />,
      title: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      icon: <Server className="h-8 w-8 text-indigo-400" />,
      title: "CI/CD & Tools",
      items: ["Jenkins", "Docker", "Postman", "JIRA"]
    },
    {
      icon: <Terminal className="h-8 w-8 text-indigo-400" />,
      title: "Testing Types",
      items: ["API Testing", "Performance Testing", "UI Testing", "Integration Testing"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-700">
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold ml-2 text-gray-100">{skill.title}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-400">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;