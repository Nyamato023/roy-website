import React from "react";

const About = () => {
	return (
		// Wrap everything inside a fragment <>...</>
		<>
			{/* About Section */}
			<section
				id="about"
				className="relative py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50"
			>
				{/* faint texture */}
				<div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-purple-100 to-white"></div>
				<div className="relative max-w-7xl mx-auto px-6">
					<div className="flex flex-col md:flex-row gap-16 items-center">
						{/* Image */}
						<div className="md:w-1/2">
							<div className="relative">
								<div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
									<img
										src="/api/placeholder/600/500"
										alt="Office"
										className="w-full"
									/>
								</div>
								<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200/30 rounded-xl"></div>
							</div>
						</div>

						{/* Text */}
						<div className="md:w-1/2">
							<h2 className="inline-block text-sm font-semibold px-4 py-1 rounded-full bg-gradient-to-r from-pink-100 to-yellow-100 text-pink-700 mb-4">
								Our Story
							</h2>
							<h3 className="text-3xl font-bold mb-6 text-gray-900">
								A Decade of Excellence in Global Recruitment
							</h3>
							<p className="text-gray-600 mb-6">
								Founded in 2013, ROY Global has been a pioneer in connecting
								qualified professionals with prestigious employment
								opportunities across the Arab world. Our deep understanding of
								cultural nuances and strong relationships with employers has
								made us a trusted partner for job seekers looking to advance
								their careers internationally.
							</p>

							{/* Features Grid with 4 unique pastel hues */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
								{[
									{
										num: "01",
										title: "Licensed Agency",
										desc: "Fully accredited with all government clearances",
										colors: "from-purple-100 to-purple-200",
										text: "purple-700",
									},
									{
										num: "02",
										title: "Secure Process",
										desc: "End-to-end document management and protection",
										colors: "from-indigo-100 to-indigo-200",
										text: "indigo-700",
									},
									{
										num: "03",
										title: "Cultural Training",
										desc: "Comprehensive orientation for working abroad",
										colors: "from-pink-100 to-pink-200",
										text: "pink-700",
									},
									{
										num: "04",
										title: "Local Support",
										desc: "Network of agents for personalized assistance",
										colors: "from-teal-100 to-teal-200",
										text: "teal-700",
									},
								].map(({ num, title, desc, colors, text }) => (
									<div key={num} className="flex items-start">
										<div
											className={`w-12 h-12 rounded-full bg-gradient-to-tr ${colors} flex items-center justify-center mr-4 text-${text} font-medium`}
										>
											{num}
										</div>
										<div>
											<h4 className="font-semibold text-gray-900 mb-1">
												{title}
											</h4>
											<p className="text-gray-600 text-sm">{desc}</p>
										</div>
									</div>
								))}
							</div>

							<button className="flex items-center font-medium text-gray-900 hover:text-gray-700 transition">
								Learn more about our history
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 ml-2 text-indigo-600"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
