import React from "react";

const Pagination = () => {
	return (
		<div class="mt-8 flex items-center justify-between">
			<div class="text-sm text-gray-600">
				Showing <span class="font-medium">1-6</span> of{" "}
				<span class="font-medium">24</span> jobs
			</div>

			<div class="flex items-center space-x-2">
				<button
					class="w-9 h-9 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
					disabled
				>
					<i class="ri-arrow-left-s-line"></i>
				</button>

				<button class="w-9 h-9 flex items-center justify-center rounded border border-primary bg-primary text-white">
					1
				</button>

				<button class="w-9 h-9 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
					2
				</button>

				<button class="w-9 h-9 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
					3
				</button>

				<button class="w-9 h-9 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
					4
				</button>

				<button class="w-9 h-9 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
					<i class="ri-arrow-right-s-line"></i>
				</button>
			</div>
		</div>
	);
};

export default Pagination;
