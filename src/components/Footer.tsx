import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Eya Ben Khedher</h3>
            <p className="text-slate-400 leading-relaxed">
              Software Engineer specialized in building scalable, secure, and maintainable solutions.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <a href="mailto:eya.benkhedher@esprit.tn" className="hover:text-white transition-colors">
                  eya.benkhedher@esprit.tn
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+216 97 654 708</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Tunis, Tunisia</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="https://github.com/eyabenkhedher"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>github.com/eyabenkhedher</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://linkedin.com/in/eya-ben-khedher-5ba236222"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="mt-6">
              <div className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium">
                Available Immediately
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>2025 Eya Ben Khedher. Professional Portfolio.</p>
        </div>
      </div>
    </footer>
  );
}
