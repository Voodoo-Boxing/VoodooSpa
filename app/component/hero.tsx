export default function Hero() {
	return (
		<section className="relative h-[350px] md:h-[525px] w-full overflow-hidden flex items-center justify-center shadow">
			{/* 🎥 Background Video */}
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover">
				<source src="/hero.mp4" type="video/mp4" />
			</video>

			<div className="absolute inset-0 bg-black/50 z-10" />

			{/* 🧠 Content goes here */}
			<div className="relative z-20 text-white text-center"></div>
		</section>
	);
}
