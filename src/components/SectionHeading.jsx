import { motion } from 'framer-motion';

function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <motion.div
      className={`mb-9 flex min-w-0 flex-col sm:mb-12 ${alignment}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="max-w-3xl text-[clamp(1.875rem,5vw,3rem)] font-bold leading-tight tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">{description}</p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
