import React from "react";
import ActionBar from "./components/ActionBar";
import JobsGrid from "./components/JobsGrid";
import Pagination from "./components/Pagination";

const DashboardPage = () => {
	return (
		<div className="bg-white flex flex-col gap-6">
			<ActionBar />
			<JobsGrid />
			<Pagination />
		</div>
	);
};

export default DashboardPage;
