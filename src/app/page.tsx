import React from "react";
import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import TrustedBy from "../components/landing/TrustedBy";
import About from "../components/landing/About";
import Services from "../components/landing/Services";
import Destinations from "../components/landing/Destinations";
import Success from "../components/landing/Success";
import Process from "../components/landing/Process";
import Contact from "../components/landing/Contact";
import Footer from "../components/landing/Footer";

export default function Home() {
	return (
		<main className="min-h-screen bg-white">
			<Header />
			<Hero />
			<TrustedBy />
			<About />
			<Services />
			<Destinations />
			<Success />
			<Process />
			<Contact />
			<Footer />
		</main>
	);
}
