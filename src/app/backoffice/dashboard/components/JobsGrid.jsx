import React from "react";

const JobsGrid = () => {
	// Dummy job data
	const jobs = [
		{ id: 1, title: "Software Engineer", location: "Nairobi" },
		{ id: 2, title: "Product Manager", location: "Mombasa" },
		{ id: 3, title: "UI/UX Designer", location: "Kisumu" },
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{jobs.map((job) => (
				<div
					key={job.id}
					className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
				>
					<h3 className="text-lg font-semibold text-navy-800">{job.title}</h3>
					<p className="text-gray-500">{job.location}</p>
					<button className="mt-4 text-gold-600 hover:underline text-sm">
						View Details
					</button>
				</div>
			))}
		</div>
	);
};

export default JobsGrid;
