// src/components/landing/Header.jsx
import React from "react";

const Header = () => {
	return (
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
	);
};

export default Header;
