import React from "react";

const ActionBar = () => {
	return (
		<div className="flex items-center justify-between mb-6">
			<div className="flex items-center space-x-2">
				<button className="bg-primary  text-black px-4 py-2 rounded-button flex items-center whitespace-nowrap">
					<i className="ri-add-line mr-1"></i>
					<span>Create Job</span>
				</button>

				<button className="bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded-button flex items-center whitespace-nowrap">
					<i className="ri-filter-3-line mr-1"></i>
					<span>Filter</span>
				</button>

				<button className="bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded-button flex items-center whitespace-nowrap">
					<i className="ri-sort-desc mr-1"></i>
					<span>Sort</span>
				</button>
			</div>

			<div className="flex items-center space-x-2">
				<button className="bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded-button flex items-center whitespace-nowrap">
					<i className="ri-download-line mr-1"></i>
					<span>Export</span>
				</button>

				<div className="flex border border-gray-300 rounded-button overflow-hidden">
					<button className="bg-white text-gray-700 px-3 py-2 flex items-center justify-center border-r border-gray-300">
						<i className="ri-table-line"></i>
					</button>
					<button className="bg-primary  text-black px-3 py-2 flex items-center justify-center">
						<i className="ri-layout-grid-line"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ActionBar;
