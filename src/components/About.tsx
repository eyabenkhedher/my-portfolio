export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">About Me</h2>
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200">
          <p className="text-lg text-slate-700 leading-relaxed">
            Junior software engineer specialized in <span className="font-semibold text-slate-900">Java/Spring Boot</span> and <span className="font-semibold text-slate-900">Angular</span>, with experience in web, mobile, and AR/VR development, microservices, CI/CD, unit and integration testing, and application security. Motivated, detail-oriented, and experienced in Agile/Scrum environments, seeking to contribute to scalable, secure, and maintainable software solutions.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-slate-900">5+</div>
              <div className="text-slate-600 mt-2">Internships</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-slate-900">4+</div>
              <div className="text-slate-600 mt-2">Academic Projects</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-slate-900">3</div>
              <div className="text-slate-600 mt-2">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
