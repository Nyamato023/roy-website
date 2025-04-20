export default function Home() {
	return (
		<main className="min-h-screen bg-white">
			{/* Header */}
			<header className="w-full bg-white shadow-sm sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
					{/* Logo */}
					<div className="flex items-center">
						<div className="text-2xl font-bold text-navy-900">
							ROY<span className="text-gold-500">GLOBAL</span>
						</div>
					</div>

					{/* Navigation */}
					<nav className="hidden md:flex items-center gap-8">
						<a
							href="#about"
							className="text-gray-700 hover:text-gold-600 font-medium transition"
						>
							About Us
						</a>
						<a
							href="#services"
							className="text-gray-700 hover:text-gold-600 font-medium transition"
						>
							Services
						</a>
						<a
							href="#destinations"
							className="text-gray-700 hover:text-gold-600 font-medium transition"
						>
							Destinations
						</a>
						<a
							href="#success"
							className="text-gray-700 hover:text-gold-600 font-medium transition"
						>
							Success Stories
						</a>
						<a
							href="#contact"
							className="text-gray-700 hover:text-gold-600 font-medium transition"
						>
							Contact
						</a>
					</nav>

					{/* Authentication & Language Buttons */}
					<div className="flex items-center gap-4">
						<button className="hidden md:block text-gray-700 font-medium hover:text-gold-600 transition">
							EN
						</button>
						<button className="hidden md:block text-gray-700 font-medium hover:text-gold-600 transition">
							AR
						</button>
						<button className="bg-navy-800 hover:bg-navy-900 text-white px-5 py-2 rounded-md font-medium transition">
							Agent Login
						</button>
						<button className="md:hidden text-gray-700">☰</button>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="relative bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-900">
				{/* soft gradient overlay for depth */}
				<div className="absolute inset-0 opacity-20">
					<div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-white"></div>
				</div>

				<div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center">
					{/* Left column */}
					<div className="md:w-1/2 z-10 mb-12 md:mb-0">
						{/* Highlight Badge */}
						<div className="inline-block bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
							Trusted for Over a Decade
						</div>

						{/* Main Heading */}
						<h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
							Connecting Talent with Opportunities Across the World for a Decade
						</h1>

						{/* Subtitle */}
						<p className="text-lg text-gray-600 mb-8">
							Specializing in overseas job placement to Arab countries with
							comprehensive support from application to placement.
						</p>

						{/* Buttons */}
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

					{/* Right column (optional illustration) */}
					{/* 
    <div className="md:w-1/2 flex justify-center z-10">
      <YourIllustrationComponent className="w-full max-w-md" />
    </div>
    */}
				</div>
			</section>

			{/* Trusted By Section */}
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
		</main>
	);
}
