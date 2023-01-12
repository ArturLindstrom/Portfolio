import * as React from "react";

export default function FooterComponent() {
  return (
    <footer className="flex items-center justify-between p-4 text-slate-200 bg-primary h-[10vh]">
      <p className="font-bold">© {new Date().getFullYear()} Bröli inc</p>
    </footer>
  );
}
