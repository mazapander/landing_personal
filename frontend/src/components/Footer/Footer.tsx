export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>&copy; {year} Ander Fernández</p>
      <p style={{ marginTop: '0.25rem' }}>
        <a
          href="https://anderdata.es"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          anderdata.es
        </a>
      </p>
    </footer>
  )
}