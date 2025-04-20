import React from "react";

const Success = () => {
	return (
		<>
			{/* Success Stories */}
			<section
				id="success"
				className="relative py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50"
			>
				<div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-purple-100 to-white" />

				<div className="relative max-w-7xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="inline-block text-sm font-semibold px-4 py-1 rounded-full bg-gradient-to-r from-pink-100 to-yellow-100 text-pink-700 mb-4">
							Success Stories
						</h2>
						<h3 className="text-3xl font-bold mb-6 text-gray-900">
							Hear From Our Candidates
						</h3>
						<p className="text-gray-600 max-w-3xl mx-auto">
							Thousands of professionals have successfully found rewarding
							careers abroad through our services. Here are some of their
							stories.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{Array.from({ length: 3 }).map((_, idx) => {
							const borders = [
								"border-purple-200",
								"border-indigo-200",
								"border-pink-200",
							];
							const textColors = ["purple-600", "indigo-600", "pink-600"];
							return (
								<div
									key={idx}
									className={`bg-white rounded-xl p-8 shadow-sm transition hover:shadow-md border-l-4 ${borders[idx % borders.length]}`}
								>
									<div className="flex items-center mb-6">
										<div className="w-16 h-16 rounded-full bg-gray-100 mr-4" />
										<div>
											<h4 className="font-semibold text-lg text-gray-900">
												Ahmed Ibrahim
											</h4>
											<p className="text-gray-600 text-sm">
												Civil Engineer, UAE
											</p>
										</div>
									</div>
									<p className="text-gray-600 mb-6">
										"ROY Global made my dream of working abroad a reality. From
										application to relocation, they guided me through every
										step. Now I'm building a successful career in Dubai."
									</p>
									<div
										className={`flex items-center text-${textColors[idx % textColors.length]}`}
									>
										{Array.from({ length: 5 }).map((__, i) => (
											<svg
												key={i}
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>
								</div>
							);
						})}
					</div>

					<div className="mt-12 text-center">
						<button className="inline-block font-medium px-6 py-3 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 transition">
							Read More Success Stories
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Success;
