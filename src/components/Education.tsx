import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'National Engineering Diploma in Computer Science',
    institution: 'ESPRIT Private School of Engineering and Technology',
    location: 'Tunisia',
    year: '2025',
  },
  {
    degree: 'Applied License in Multimedia & Web Development',
    institution: 'Higher Institute of Technological Studies of Nabeul (ISET Nabeul)',
    location: 'Tunisia',
    year: '2022',
  },
  {
    degree: 'Baccalaureate in Computer Science',
    institution: 'Dar Chaaben el Fehri High School',
    location: 'Tunisia',
    year: '2019',
  },
];

const certifications = [
  {
    title: 'Agile Project Management',
    issuer: 'HP',
    year: '2025',
  },
  {
    title: 'SOA Architecture',
    issuer: 'Coursera',
    year: '2023',
  },
];

export default function Education() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-slate-100 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-slate-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-2">{edu.degree}</h3>
                      <p className="text-slate-700 mb-1">{edu.institution}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">{edu.location}</span>
                        <span className="text-sm font-semibold text-slate-900 bg-slate-100 px-3 py-1 rounded-full">
                          {edu.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Certifications</h2>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-slate-100 rounded-lg">
                      <Award className="w-6 h-6 text-slate-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-2">{cert.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700">{cert.issuer}</span>
                        <span className="text-sm font-semibold text-slate-900 bg-slate-100 px-3 py-1 rounded-full">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Languages</h3>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900">Arabic</span>
                    <span className="text-slate-600">Native</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900">French</span>
                    <span className="text-slate-600">Fluent</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900">English</span>
                    <span className="text-slate-600">Fluent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
