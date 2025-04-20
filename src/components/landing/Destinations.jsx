import React from "react";

const Destinations = () => {
	return (
		<>
			{/* Destinations Section */}
			<section
				id="destinations"
				className="relative py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50"
			>
				{/* subtle texture overlay */}
				<div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-purple-100 to-white" />

				<div className="relative max-w-7xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="inline-block text-sm font-semibold px-4 py-1 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 mb-4">
							Our Destinations
						</h2>
						<h3 className="text-3xl font-bold mb-6 text-gray-900">
							Opportunities Across the Arab World
						</h3>
						<p className="text-gray-600 max-w-3xl mx-auto">
							We have established partnerships with leading employers in
							multiple Arab countries, offering diverse opportunities for
							skilled professionals.
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{[
							{ country: "UAE", jobs: "1,200+", flag: "🇦🇪" },
							{ country: "Qatar", jobs: "850+", flag: "🇶🇦" },
							{ country: "Saudi Arabia", jobs: "1,800+", flag: "🇸🇦" },
							{ country: "Kuwait", jobs: "620+", flag: "🇰🇼" },
							{ country: "Bahrain", jobs: "450+", flag: "🇧🇭" },
							{ country: "Oman", jobs: "380+", flag: "🇴🇲" },
							{ country: "Jordan", jobs: "290+", flag: "🇯🇴" },
							{ country: "Egypt", jobs: "520+", flag: "🇪🇬" },
						].map((dest, idx) => {
							const borders = [
								"border-purple-200",
								"border-indigo-200",
								"border-pink-200",
								"border-teal-200",
							];
							return (
								<div
									key={idx}
									className={`bg-white p-6 rounded-xl shadow-sm transition hover:shadow-md text-center border-t-4 ${borders[idx % borders.length]}`}
								>
									<div className="text-4xl mb-4">{dest.flag}</div>
									<h4 className="text-lg font-semibold mb-1 text-gray-900">
										{dest.country}
									</h4>
									<p className="text-gray-600 text-sm">
										{dest.jobs} available positions
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Destinations;
