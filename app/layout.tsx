// // app/layout.tsx
// import './globals.css'; // Ensure to include global styles

// export const metadata = {
//   title: 'Interactive Event Scheduler',
//   description: 'An interactive event scheduler application built with Next.js and React.',
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         {children}
//       </body>
//     </html>
//   );
// }

// app/layout.tsx
import './styles/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (

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

