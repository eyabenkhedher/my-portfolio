import { Folder, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Cross-platform Insurance Agency App',
    description: 'Developed a comprehensive insurance management application with cross-platform capabilities.',
    technologies: ['Symfony 5', 'JavaFX', 'Codename One'],
    github: 'https://github.com/MayssaSmeti/PidevJava',
  },
  {
    title: 'E-Learning Platform',
    description: 'Built a full-featured online learning platform with course management and user progress tracking.',
    technologies: ['Spring Boot 3', 'Angular 15', 'Python'],
    github: 'https://github.com/eyabenkhedher/Courzelo/tree/main',
  },
  {
    title: 'Microservices Web Application',
    description: 'Designed and implemented a scalable microservices architecture with authentication and database integration.',
    technologies: ['Spring Boot 3', 'Angular 16', 'Docker', 'Keycloak', 'MySQL'],
    github: 'https://github.com/Abdesslem012/Web-Project/tree/master',
  },
  {
    title: 'Complete DevOps Pipeline',
    description: 'Created an end-to-end CI/CD pipeline with automated testing, code quality checks, and monitoring.',
    technologies: ['Jenkins', 'SonarQube', 'Nexus3', 'Prometheus', 'Grafana', 'Docker'],
    github: 'https://github.com/eyabenkhedher/devops-pipeline',
  },
];

export default function Projects() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Academic Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-md group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-2 bg-white rounded-lg border border-slate-200 group-hover:border-slate-300 transition-colors">
                  <Folder className="w-6 h-6 text-slate-700" />
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
                    title="View on GitHub"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{project.title}</h3>
                <p className="text-slate-700 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white text-slate-700 rounded-full text-xs border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
