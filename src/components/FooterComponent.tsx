import * as React from "react";

export default function FooterComponent() {
  return (
    <footer className="flex items-center justify-between p-4 text-white bg-[#c62368] h-[10vh]">
      <p>© {new Date().getFullYear()} Bröli inc</p>
    </footer>
  );
}
