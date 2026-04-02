import { FOOTER_NAVIGATION } from "~/lib/constants";

export default function Footer() {
	return (
		<footer className="border-t border-(--voodoo-white-1) bg-[var(--voodoo-black)]">
			<div className="mx-auto w-full max-w-screen-xl px-4 py-8 md:py-10">
				<div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
					<a
						href="#top"
						className="flex items-center justify-center gap-3 md:justify-start">
						<img src="/logo.png" className="h-16 w-auto" alt="Team Voodoo Pete Logo" />
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
								Team Voodoo Boxing
							</p>
							<p className="text-lg font-semibold whitespace-nowrap text-white">
								Peter “Voodoo Pete” Latorre
							</p>
						</div>
					</a>

					<ul className="flex flex-col items-center gap-2 text-sm font-medium text-gray-400 md:flex-row md:flex-wrap md:gap-3">
						{FOOTER_NAVIGATION.map((item, index) => {
							return (
								<li key={index} className="flex">
									<a
										href={item.href}
										className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white">
										{item.name}
									</a>
								</li>
							);
						})}
					</ul>
				</div>

				<hr className="my-6 border-(--voodoo-white-1) lg:my-8" />

				<div className="flex flex-col gap-2 text-center md:flex-row md:items-center md:justify-between md:text-left">
					<span className="block text-sm text-gray-400">
						© 2026 Team Voodoo Boxing. All Rights Reserved.
					</span>
					<span className="block text-sm text-gray-500">
						Official website of Peter “Voodoo Pete” Latorre
					</span>
				</div>
			</div>
		</footer>
	);
}
