import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaShieldAlt } from 'react-icons/fa';
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
      {certificate.image && (
        <div className="aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-950/35">
          <img
            src={certificate.image}
            alt={`${certificate.title} certificate`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6 sm:p-7">
        <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-xl text-cyan-200">
          <FaAward aria-hidden="true" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
          {certificate.issued}
        </p>
        <h3 className="mt-3 text-2xl font-black text-white">{certificate.title}</h3>
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
            className="secondary-button mt-6"
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

      {certificates.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={`${certificate.title}-${certificate.issuer}`}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>
      ) : (
        <motion.div
          className="glass-card relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl" aria-hidden="true" />
          <div className="relative z-10">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-3xl border border-cyan-300/20 bg-cyan-300/10 text-3xl text-cyan-200">
              <FaShieldAlt aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-2xl font-black text-white">Certificates coming soon</h3>
            <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-400">
              Verified credential details and certificate previews are being prepared for this collection.
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
}

export default Certificates;
