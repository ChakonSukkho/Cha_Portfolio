import { motion } from 'framer-motion';
import { FaBookOpen, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function ProjectCard({ project, index, onOpenCaseStudy }) {
  return (
    <motion.article
      layout
      className="glass-card group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.5rem] transition hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-glow sm:rounded-[2rem]"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.48, delay: index * 0.04 }}
    >
      <div className="project-visual relative aspect-[16/10] min-h-48 overflow-hidden sm:aspect-auto sm:h-56">
        {project.scoreImprovement ? (
          <div className="project-visual-surface flex h-full items-center justify-center gap-3 bg-gradient-to-br from-slate-900 via-blue-950/50 to-cyan-950/40 px-4 sm:gap-5 sm:px-6">
            <div className="text-center">
              <div className="grid h-20 w-20 place-items-center rounded-full border-[7px] border-amber-300/70 bg-slate-950/60 text-xl font-black text-white sm:h-24 sm:w-24 sm:border-[9px] sm:text-2xl">
                {project.scoreImprovement.before}%
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Before</p>
            </div>
            <span className="text-3xl font-black text-cyan-300" aria-hidden="true">→</span>
            <div className="text-center">
              <div className="grid h-20 w-20 place-items-center rounded-full border-[7px] border-emerald-400/80 bg-slate-950/60 text-xl font-black text-white shadow-glow sm:h-24 sm:w-24 sm:border-[9px] sm:text-2xl">
                {project.scoreImprovement.after}%
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">After</p>
            </div>
          </div>
        ) : project.renewalAutomation ? (
          <div className="project-visual-surface flex h-full flex-col justify-center bg-gradient-to-br from-slate-900 via-blue-950/55 to-cyan-950/40 px-4 sm:px-7">
            <div className="flex items-center justify-between gap-3">
              {['Excel', 'Dynamics 365', 'Sales team'].map((step, stepIndex) => (
                <div key={step} className="contents">
                  <div className="rounded-2xl border border-cyan-300/20 bg-slate-950/55 px-3 py-3 text-center text-xs font-bold text-cyan-100 sm:px-4">
                    {step}
                  </div>
                  {stepIndex < 2 && <span className="text-xl font-black text-cyan-300" aria-hidden="true">→</span>}
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {project.renewalAutomation.reminderDays.map((days) => (
                <span key={days} className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-bold text-emerald-200">
                  {days}-day reminder
                </span>
              ))}
            </div>
          </div>
        ) : (
          <img
            src={project.image}
            alt={`${project.title} homepage preview`}
            className="h-full w-full max-w-none object-cover opacity-90 transition duration-500 group-hover:scale-105"
          />
        )}
        <div className="project-media-overlay absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" aria-hidden="true" />
        <span className="absolute left-5 top-5 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">
          {project.category}
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">{project.title}</h3>
        <p className="mt-3 leading-7 text-slate-400">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300">
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-5 grid gap-2 text-sm text-slate-400">
          {project.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex gap-2 leading-6">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.demoUrl && project.demoUrl !== '#' && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="secondary-button px-4 py-2 text-xs"
              aria-label={`View demo for ${project.title}`}
            >
              View Demo <FaExternalLinkAlt />
            </a>
          )}
          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            className="secondary-button px-4 py-2 text-xs"
            aria-label={`Open case study for ${project.title}`}
          >
            Case Study <FaBookOpen />
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="secondary-button px-4 py-2 text-xs"
              aria-label={`Open GitHub for ${project.title}`}
            >
              GitHub <FaGithub />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
