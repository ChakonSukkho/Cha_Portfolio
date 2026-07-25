import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';
import SectionHeading from './SectionHeading.jsx';
import { certificates } from '../data/certificates.js';

function CertificateCard({ certificate, index }) {
  return (
    <motion.article
      className="glass-card group overflow-hidden rounded-[2rem]"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="flex h-full flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-xl text-cyan-200">
            <FaAward aria-hidden="true" />
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300">
            <FaFilePdf className="text-cyan-300" aria-hidden="true" />
            Certificate
          </span>
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
          {certificate.issued}
        </p>
        <h3 className="mt-3 text-xl font-black leading-snug text-white sm:text-2xl">{certificate.title}</h3>
        <p className="mt-2 font-semibold text-slate-300">{certificate.issuer}</p>

        {certificate.skills?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {certificate.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {certificate.credentialUrl && (
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="secondary-button mt-auto self-start pt-3"
            aria-label={`View credential for ${certificate.title}`}
          >
            View credential
            <FaExternalLinkAlt aria-hidden="true" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="section-container py-24">
      <SectionHeading
        eyebrow="Certificates"
        title="Credentials that support my technical knowledge and continuous learning."
        description="A collection of verified certificates, professional courses, and technical achievements."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={`${certificate.title}-${certificate.issuer}`}
            certificate={certificate}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Certificates;
