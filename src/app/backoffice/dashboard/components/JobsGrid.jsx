import React from "react";

const JobsGrid = () => {
	// Extended job data
	const jobs = [
		{
			id: 1,
			title: "Software Engineer",
			department: "Engineering",
			location: "Nairobi",
			salary: "$100K - $130K",
			type: "Full-time",
			status: "Open",
			posted: "2 days ago",
			applicants: 24,
		},
		{
			id: 2,
			title: "Product Manager",
			department: "Product",
			location: "Mombasa",
			salary: "$90K - $110K",
			type: "Full-time",
			status: "Open",
			posted: "5 days ago",
			applicants: 18,
		},
		{
			id: 3,
			title: "UI/UX Designer",
			department: "Design",
			location: "Kisumu",
			salary: "$85K - $105K",
			type: "Full-time",
			status: "Closed",
			posted: "1 week ago",
			applicants: 32,
		},
		{
			id: 4,
			title: "Data Scientist",
			department: "Analytics",
			location: "Remote",
			salary: "$110K - $140K",
			type: "Full-time",
			status: "Open",
			posted: "3 days ago",
			applicants: 12,
		},
		{
			id: 5,
			title: "DevOps Engineer",
			department: "Engineering",
			location: "Eldoret",
			salary: "$95K - $120K",
			type: "Full-time",
			status: "Open",
			posted: "1 day ago",
			applicants: 10,
		},
		{
			id: 6,
			title: "Content Writer",
			department: "Marketing",
			location: "Nakuru",
			salary: "$50K - $70K",
			type: "Part-time",
			status: "Open",
			posted: "6 days ago",
			applicants: 7,
		},
		{
			id: 7,
			title: "HR Manager",
			department: "Human Resources",
			location: "Nairobi",
			salary: "$75K - $95K",
			type: "Full-time",
			status: "Closed",
			posted: "2 weeks ago",
			applicants: 15,
		},
		{
			id: 8,
			title: "Business Analyst",
			department: "Finance",
			location: "Mombasa",
			salary: "$85K - $100K",
			type: "Full-time",
			status: "Open",
			posted: "4 days ago",
			applicants: 9,
		},
		{
			id: 9,
			title: "IT Support Specialist",
			department: "IT",
			location: "Kisii",
			salary: "$45K - $60K",
			type: "Full-time",
			status: "Open",
			posted: "5 days ago",
			applicants: 5,
		},
		{
			id: 10,
			title: "Sales Executive",
			department: "Sales",
			location: "Thika",
			salary: "$40K - $55K",
			type: "Full-time",
			status: "Open",
			posted: "2 days ago",
			applicants: 13,
		},
		{
			id: 11,
			title: "Graphic Designer",
			department: "Design",
			location: "Remote",
			salary: "$60K - $80K",
			type: "Contract",
			status: "Closed",
			posted: "1 month ago",
			applicants: 20,
		},
		{
			id: 12,
			title: "Operations Manager",
			department: "Operations",
			location: "Machakos",
			salary: "$90K - $120K",
			type: "Full-time",
			status: "Open",
			posted: "5 days ago",
			applicants: 8,
		},
	];

	return (
		<div className="w-full px-4 sm:px-6 lg:px-8">
			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{jobs.map((job) => (
					<div
						key={job.id}
						className="card bg-white rounded shadow-sm border border-gray-100 overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg"
					>
						<div className="p-5">
							<div className="flex items-center justify-between mb-4">
								<span
									className={`px-2 py-1 text-xs font-semibold rounded-full ${
										job.status === "Open"
											? "bg-green-100 text-green-700"
											: "bg-red-100 text-red-700"
									}`}
								>
									{job.status}
								</span>
								<div className="flex items-center">
									<button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
										<i className="ri-star-line"></i>
									</button>
									<button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
										<i className="ri-more-2-fill"></i>
									</button>
								</div>
							</div>

							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								{job.title}
							</h3>
							<p className="text-gray-600 text-sm mb-4">
								{job.department} Department • {job.type}
							</p>

							<div className="flex items-center text-sm text-gray-500 mb-4">
								<div className="flex items-center mr-4">
									<i className="ri-map-pin-line mr-1"></i>
									<span>{job.location}</span>
								</div>
								<div className="flex items-center">
									<i className="ri-money-dollar-circle-line mr-1"></i>
									<span>{job.salary}</span>
								</div>
							</div>

							<div className="flex items-center justify-between text-sm">
								<div className="flex items-center text-gray-500">
									<i className="ri-time-line mr-1"></i>
									<span>
										{job.status === "Closed"
											? `Closed ${job.posted}`
											: `Posted ${job.posted}`}
									</span>
								</div>
								<div className="text-indigo-600 flex items-center text-primary">
									<span className="font-medium">
										{job.applicants} applicants
									</span>
								</div>
							</div>
						</div>

						<div className="border-t border-gray-100 px-5 py-3 bg-gray-50 flex justify-between">
							<button className="text-gray-600 text-sm hover:text-primary flex items-center">
								<i className="ri-edit-line mr-1"></i>
								<span>Edit</span>
							</button>
							<button className="text-gray-600 text-sm hover:text-primary flex items-center">
								<i className="ri-eye-line mr-1"></i>
								<span>View</span>
							</button>
							<button className="text-gray-600 text-sm hover:text-primary flex items-center">
								<i className="ri-user-add-line mr-1"></i>
								<span>Applicants</span>
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default JobsGrid;
