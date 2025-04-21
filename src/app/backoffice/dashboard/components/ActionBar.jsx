import React from "react";

const ActionBar = () => {
	return (
		<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
			<div>
				<input
					type="text"
					placeholder="Search jobs..."
					className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-80"
				/>
			</div>
			<div className="flex gap-4">
				<button className="bg-navy-800 hover:bg-navy-900 text-white px-4 py-2 rounded-md transition">
					Add Job
				</button>
				<button className="border border-navy-800 text-navy-800 hover:bg-navy-100 px-4 py-2 rounded-md transition">
					Filter
				</button>
			</div>
		</div>
	);
};

export default ActionBar;
