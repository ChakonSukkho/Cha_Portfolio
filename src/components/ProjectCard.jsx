import { motion } from 'framer-motion';
import { FaBookOpen, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function ProjectCard({ project, index, onOpenCaseStudy }) {
  return (
    <motion.article
      layout
      className="glass-card group flex h-full flex-col overflow-hidden rounded-[2rem] transition hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-glow"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.48, delay: index * 0.04 }}
    >
      <div className="relative h-56 overflow-hidden">
        {project.scoreImprovement ? (
          <div className="flex h-full items-center justify-center gap-5 bg-gradient-to-br from-slate-900 via-blue-950/50 to-cyan-950/40 px-6">
            <div className="text-center">
              <div className="grid h-24 w-24 place-items-center rounded-full border-[9px] border-amber-300/70 bg-slate-950/60 text-2xl font-black text-white">
                {project.scoreImprovement.before}%
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Before</p>
            </div>
            <span className="text-3xl font-black text-cyan-300" aria-hidden="true">→</span>
            <div className="text-center">
              <div className="grid h-24 w-24 place-items-center rounded-full border-[9px] border-emerald-400/80 bg-slate-950/60 text-2xl font-black text-white shadow-glow">
                {project.scoreImprovement.after}%
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">After</p>
            </div>
          </div>
        ) : (
          <img
            src={project.image}
            alt={`${project.title} homepage preview`}
            className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" aria-hidden="true" />
        <span className="absolute left-5 top-5 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-black leading-tight text-white">{project.title}</h3>
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
