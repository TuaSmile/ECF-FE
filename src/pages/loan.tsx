import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { ReactNode } from "react";

export default function Loan() {
  return (
    <main className="flex flex-col items-center justify-center h-full p-6 bg-gray-50 text-gray-800">
      <div className="bg-white shadow rounded-lg p-8 w-full max-w-4xl text-center">
        <h1 className="text-2xl font-semibold">Loan Page</h1>
        <p className="text-gray-600 mt-4">This page will be implemented soon.</p>
      </div>
    </main>
  );
}

Loan.getLayout = (page: ReactNode) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content wrapper */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Navbar */}
        <Navbar tab="Loan" />

        {/* Page content */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
          {page}
        </div>
      </div>
    </div>
  );
};