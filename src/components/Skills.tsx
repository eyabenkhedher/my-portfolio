import { Code, Database, Wrench, Shield, TestTube, GitBranch } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming Languages',
    skills: ['Java 21', 'Python', 'C#', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    icon: Code,
    title: 'Frameworks & Libraries',
    skills: ['Spring Boot 3', 'Angular 19', 'Next.js', 'Symfony 5', 'Django', 'Django Ninja', '.NET', 'JavaFX'],
  },
  {
    icon: Wrench,
    title: 'DevOps & CI/CD',
    skills: ['Docker', 'GitHub Actions', 'Jenkins', 'Prometheus', 'Grafana', 'Loki', 'Promtail', 'SonarQube', 'Nexus3'],
  },
  {
    icon: Shield,
    title: 'Security & Authentication',
    skills: ['Spring Security', 'Keycloak', 'Vault', 'JWT', 'WireGuard'],
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'MariaDB', 'SQLite', 'H2', 'Room'],
  },
  {
    icon: TestTube,
    title: 'Testing & Quality',
    skills: ['JUnit 5', 'Mockito', 'TestContainers', 'Unit & Integration Testing', 'Swagger'],
  },
];

export default function Skills() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="font-bold text-slate-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-slate-100 rounded-lg">
              <GitBranch className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="font-bold text-slate-900">Methodologies & Architecture</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Agile', 'Scrum', 'Kanban', 'Microservices', 'REST API', 'Hexagonal Architecture', 'MVC', 'MVVM', 'TDD', 'UML'].map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
