import React from "react";

const TopNavigation = () => {
	return (
		<div className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between sticky top-0 z-10 shadow-sm">
			<div>
				<h1 className="text-xl font-semibold text-gray-800">Jobs Management</h1>
				<p className="text-sm text-gray-500">
					Manage all job postings and vacancies
				</p>
			</div>

			<div className="flex items-center space-x-4">
				<div className="relative">
					<input
						type="text"
						placeholder="Search..."
						className="search-input pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:border-primary w-64"
					/>
					<div className="absolute left-3 top-2.5 text-gray-400">
						<i className="ri-search-line"></i>
					</div>
				</div>

				<button className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">
					<i className="ri-notification-3-line text-gray-600"></i>
					<span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
						3
					</span>
				</button>

				<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">
					<i className="ri-question-line text-gray-600"></i>
				</button>
			</div>
		</div>
	);
};

export default TopNavigation;
