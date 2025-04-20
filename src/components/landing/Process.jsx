import React from "react";

const Process = () => {
	return (
		<>
			{/* Process Section */}
			<section className="relative py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
				<div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-purple-100 to-white" />

				<div className="relative max-w-7xl mx-auto px-6">
					{/* Header */}
					<div className="text-center mb-16">
						<h2 className="inline-block text-sm font-semibold px-4 py-1 rounded-full bg-gradient-to-r from-teal-100 to-teal-200 text-teal-700 mb-4">
							Our Process
						</h2>
						<h3 className="text-3xl font-bold mb-6 text-gray-900">
							How It Works
						</h3>
						<p className="text-gray-600 max-w-3xl mx-auto">
							Our streamlined process ensures a smooth journey from application
							to placement, with local agents providing personalized support at
							every step.
						</p>
					</div>

					<div className="relative">
						{/* Timeline Line */}
						<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300" />

						<div className="space-y-16">
							{[
								{
									title: "Initial Consultation",
									desc: "Meet with one of our local agents who will assess your qualifications and guide you through the application process.",
									label: "Consultation",
								},
								{
									title: "Document Processing",
									desc: "Our team helps prepare and submit your application documents, which you can track and edit through our secure online system.",
									label: "Documentation",
								},
								{
									title: "Cultural Training",
									desc: "Pre-departure orientation covering cultural norms, workplace expectations, and practical tips for adapting to life in Arab countries.",
									label: "Training",
								},
								{
									title: "Placement & Support",
									desc: "We facilitate your travel arrangements and provide ongoing support after you arrive at your destination to ensure a smooth transition.",
									label: "Placement",
								},
							].map((step, idx) => {
								const gradients = [
									"from-purple-100 to-purple-200",
									"from-indigo-100 to-indigo-200",
									"from-pink-100 to-pink-200",
									"from-teal-100 to-teal-200",
								];
								const textCols = [
									"purple-700",
									"indigo-700",
									"pink-700",
									"teal-700",
								];
								const isEven = idx % 2 === 1;

								return (
									<div
										key={idx}
										className="relative flex flex-col md:flex-row items-center"
									>
										{/* Text block */}
										<div
											className={`md:w-1/2 px-0 md:px-12 ${
												isEven
													? "order-2 text-center md:text-right"
													: "order-1 text-center md:text-left"
											}`}
										>
											<h4
												className={`inline-block text-lg font-semibold mb-3 px-4 py-1 rounded-full
                    bg-gradient-to-tr ${gradients[idx]}
                    text-${textCols[idx]}`}
											>
												{step.title}
											</h4>
											<p className="text-gray-600">{step.desc}</p>
										</div>

										{/* Step number */}
										<div
											className={`w-12 h-12 bg-gradient-to-tr ${gradients[idx]} rounded-full flex items-center justify-center
                  text-${textCols[idx]} font-bold mb-4 md:mb-0 z-10 order-2`}
										>
											{idx + 1}
										</div>

										{/* Gradient Card */}
										<div
											className={`md:w-1/2 px-0 md:px-12 mt-4 md:mt-0 ${
												isEven ? "order-1" : "order-3"
											}`}
										>
											<div
												className={`bg-gradient-to-tr ${gradients[idx]} rounded-lg shadow-md p-6`}
											>
												<h5
													className={`text-${textCols[idx]} font-semibold text-xl mb-2`}
												>
													{step.label}
												</h5>
												<p className="text-white/90">
													{/* you can add any extra note here, otherwise just keep the label */}
												</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Process;
