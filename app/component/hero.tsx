export default function Hero() {
	return (
		<section
			id="top"
			className="relative flex min-h-[520px] w-full items-center overflow-hidden shadow md:min-h-[680px]">
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 h-full w-full object-cover">
				<source src="/hero.mp4" type="video/mp4" />
			</video>

			<div className="absolute inset-0 bg-black/65 z-10" />
			<div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(109,40,149,0.16),transparent_55%)]" />
			<div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[var(--voodoo-black)] to-transparent" />

			<div className="relative z-20 mx-auto flex w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
				<div className="max-w-3xl">
					<div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gray-300">
						Team Voodoo Boxing
					</div>

					<h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
						Peter “Voodoo Pete” Latorre
					</h1>

					<p className="mt-4 text-lg font-medium text-[var(--voodoo-white)] sm:text-xl">
						Professional Boxer (6-0)
					</p>

					<p className="mt-6 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
						Professional Boxer | NRA Certified Firearms Instructor | United States
						Marine Corps Infantry Veteran | Clinical Rehabilitation in Mental Health
						Counseling, MS | President, Hofstra Student Veterans Association
					</p>

					<div className="mt-8 flex flex-col gap-3 sm:flex-row">
						<a
							href="#sponsorship"
							className="inline-flex items-center justify-center rounded-md bg-[var(--voodoo-purple)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
							Sponsorship Inquiries
						</a>
						<a
							href="#team"
							className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
							Meet Team Voodoo
						</a>
					</div>

					<div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
						<div className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
							<p className="text-xs uppercase tracking-[0.2em] text-gray-400">
								Record
							</p>
							<p className="mt-2 text-2xl font-bold text-white">6-0</p>
						</div>
						<div className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
							<p className="text-xs uppercase tracking-[0.2em] text-gray-400">KOs</p>
							<p className="mt-2 text-2xl font-bold text-white">5</p>
						</div>
						<div className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
							<p className="text-xs uppercase tracking-[0.2em] text-gray-400">
								Discipline
							</p>
							<p className="mt-2 text-2xl font-bold text-white">Elite</p>
						</div>
						<div className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
							<p className="text-xs uppercase tracking-[0.2em] text-gray-400">
								Identity
							</p>
							<p className="mt-2 text-2xl font-bold text-white">Voodoo</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
