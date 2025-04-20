import React from "react";

const Footer = () => {
	return (
		<>
			{/* Footer */}
			<footer className="bg-navy-900 text-white pt-16 pb-8">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
						<div>
							<div className="flex items-center mb-6">
								<div className="text-2xl font-bold text-white">
									ROY<span className="text-gold-500">GLOBAL</span>
								</div>
							</div>
							<p className="text-gray-400 mb-6">
								A decade of excellence in connecting talent with opportunities
								across the Arab world.
							</p>
							<div className="flex space-x-4">
								<a
									href="#"
									className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-navy-700 transition"
								>
									<span className="text-white">FB</span>
								</a>
								<a
									href="#"
									className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-navy-700 transition"
								>
									<span className="text-white">TW</span>
								</a>
								<a
									href="#"
									className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-navy-700 transition"
								>
									<span className="text-white">IG</span>
								</a>
								<a
									href="#"
									className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-navy-700 transition"
								>
									<span className="text-white">LI</span>
								</a>
							</div>
						</div>

						<div>
							<h4 className="text-lg font-semibold mb-6">Quick Links</h4>
							<ul className="space-y-3">
								<li>
									<a
										href="#"
										className="text-gray-400 hover:text-gold-500 transition"
									>
										Home
									</a>
								</li>
								<li>
									<a
										href="#about"
										className="text-gray-400 hover:text-gold-500 transition"
									>
										About Us
									</a>
								</li>
								<li>
									<a
										href="#services"
										className="text-gray-400 hover:text-gold-500 transition"
									>
										Services
									</a>
								</li>
								<li>
									<a
										href="#destinations"
										className="text-gray-400 hover:text-gold-500 transition"
									>
										Destinations
									</a>
								</li>
								<li>
									<a
										href="#success"
										className="text-gray-400 hover:text-gold-500 transition"
									>
										Success Stories
									</a>
								</li>
								<li>
									<a
										href="#contact"
										className="text-gray-400 hover:text-gold-500 transition"
									>
										Contact
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-lg font-semibold mb-6">Services</h4>
							<ul className="space-y-3">
								<li>
									<a
										href="#"
										className="text-gray-400 hover:text-gold-500 transition"
									>
										Job Placement
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-400 hover:text-gold-500 transition"
									>
										Visa Assistance
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-400 hover:text-gold-500 transition"
									>
										Document Processing
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-400 hover:text-gold-500 transition"
									>
										Cultural Training
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-400 hover:text-gold-500 transition"
									>
										Relocation Support
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-400 hover:text-gold-500 transition"
									>
										Career Counseling
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-lg font-semibold mb-6">
								Sign Up for Updates
							</h4>
							<p className="text-gray-400 mb-4">
								Stay informed about new job opportunities and industry insights.
							</p>
							<form>
								<div className="flex">
									<input
										type="email"
										placeholder="Your email"
										className="bg-navy-800 text-white px-4 py-2 rounded-l-md flex-1 border border-navy-700 focus:outline-none focus:ring-1 focus:ring-gold-500"
									/>
									<button className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-4 rounded-r-md font-medium transition">
										Subscribe
									</button>
								</div>
							</form>
						</div>
					</div>

					<div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center">
						<div className="text-gray-400 mb-4 md:mb-0">
							© 2025 ROY Global. All rights reserved.
						</div>
						<div className="flex space-x-6">
							<a
								href="#"
								className="text-gray-400 hover:text-gold-500 transition text-sm"
							>
								Privacy Policy
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-gold-500 transition text-sm"
							>
								Terms of Service
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-gold-500 transition text-sm"
							>
								Cookies Policy
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
