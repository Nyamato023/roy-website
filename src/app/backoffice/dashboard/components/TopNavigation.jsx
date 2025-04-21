import React from "react";

const TopNavigation = () => {
	return (
		<header className="w-full bg-white shadow px-6 py-4 flex items-center justify-between">
			<div className="text-xl font-semibold text-navy-800">Dashboard</div>
			<div className="flex items-center gap-4">
				<button className="text-gray-600 hover:text-gold-500 transition">
					🔔
				</button>
				<div className="w-8 h-8 bg-gray-300 rounded-full"></div>{" "}
				{/* Avatar placeholder */}
			</div>
		</header>
	);
};

export default TopNavigation;
