export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-16">
      <div className="container py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-black/70">© {new Date().getFullYear()} Sara • Data Analyst</p>
        <div className="flex items-center gap-4">
          <a
            className="hover:text-primary"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-primary"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}


