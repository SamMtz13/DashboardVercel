import "@/app/ui/global.css"; /* Se importan los estilos */
import { inter } from "@/app/ui/fonts"; /* Se importa la fuente Inter de Google Fonts */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={" ${inter.classname} antialiased"}>{children}</body>
    </html>
  );
}
