import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaAward, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeading from './SectionHeading.jsx';
import { certificates } from '../data/certificates.js';

const filters = ['All', 'Technical', 'Professional'];

function CertificateCard({ certificate, index }) {
  return (
    <motion.article
      layout
      className="glass-card group flex h-full flex-col overflow-hidden rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-glow"
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cyan-300/10 text-lg text-cyan-200">
          <FaAward aria-hidden="true" />
        </div>
        <span className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] px-3 py-1 text-xs font-bold text-cyan-200">
          {certificate.category}
        </span>
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        {certificate.issued}
      </p>
      <h3 className="mt-2 text-xl font-black leading-snug text-white">{certificate.title}</h3>
      <p className="mt-2 text-sm font-semibold text-slate-300">{certificate.issuer}</p>

      {certificate.skills?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {certificate.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-400"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      <a
        href={certificate.credentialUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-cyan-200 transition hover:text-cyan-100"
        aria-label={`View credential for ${certificate.title}`}
      >
        View certificate
        <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
      </a>
    </motion.article>
  );
}

function Certificates() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredCertificates = useMemo(
    () =>
      activeFilter === 'All'
        ? certificates
        : certificates.filter((certificate) => certificate.category === activeFilter),
    [activeFilter],
  );

  const visibleCertificates = showAll ? filteredCertificates : filteredCertificates.slice(0, 6);
  const hasMore = filteredCertificates.length > 6;

  const changeFilter = (filter) => {
    setActiveFilter(filter);
    setShowAll(false);
  };

  return (
    <section id="certificates" className="section-container py-24">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <SectionHeading
          eyebrow="Certificates"
          title="Certificates & continuous learning."
          description="Verified technical credentials and professional courses that support how I build, communicate, and solve problems."
          align="left"
        />

        <div className="mb-12 flex flex-wrap gap-2" role="tablist" aria-label="Certificate filters">
          {filters.map((filter) => {
            const count =
              filter === 'All'
                ? certificates.length
                : certificates.filter((certificate) => certificate.category === filter).length;
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => changeFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'border-cyan-300/40 bg-cyan-300/15 text-cyan-100'
                    : 'border-white/10 bg-white/[0.04] text-slate-400 hover:border-cyan-300/30 hover:text-cyan-100'
                }`}
              >
                {filter} <span className="ml-1 opacity-70">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleCertificates.map((certificate, index) => (
            <CertificateCard
              key={`${certificate.title}-${certificate.issuer}`}
              certificate={certificate}
              index={index}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="secondary-button"
            aria-expanded={showAll}
          >
            {showAll ? 'Show fewer' : `Show all ${filteredCertificates.length}`}
            {showAll ? <FaChevronUp aria-hidden="true" /> : <FaChevronDown aria-hidden="true" />}
          </button>
        </div>
      )}
    </section>
  );
}

export default Certificates;
