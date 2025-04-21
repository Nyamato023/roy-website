// src/app/backoffice/applications/page.jsx

import React from "react";

const ApplicationsPage = () => {
	return (
		<div className="p-6">
			<h1 className="text-2xl font-semibold text-gray-800 mb-6">
				Applications Management
			</h1>
			<div className="bg-white rounded-xl shadow-md p-6 text-gray-700">
				<p>
					Manage all candidate applications here. Filter, sort, and review
					submitted applications.
				</p>
			</div>
		</div>
	);
};

export default ApplicationsPage;
