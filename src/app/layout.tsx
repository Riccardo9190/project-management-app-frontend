import type { Metadata } from 'next';
import Head from 'next/head';

import './globals.css';

export const metadata: Metadata = {
  title: 'Project Management App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Project Management App" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{metadata.title as React.ReactNode}</title>
      </Head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
