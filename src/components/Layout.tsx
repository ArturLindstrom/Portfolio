import * as React from "react";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import Seo from "./Seo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Seo />
      <HeaderComponent />
      <main className=" min-h-[80vh] bg-slate-900 pt-6 flex flex-col items-center">
        {children}
      </main>
      <FooterComponent />
    </>
  );
}
