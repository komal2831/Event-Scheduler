import './styles/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
// Event Scheduler Futer part
    <html lang="en">
      <body>
        <div>
          <header>
            <h1>Event Scheduler</h1>
          </header>
          <main>{children}</main>
          <footer>
            <p>&copy; 2024 Event Scheduler</p>
          </footer>
        </div></body>
    </html>
  );
}

