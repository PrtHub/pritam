import { Project } from "@/lib/data";

interface SupportContactProps {
  project: Project;
}

export function SupportContact({ project }: SupportContactProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-white mb-4">Contact & Support</h2>
      <p className="text-zinc-400 mb-8">
        Need help with {project.title}? We&apos;re here to assist you.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email Support */}
        {project.supportEmail && (
          <a
            href={`mailto:${project.supportEmail}`}
            className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-white/10 hover:bg-zinc-900/80 hover:border-white/20 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div>
              <div className="font-medium text-white">Email Support</div>
              <div className="text-sm text-zinc-500">{project.supportEmail}</div>
            </div>
          </a>
        )}

        {/* Legal Links */}
        <div className="flex flex-col gap-4">
          <a
            href={project.privacyPolicyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-white/10 hover:bg-zinc-900/80 hover:border-white/20 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
              </svg>
            </div>
            <div>
              <div className="font-medium text-white">Privacy Policy</div>
              <div className="text-sm text-zinc-500">Read our privacy policy</div>
            </div>
          </a>

          <a
            href={project.termsOfServiceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-white/10 hover:bg-zinc-900/80 hover:border-white/20 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <path d="M14 2v6h6"/>
                <path d="M16 13H8"/>
                <path d="M16 17H8"/>
                <path d="M10 9H8"/>
              </svg>
            </div>
            <div>
              <div className="font-medium text-white">Terms of Service</div>
              <div className="text-sm text-zinc-500">Read our terms</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
