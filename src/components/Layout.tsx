import * as React from "react";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import Seo from "./Seo";

interface props {
  title?: string;
  description?: string;
  image?: string;
  siteUrl?: string;
  children: React.ReactNode;
}

export default function Layout({
  children,
  title,
  description,
  image,
  siteUrl,
}: props) {
  return (
    <>
      <Seo
        title={title}
        description={description}
        image={image}
        siteUrl={siteUrl}
      />
      <HeaderComponent />
      <main className=" min-h-[80vh] bg-slate-900  flex flex-col items-center">
        {children}
      </main>
      <FooterComponent />
    </>
  );
}
