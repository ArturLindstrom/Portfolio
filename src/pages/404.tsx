import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-5xl font-bold text-white">404</h1>
        <p className="text-2xl font-semibold text-white">Page not found</p>
        <Link to="/" className="mt-4 text-5xl font-bold text-white underline">
          Back To Home
        </Link>
      </div>
    </Layout>
  );
}
