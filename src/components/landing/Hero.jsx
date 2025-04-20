// src/components/landing/Hero.jsx
import React from "react";

const Hero = () => {
	return (
		<section className="relative bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-900">
			{/* Soft gradient overlay */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-white"></div>
			</div>

			<div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center">
				{/* Left Column */}
				<div className="md:w-1/2 z-10 mb-12 md:mb-0">
					<div className="inline-block bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
						Trusted for Over a Decade
					</div>
					<h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
						Connecting Talent with Opportunities Across the World for a Decade
					</h1>
					<p className="text-lg text-gray-600 mb-8">
						Specializing in overseas job placement to Arab countries with
						comprehensive support from application to placement.
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-medium px-6 py-3 rounded-md transition">
							Find Opportunities
						</button>
						<button className="bg-gradient-to-r from-white to-white hover:from-gray-100 hover:to-gray-100 border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-md transition">
							Contact an Agent
						</button>
					</div>
					{/* Trust Indicators */}
					<div className="mt-12 flex flex-wrap gap-6">
						{[
							{ value: "10+", label: "Years of Experience" },
							{ value: "5K+", label: "Successful Placements" },
							{ value: "8+", label: "Arab Countries" },
						].map(({ value, label }) => (
							<div key={label} className="flex items-center">
								<div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mr-3">
									<span className="text-purple-600 text-xl font-bold">
										{value}
									</span>
								</div>
								<div>
									<div className="text-sm text-gray-500">
										{label.split(" ")[0]}
									</div>
									<div className="font-medium">
										{label.split(" ").slice(1).join(" ")}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
