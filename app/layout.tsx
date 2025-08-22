export const metadata = { title: "David Silgado | Artista cristiano", description: "Canciones que levantan fe y esperanza." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
