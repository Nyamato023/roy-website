import React from "react";
import Link from "next/link";

const Sidebar = () => {
	return (
		<aside className="w-64 bg-navy-800 text-white min-h-screen p-6 hidden md:block">
			<div className="text-2xl font-bold mb-8">BackOffice</div>
			<nav className="flex flex-col gap-4">
				<Link
					href="/backoffice/dashboard"
					className="hover:text-gold-500 transition"
				>
					Dashboard
				</Link>
				<Link
					href="/backoffice/jobs"
					className="hover:text-gold-500 transition"
				>
					Jobs
				</Link>
				<Link
					href="/backoffice/settings"
					className="hover:text-gold-500 transition"
				>
					Settings
				</Link>
			</nav>
		</aside>
	);
};

export default Sidebar;
