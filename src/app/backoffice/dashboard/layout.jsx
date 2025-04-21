// src/app/backoffice/dashboard/layout.jsx
import React from "react";
import Sidebar from "./components/Sidebar";
import TopNavigation from "./components/TopNavigation";

const DashboardLayout = ({ children }) => {
	return (
		<div className="flex min-h-screen">
			{/* Sidebar */}
			<Sidebar />

			{/* Main Content Area */}
			<div className="bg-white flex-1 flex flex-col ml-64">
				{" "}
				{/* ml-64 pushes content to the right */}
				{/* Top Navigation */}
				<TopNavigation />
				{/* Main Content */}
				<main className="p-6">{children}</main>
			</div>
		</div>
	);
};

export default DashboardLayout;
