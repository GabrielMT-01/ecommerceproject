import { Carter_One, Roboto, Geist } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css"
import { cn } from "@/lib/utils";


const carterOne = Carter_One({
  weight: "400",
  variable: "--font-carter",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", carterOne.variable, roboto.variable)}
    >
      <body className="min-h-full flex flex-col ">
        <Header />
        {children}
      </body>
    </html>
  );
}
