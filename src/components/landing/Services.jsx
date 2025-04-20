import React from "react";

const Services = () => {
	return (
		<>
			{/* Services Section */}
			<section
				id="services"
				className="relative py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50"
			>
				<div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-purple-100 to-white"></div>
				<div className="relative max-w-7xl mx-auto px-6">
					{/* Header */}
					<div className="text-center mb-16">
						<h2 className="inline-block text-sm font-semibold px-4 py-1 rounded-full bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-700 mb-4">
							Our Services
						</h2>
						<h3 className="text-3xl font-bold mb-6 text-gray-900">
							Comprehensive Support at Every Step
						</h3>
						<p className="text-gray-600 max-w-3xl mx-auto">
							We offer end-to-end assistance to make your overseas job
							application smooth and successful, with local agents guiding you
							through the entire process.
						</p>
					</div>

					{/* Service Cards with different accent gradients */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								title: "Job Placement",
								desc: "We match your skills and experience with suitable job opportunities in Arab countries, ensuring your qualifications align with employer requirements.",
								gradient: "from-purple-100 to-purple-200",
								iconColor: "purple-600",
								svg: (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								),
							},
							{
								title: "Visa Assistance",
								desc: "Our experts handle visa applications, ensuring all documentation meets specific requirements for your destination country with dedicated follow-up.",
								gradient: "from-indigo-100 to-indigo-200",
								iconColor: "indigo-600",
								svg: (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								),
							},
							{
								title: "Cultural Training",
								desc: "Pre-departure orientation covering cultural norms, workplace expectations, and practical tips for adapting to life in Arab countries.",
								gradient: "from-pink-100 to-pink-200",
								iconColor: "pink-600",
								svg: (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								),
							},
						].map(({ title, desc, gradient, iconColor, svg }) => (
							<div
								key={title}
								className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
							>
								<div
									className={`w-14 h-14 bg-gradient-to-tr ${gradient} rounded-xl flex items-center justify-center mb-6`}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className={`h-6 w-6 text-${iconColor}`}
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										{svg}
									</svg>
								</div>
								<h4 className="text-xl font-semibold mb-3 text-gray-900">
									{title}
								</h4>
								<p className="text-gray-600 mb-6">{desc}</p>
								<a
									href="#"
									className={`font-medium text-${iconColor} hover:text-${iconColor.replace(
										"-600",
										"-800"
									)} transition flex items-center`}
								>
									Learn more
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 ml-1"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</a>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
