import { ReactNode } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

export default function PageLayout({ children }: { children: ReactNode }) {
   return (
      <>
         <Navbar />
         {children}
         <Footer />
      </>
   )
}