import { EB_Garamond } from "next/font/google";
import "../../globals.css";

const ebg = EB_Garamond({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ebg.className}>{children}</body>
    </html>
  );
}
