"use client"; // If you're using app/ directory in Next 13/14

import React from "react";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";

const Sidebar = () => {
	return (
		<div className="flex h-screen">
			{/* Sidebar */}
			<div
				id="sidebar"
				className="sidebar fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm"
			>
				<div className="p-4 flex items-center justify-between border-b border-gray-200">
					<div className="flex items-center">
						<span className="text-2xl font-['Pacifico'] text-primary">
							logo
						</span>
						<span className="ml-2 text-gray-800 font-semibold text-lg sidebar-text">
							Recruit Pro
						</span>
					</div>
					<button
						id="toggle-sidebar"
						className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
					>
						<i className="ri-menu-fold-line ri-lg"></i>
					</button>
				</div>

				<div className="overflow-y-auto flex-grow">
					<div className="py-4">
						<div className="px-4 mb-2 text-xs font-medium text-gray-500 uppercase tracking-wider sidebar-text">
							Main
						</div>
						<Link
							href="/backoffice/dashboard"
							className="nav-link flex items-center px-4 py-3 text-gray-700"
						>
							<div className="w-6 h-6 flex items-center justify-center mr-3 icon">
								<i className="ri-dashboard-line"></i>
							</div>
							<span className="text-sm sidebar-text">Dashboard</span>
						</Link>

						<div className="px-4 mt-6 mb-2 text-xs font-medium text-gray-500 uppercase tracking-wider sidebar-text">
							Recruitment
						</div>
						{/* <Link
							href="/backoffice/jobs"
							className="nav-link active flex items-center px-4 py-3 text-gray-700"
						>
							<div className="w-6 h-6 flex items-center justify-center mr-3 icon">
								<i className="ri-briefcase-line"></i>
							</div>
							<span className="text-sm sidebar-text">Jobs Management</span>
						</Link> */}
						<Link
							href="/backoffice/candidates"
							className="nav-link flex items-center px-4 py-3 text-gray-700"
						>
							<div className="w-6 h-6 flex items-center justify-center mr-3 icon">
								<i className="ri-user-search-line"></i>
							</div>
							<span className="text-sm sidebar-text">
								Candidates Management
							</span>
						</Link>
						<Link
							href="/backoffice/applications"
							className="nav-link flex items-center px-4 py-3 text-gray-700"
						>
							<div className="w-6 h-6 flex items-center justify-center mr-3 icon">
								<i className="ri-file-list-3-line"></i>
							</div>
							<span className="text-sm sidebar-text">
								Applications Management
							</span>
						</Link>
						<Link
							href="/backoffice/visa-cases"
							className="nav-link flex items-center px-4 py-3 text-gray-700"
						>
							<div className="w-6 h-6 flex items-center justify-center mr-3 icon">
								<i className="ri-passport-line"></i>
							</div>
							<span className="text-sm sidebar-text">Visa Cases</span>
						</Link>

						<div className="px-4 mt-6 mb-2 text-xs font-medium text-gray-500 uppercase tracking-wider sidebar-text">
							Tools
						</div>
						<Link
							href="/backoffice/document-editor"
							className="nav-link flex items-center px-4 py-3 text-gray-700"
						>
							<div className="w-6 h-6 flex items-center justify-center mr-3 icon">
								<i className="ri-file-edit-line"></i>
							</div>
							<span className="text-sm sidebar-text">Document Editor</span>
						</Link>
						<Link
							href="/backoffice/communication-center"
							className="nav-link flex items-center px-4 py-3 text-gray-700"
						>
							<div className="w-6 h-6 flex items-center justify-center mr-3 icon">
								<i className="ri-message-2-line"></i>
							</div>
							<span className="text-sm sidebar-text">Communication Center</span>
						</Link>
						<Link
							href="/backoffice/reports-analytics"
							className="nav-link flex items-center px-4 py-3 text-gray-700"
						>
							<div className="w-6 h-6 flex items-center justify-center mr-3 icon">
								<i className="ri-bar-chart-line"></i>
							</div>
							<span className="text-sm sidebar-text">Reports & Analytics</span>
						</Link>

						<div className="px-4 mt-6 mb-2 text-xs font-medium text-gray-500 uppercase tracking-wider sidebar-text">
							Configuration
						</div>
						<Link
							href="/backoffice/settings"
							className="nav-link flex items-center px-4 py-3 text-gray-700"
						>
							<div className="w-6 h-6 flex items-center justify-center mr-3 icon">
								<i className="ri-settings-line"></i>
							</div>
							<span className="text-sm sidebar-text">Settings</span>
						</Link>
					</div>
				</div>

				<div className="p-4 border-t border-gray-200">
					<div className="flex items-center">
						<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
							<i className="ri-user-line ri-lg text-gray-600"></i>
						</div>
						<div className="ml-3 sidebar-text">
							<p className="text-sm font-medium text-gray-800">
								Emily Robertson
							</p>
							<p className="text-xs text-gray-500">HR Manager</p>
						</div>
						<div className="ml-auto">
							<button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
								<i className="ri-logout-box-line"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
