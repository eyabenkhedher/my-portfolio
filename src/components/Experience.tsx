import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Full-Stack Developer Intern',
    company: 'SOLDEV',
    location: 'Djerba, Tunisia',
    period: 'Jan 2025 - Jul 2025',
    description: [
      'Developed a flexible appointment and client management solution using a hexagonal architecture',
      'Implemented Angular 19 front-end and Spring Boot 3 back-end secured with Spring Security and Vault',
      'Built a CI/CD pipeline with Docker and GitHub Actions, reducing deployment errors',
      'Wrote unit and integration tests to ensure code reliability and maintainability',
      'Set up real-time monitoring with Prometheus, Grafana, and Loki',
    ],
    technologies: ['Angular 19', 'Spring Boot 3', 'Prometheus', 'Grafana', 'Docker', 'GitHub Actions', 'Vault', 'Spring Security', 'JUnit 5', 'Mockito'],
  },
  {
    title: 'Web Developer Intern',
    company: 'AFTERCODE',
    location: 'Nabeul, Tunisia',
    period: 'Jul 2024 - Sep 2024',
    description: [
      'Designed a complete event booking and management platform',
      'Structured the front-end using Next.js and the back-end using Django Ninja',
    ],
    technologies: ['Next.js', 'Django Ninja', 'GitLab'],
  },
  {
    title: 'Mobile Developer Intern',
    company: 'AFTERCODE',
    location: 'Nabeul, Tunisia',
    period: 'Jul 2023 - Aug 2023',
    description: [
      'Delivered a mobile time tracking app for employees with authentication and sync modules',
    ],
    technologies: ['Flutter', 'Django Rest Framework', 'GitLab'],
  },
  {
    title: 'AR/UX Developer Intern',
    company: 'NET-INFO',
    location: 'Nabeul, Tunisia',
    period: 'Feb 2022 - Jun 2022',
    description: [
      'Designed an immersive UX-focused system with interactive prototypes',
    ],
    technologies: ['Blueprint', 'JavaScript', 'Java', 'Unreal Engine'],
  },
  {
    title: 'AR/VR Developer Intern',
    company: 'NET-INFO',
    location: 'Nabeul, Tunisia',
    period: 'Aug 2021 - Sep 2021',
    description: [
      'Created AR/VR filters and 3D animations for social media platforms',
    ],
    technologies: ['JavaScript', 'Spark AR'],
  },
  {
    title: 'Web Developer Intern',
    company: 'NET-INFO',
    location: 'Nabeul, Tunisia',
    period: 'Jan 2020 - Feb 2020',
    description: [
      'Implemented an E-Commerce website using Prestashop',
    ],
    technologies: ['Prestashop'],
  },
];

export default function Experience() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-slate-700 mb-1">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-600 bg-white px-4 py-2 rounded-lg border border-slate-200">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-3 text-slate-700">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
