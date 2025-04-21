import React from "react";

const Pagination = () => {
	return (
		<div className="flex justify-center items-center gap-2 mt-6">
			<button className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100">
				Previous
			</button>
			<button className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100">
				1
			</button>
			<button className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100">
				2
			</button>
			<button className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100">
				3
			</button>
			<button className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100">
				Next
			</button>
		</div>
	);
};

export default Pagination;
