import React from "react";

const Contact = () => {
	return (
		<>
			{/* Contact Section */}
			<section id="contact" className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="inline-block text-sm font-semibold px-4 py-1 rounded-full bg-navy-100 text-navy-800 mb-4">
							Get In Touch
						</h2>
						<h3 className="text-3xl font-bold mb-6 text-gray-900">
							Contact Us
						</h3>
						<p className="text-gray-600 max-w-3xl mx-auto">
							Have questions about our services? Reach out to our team for more
							information or to schedule a consultation.
						</p>
					</div>

					<div className="flex flex-col md:flex-row gap-12">
						<div className="md:w-1/2">
							<form className="bg-white p-8 rounded-xl shadow-sm">
								<div className="mb-6">
									<label className="block text-gray-700 text-sm font-medium mb-2">
										Full Name
									</label>
									<input
										type="text"
										className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
									/>
								</div>
								<div className="mb-6">
									<label className="block text-gray-700 text-sm font-medium mb-2">
										Email
									</label>
									<input
										type="email"
										className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
									/>
								</div>
								<div className="mb-6">
									<label className="block text-gray-700 text-sm font-medium mb-2">
										Phone
									</label>
									<input
										type="tel"
										className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
									/>
								</div>
								<div className="mb-6">
									<label className="block text-gray-700 text-sm font-medium mb-2">
										Message
									</label>
									<textarea
										rows="4"
										className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
									></textarea>
								</div>
								<button className="w-full bg-navy-800 hover:bg-navy-900 text-white font-medium py-3 rounded-md transition">
									Send Message
								</button>
							</form>
						</div>

						<div className="md:w-1/2">
							<div className="bg-white p-8 rounded-xl shadow-sm h-full">
								<h4 className="text-xl font-semibold mb-6 text-gray-900">
									Our Offices
								</h4>

								<div className="space-y-8">
									<div className="flex">
										<div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mr-4">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6 text-navy-800"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
										</div>
										<div>
											<h5 className="font-semibold text-gray-900 mb-1">
												Main Headquarters
											</h5>
											<p className="text-gray-600">
												123 Business Avenue, Suite 400
												<br />
												City, Country 12345
											</p>
										</div>
									</div>

									<div className="flex">
										<div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mr-4">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6 text-navy-800"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
												/>
											</svg>
										</div>
										<div>
											<h5 className="font-semibold text-gray-900 mb-1">
												Phone
											</h5>
											<p className="text-gray-600">+123 456 7890</p>
											<p className="text-gray-600">+123 456 7891</p>
										</div>
									</div>

									<div className="flex">
										<div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mr-4">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6 text-navy-800"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
												/>
											</svg>
										</div>
										<div>
											<h5 className="font-semibold text-gray-900 mb-1">
												Email
											</h5>
											<p className="text-gray-600">info@royglobal.com</p>
											<p className="text-gray-600">support@royglobal.com</p>
										</div>
									</div>

									<div className="flex">
										<div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mr-4">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6 text-navy-800"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
												/>
											</svg>
										</div>
										<div>
											<h5 className="font-semibold text-gray-900 mb-1">
												Hours
											</h5>
											<p className="text-gray-600">
												Monday - Friday: 9:00 AM - 5:00 PM
											</p>
											<p className="text-gray-600">
												Saturday: 10:00 AM - 2:00 PM
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
