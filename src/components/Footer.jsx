import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Tadimalla Bhavani</span>
      <span>Built with React · Java · Python · AI · <a href="https://github.com/Bhavani-2005" target="_blank" rel="noreferrer">GitHub ↗</a></span>
    </footer>
  );
}
