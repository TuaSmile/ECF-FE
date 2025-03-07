import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

// Type for page layout
interface LayoutProps {
  children: ReactNode;
}

const Leads = () => {
  return (
    <div className="content-container">
      <h1 className="page-header">Leads Page - Coming Soon</h1>
      <p className="text-center">This page will be implemented soon.</p>
    </div>
  );
};

// Define the layout for this page
Leads.getLayout = (page: ReactNode) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar Component */}
        <Navbar tab="Leads" />
        
        {/* Main Page Content */}
        <main className="flex-1 p-6">{page}</main>
      </div>
    </div>
  );
};

export default Leads;
