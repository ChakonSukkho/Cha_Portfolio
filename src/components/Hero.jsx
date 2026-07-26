import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import LanyardCard from './LanyardCard.jsx';

const ThreeLanyardCard = lazy(() => import('./ThreeLanyardCard.jsx'));

function Hero() {
  return (
    <section id="home" className="section-container relative flex min-h-screen items-center pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-32">
      <div className="grid w-full min-w-0 items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-8 xl:gap-14">
        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Portfolio 2026</span>
          <h1 className="responsive-heading max-w-4xl font-black tracking-tight text-white">
            Hi, I am <span className="gradient-text">CHAKON A/L EH CHEH</span>
          </h1>
          <p className="mt-5 text-xl font-semibold text-cyan-100 sm:text-2xl">Junior Software Engineer</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Junior software engineer with hands-on experience designing, developing, testing, deploying, and
            troubleshooting responsive business web applications.
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
            <a href="#projects" className="primary-button">
              View Projects <FaArrowRight />
            </a>
            <a href={`${import.meta.env.BASE_URL}chakon-resume.pdf`} className="secondary-button" download>
              Download Resume <FaDownload />
            </a>
            <a href="#contact" className="secondary-button">
              Contact Me <FaEnvelope />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a
              href="https://github.com/ChakonSukkho"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Chakon GitHub profile"
              className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-xl text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:text-cyan-200"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/chakonsukkho"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Chakon LinkedIn profile"
              className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-xl text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:text-cyan-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/chakonsukkho/"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Chakon Instagram profile"
              className="grid h-12 w-12 place-items-center rounded-2xl border border-pink-400/25 bg-pink-500/10 text-xl text-pink-300 transition hover:-translate-y-1 hover:border-pink-400/60 hover:bg-pink-500/15 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <Suspense fallback={<LanyardCard />}>
            <ThreeLanyardCard />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
