import { Providers } from './providers';
import './reset.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
