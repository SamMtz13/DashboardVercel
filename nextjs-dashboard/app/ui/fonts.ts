import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] }); // Se importa la fuente Inter de Google Fonts con el subconjunto latin para soportar caracteres especiales en español
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
