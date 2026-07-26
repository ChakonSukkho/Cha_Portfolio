function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-8">
      <div className="section-container flex flex-col items-center gap-5 text-center text-sm text-slate-500 sm:flex-row sm:justify-between sm:text-left">
        <p>© 2026 Chakon A/L Eh Cheh. Built with React and Tailwind CSS.</p>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-end" aria-label="Footer navigation">
          <a className="min-h-11 py-3 transition hover:text-cyan-200" href="#home">Home</a>
          <a className="min-h-11 py-3 transition hover:text-cyan-200" href="#projects">Projects</a>
          <a className="min-h-11 py-3 transition hover:text-cyan-200" href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
