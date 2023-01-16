import * as React from "react";

export default function FooterComponent() {
  return (
    <footer className="flex items-center justify-between p-4 bg-primary h-[10vh]">
      <p className="text-lg font-bold text-slate-200">
        © {new Date().getFullYear()} Bröli inc
      </p>
    </footer>
  );
}
