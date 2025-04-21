// src/app/backoffice/dashboard/layout.jsx
import React from "react";
import Sidebar from "./components/Sidebar";
import TopNavigation from "./components/TopNavigation";

const DashboardLayout = ({ children }) => {
	return (
		<div className="flex min-h-screen">
			<Sidebar />
			<div className="flex-1 flex flex-col">
				<TopNavigation />
				<main className="p-6">{children}</main>
			</div>
		</div>
	);
};

export default DashboardLayout;
