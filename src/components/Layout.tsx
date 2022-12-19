import * as React from "react";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderComponent />
      <main className=" min-h-[80vh] bg-slate-900">{children}</main>
      <FooterComponent />
    </>
  );
}
