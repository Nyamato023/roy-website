// src/components/landing/TrustedBy.jsx
import React from "react";

const TrustedBy = () => {
	return (
		<section className="bg-gray-50 py-12">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-8">
					<h3 className="text-lg font-medium text-gray-700">
						Trusted By Leading Companies Across the Middle East
					</h3>
				</div>
				<div className="flex flex-wrap justify-center gap-10 opacity-70">
					{Array.from({ length: 6 }).map((_, idx) => (
						<div
							key={idx}
							className="w-32 h-12 flex items-center justify-center"
						>
							<div className="text-gray-400">Partner Logo</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TrustedBy;
