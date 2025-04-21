// src/app/backoffice/candidates/page.jsx

import React from "react";

const candidates = [
	{
		id: 1,
		name: "John Doe",
		email: "johndoe@email.com",
		phone: "+123456789",
		status: "Shortlisted",
		appliedDate: "2025-04-20",
	},
	{
		id: 2,
		name: "Jane Smith",
		email: "janesmith@email.com",
		phone: "+987654321",
		status: "Interview Scheduled",
		appliedDate: "2025-04-18",
	},
	{
		id: 3,
		name: "Mark Johnson",
		email: "markj@email.com",
		phone: "+111222333",
		status: "Rejected",
		appliedDate: "2025-04-15",
	},
	// Add more dummy candidates if you want
];

const CandidatesPage = () => {
	return (
		<div className="p-6">
			<h1 className="text-2xl font-semibold text-gray-800 mb-6">
				Candidates Management
			</h1>

			<div className="overflow-x-auto bg-white rounded-xl shadow-md">
				<table className="min-w-full text-sm text-gray-700">
					<thead className="bg-gray-100 text-xs uppercase text-gray-500">
						<tr>
							<th className="px-6 py-4 text-left">Name</th>
							<th className="px-6 py-4 text-left">Email</th>
							<th className="px-6 py-4 text-left">Phone</th>
							<th className="px-6 py-4 text-left">Status</th>
							<th className="px-6 py-4 text-left">Applied Date</th>
							<th className="px-6 py-4"></th>
						</tr>
					</thead>
					<tbody>
						{candidates.map((candidate) => (
							<tr key={candidate.id} className="border-b hover:bg-gray-50">
								<td className="px-6 py-4 whitespace-nowrap">
									{candidate.name}
								</td>
								<td className="px-6 py-4">{candidate.email}</td>
								<td className="px-6 py-4">{candidate.phone}</td>
								<td className="px-6 py-4">
									<span
										className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
											candidate.status === "Shortlisted"
												? "bg-green-100 text-green-700"
												: candidate.status === "Rejected"
													? "bg-red-100 text-red-700"
													: "bg-blue-100 text-blue-700"
										}`}
									>
										{candidate.status}
									</span>
								</td>
								<td className="px-6 py-4">{candidate.appliedDate}</td>
								<td className="px-6 py-4 text-right">
									<button className="text-primary hover:underline text-sm">
										View
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default CandidatesPage;
